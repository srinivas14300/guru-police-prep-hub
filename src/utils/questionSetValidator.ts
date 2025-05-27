import { Question } from '@/pages/MockTests';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ValidationResult {
  duplicateIds: number[];
  duplicateQuestions: { id1: number; id2: number; text1: string; text2: string }[];
  invalidOptions: { id: number; reason: string }[];
  incorrectExplanations: { id: number; reason: string }[];
  factualErrors: { id: number; reason: string }[];
}

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

function validateQuestionSet(questions: Question[]): ValidationResult {
  const result: ValidationResult = {
    duplicateIds: [],
    duplicateQuestions: [],
    invalidOptions: [],
    incorrectExplanations: [],
    factualErrors: []
  };

  // Check for duplicate IDs
  const idMap = new Map<number, Question>();
  questions.forEach(q => {
    if (idMap.has(q.id)) {
      result.duplicateIds.push(q.id);
    }
    idMap.set(q.id, q);
  });

  // Check for duplicate questions (case-insensitive, normalized whitespace)
  const textMap = new Map<string, number>();
  questions.forEach(q => {
    const normalizedText = normalizeText(q.text);
    if (textMap.has(normalizedText)) {
      result.duplicateQuestions.push({
        id1: textMap.get(normalizedText)!,
        id2: q.id,
        text1: questions.find(q2 => q2.id === textMap.get(normalizedText))!.text,
        text2: q.text
      });
    }
    textMap.set(normalizedText, q.id);
  });

  // Check for invalid options
  questions.forEach(q => {
    if (q.options.length !== 4) {
      result.invalidOptions.push({ id: q.id, reason: 'Must have exactly 4 options' });
    }
    if (new Set(q.options).size !== 4) {
      result.invalidOptions.push({ id: q.id, reason: 'Options must be unique' });
    }
    if (q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
      result.invalidOptions.push({ id: q.id, reason: 'Invalid correct answer index' });
    }
  });

  // Check for empty or very short explanations
  questions.forEach(q => {
    if (!q.explanation || q.explanation.length < 10) {
      result.incorrectExplanations.push({ id: q.id, reason: 'Explanation too short or missing' });
    }
  });

  // Check for known factual errors (based on the analysis)
  questions.forEach(q => {
    // Arithmetic section
    if (q.subject === 'Arithmetic') {
      if (q.id === 1 && q.text.includes('₹10,000 in 3 years and ₹15,000 in 6 years')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Compound interest calculation error. Correct rate should be ~14.47%, not 26.5%' 
        });
      }
      if (q.id === 7 && q.text.includes('train passes two persons')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Train length calculation error. Options do not match correct answer of 112.5m' 
        });
      }
    }

    // Reasoning section
    if (q.subject === 'Reasoning') {
      if (q.text.includes('PEN -> QGO, INK -> JQN')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Coding pattern is inconsistent between examples' 
        });
      }
      if (q.text.includes('Maternal Uncle')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Blood relation logic is flawed - none of the options correctly represent maternal uncle' 
        });
      }
    }

    // Telangana GK section
    if (q.subject === 'Telangana GK') {
      if (q.text.includes('largest district')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Incorrect - Bhadradri Kothagudem is the largest district, not Mahabubnagar' 
        });
      }
      if (q.text.includes('state bird')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Incorrect - State bird is Indian Roller (Palapitta), not Painted Stork or Indian Pitta' 
        });
      }
    }

    // Current Affairs section
    if (q.subject === 'Current Affairs') {
      if (q.text.includes('ISA 21st Member')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Incorrect - USA was 101st signatory member, not 21st' 
        });
      }
      if (q.text.includes('PMAY-U Target Year')) {
        result.factualErrors.push({ 
          id: q.id, 
          reason: 'Outdated - Target year has been extended beyond 2024' 
        });
      }
    }
  });

  return result;
}

// Main function to validate and generate report
async function main() {
  try {
    // Read questions from JSON file
    const questionsPath = path.join(__dirname, '../data/mock-tests/questions.json');
    const questionsData = await fs.promises.readFile(questionsPath, 'utf-8');
    const questions: Question[] = JSON.parse(questionsData);

    // Validate questions
    const validationResult = validateQuestionSet(questions);

    // Generate report
    console.log('Question Set Validation Report');
    console.log('============================\n');

    if (validationResult.duplicateIds.length > 0) {
      console.log('Duplicate IDs found:');
      validationResult.duplicateIds.forEach(id => console.log(`- ID: ${id}`));
      console.log();
    }

    if (validationResult.duplicateQuestions.length > 0) {
      console.log('Duplicate Questions found:');
      validationResult.duplicateQuestions.forEach(({ id1, id2, text1, text2 }) => {
        console.log(`- IDs ${id1} and ${id2}:`);
        console.log(`  Q1: ${text1}`);
        console.log(`  Q2: ${text2}`);
      });
      console.log();
    }

    if (validationResult.invalidOptions.length > 0) {
      console.log('Invalid Options found:');
      validationResult.invalidOptions.forEach(({ id, reason }) => {
        console.log(`- Question ${id}: ${reason}`);
      });
      console.log();
    }

    if (validationResult.incorrectExplanations.length > 0) {
      console.log('Incorrect Explanations found:');
      validationResult.incorrectExplanations.forEach(({ id, reason }) => {
        console.log(`- Question ${id}: ${reason}`);
      });
      console.log();
    }

    if (validationResult.factualErrors.length > 0) {
      console.log('Factual Errors found:');
      validationResult.factualErrors.forEach(({ id, reason }) => {
        console.log(`- Question ${id}: ${reason}`);
      });
      console.log();
    }

    // Summary
    console.log('Summary:');
    console.log(`Total Questions: ${questions.length}`);
    console.log(`Duplicate IDs: ${validationResult.duplicateIds.length}`);
    console.log(`Duplicate Questions: ${validationResult.duplicateQuestions.length}`);
    console.log(`Invalid Options: ${validationResult.invalidOptions.length}`);
    console.log(`Incorrect Explanations: ${validationResult.incorrectExplanations.length}`);
    console.log(`Factual Errors: ${validationResult.factualErrors.length}`);

  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 