import { arithmeticQuestions } from '../data/mock-tests/constable-prelims-full-test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportQuestions() {
  try {
    // Combine all questions
    const allQuestions = [
      ...arithmeticQuestions,
      // Add other sections as they are fixed
    ];

    // Write to JSON file
    const outputPath = path.join(__dirname, '../data/mock-tests/questions.json');
    await fs.promises.writeFile(
      outputPath,
      JSON.stringify(allQuestions, null, 2),
      'utf-8'
    );

    console.log(`Exported ${allQuestions.length} questions to ${outputPath}`);
  } catch (error) {
    console.error('Error exporting questions:', error);
  }
}

exportQuestions(); 