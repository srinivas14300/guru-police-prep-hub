const fs = require('fs');
const path = require('path');

// Helper to strip option prefixes (A), B), etc.)
function stripOptionPrefix(option) {
  return option.replace(/^[A-D]\)\s*/, '').trim();
}

async function main() {
  let questions = [];
  try {
    const jsonPath = path.resolve(__dirname, '../data/mock-tests/questions.json');
    const data = fs.readFileSync(jsonPath, 'utf-8');
    questions = JSON.parse(data);
  } catch (e) {
    console.error('Could not load questions.json:', e.message);
    process.exit(1);
  }

  const seenIds = new Set();
  const seenQuestions = new Set();
  const duplicateIds = [];
  const duplicateQuestions = [];
  const invalidOptionStructure = [];

  questions.forEach(q => {
    // Check for duplicate IDs
    if (seenIds.has(q.id)) {
      duplicateIds.push(q.id);
    } else {
      seenIds.add(q.id);
    }

    // Check for duplicate questions (case-insensitive and normalized whitespace)
    const normalizedQuestion = q.text.toLowerCase().replace(/\s+/g, ' ').trim();
    if (seenQuestions.has(normalizedQuestion)) {
      duplicateQuestions.push(q.id);
    } else {
      seenQuestions.add(normalizedQuestion);
    }

    // Check for invalid option structure
    const strippedOptions = q.options.map(stripOptionPrefix);
    const uniqueOptions = new Set(strippedOptions);
    if (q.options.length !== 4 || uniqueOptions.size < 2) {
      invalidOptionStructure.push({ id: q.id, options: q.options });
    }
  });

  console.log('--- Validation Report ---');
  console.log(`Total questions processed: ${questions.length}`);

  if (duplicateIds.length > 0) {
    console.warn('\nDuplicate IDs found:', duplicateIds);
  } else {
    console.log('\nNo duplicate IDs found.');
  }

  if (duplicateQuestions.length > 0) {
    console.warn('\nDuplicate or near-duplicate questions found (by ID): ', duplicateQuestions);
  } else {
    console.log('\nNo duplicate questions found.');
  }

  if (invalidOptionStructure.length > 0) {
    console.warn('\nQuestions with invalid option structure:', invalidOptionStructure);
  } else {
    console.log('\nNo questions with invalid option structure found.');
  }

  console.log('-------------------------');
}

main(); 