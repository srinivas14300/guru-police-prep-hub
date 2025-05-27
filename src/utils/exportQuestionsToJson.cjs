const fs = require('fs');
const path = require('path');

// Read the TypeScript file
const filePath = path.join(__dirname, '../data/mock-tests/constable-prelims-full-test.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Extract questions using regex
const questions = [];
const questionRegex = /createValidatedQuestion\s*\(\s*(\d+)\s*,\s*['"]([^'"]+)['"]\s*,\s*\[([^\]]+)\]\s*,\s*(\d+)\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/g;

let match;
while ((match = questionRegex.exec(fileContent)) !== null) {
  const [_, id, text, optionsStr, correctAnswer, explanation, subject, topic, difficulty] = match;
  
  // Parse options array
  const options = optionsStr.split(',').map(opt => opt.trim().replace(/^['"]|['"]$/g, ''));
  
  questions.push({
    id: parseInt(id),
    text,
    options,
    correctAnswer: parseInt(correctAnswer),
    explanation,
    subject,
    topic,
    difficulty,
    section: subject,
    marks: 1,
    timeLimit: 54
  });
}

// Write to JSON file
const outputPath = path.join(__dirname, '../data/mock-tests/questions.json');
fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));

console.log(`Exported ${questions.length} questions to ${outputPath}`);