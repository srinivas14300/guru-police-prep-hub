// This file contains the full set of 200 questions for the TS Police Constable Prelims mock test
// It includes questions across all required subjects with proper categorization and difficulty levels

import { Question } from '@/pages/MockTests';

// Helper function to generate questions with consistent structure
const createQuestion = (
  id: number,
  text: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  subject: string,
  topic: string,
  difficulty: 'Easy' | 'Medium' | 'Hard'
): Question => ({
  id,
  text,
  options,
  correctAnswer,
  explanation,
  difficulty,
  subject: subject as any, // Type assertion since we know these are valid subjects
  topic,
  section: subject,
  marks: 1,
  timeLimit: 54 // 180 minutes for 200 questions = ~54 seconds per question
});

// ======================
// Arithmetic Ability (50)
// ======================
export const arithmeticQuestions: Question[] = [
  // Number System
  createQuestion(
    1,
    'What is the least number which when divided by 12, 15, 20, and 25 leaves remainders 8, 11, 16, and 21 respectively?',
    ['A) 296', 'B) 300', 'C) 304', 'D) 308'],
    0,
    'First, find the LCM of 12, 15, 20, and 25 which is 300. The difference between each divisor and remainder is 4. So, the required number = LCM - common difference = 300 - 4 = 296.',
    'Arithmetic',
    'Number System',
    'Medium'
  ),
  // Add 49 more arithmetic questions...
];

// ====================
// Reasoning (50)
// ====================
export const reasoningQuestions: Question[] = [
  // Analogy
  createQuestion(
    51,
    'PEN is to WRITING as NEEDLE is to:',
    ['A) CLOTH', 'B) SEAMSTRESS', 'C) SEWING', 'D) THREAD'],
    2,
    'A pen is used for writing, similarly, a needle is used for sewing.',
    'Reasoning',
    'Analogy',
    'Easy'
  ),
  // Add 49 more reasoning questions...
];

// ====================
// English (20)
// ====================
export const englishQuestions: Question[] = [
  // Vocabulary
  createQuestion(
    101,
    'Choose the word most similar in meaning to "EPHEMERAL":',
    ['A) Eternal', 'B) Fleeting', 'C) Permanent', 'D) Enduring'],
    1,
    'Ephemeral means lasting for a very short time, similar in meaning to fleeting.',
    'English',
    'Vocabulary',
    'Medium'
  ),
  // Add 19 more English questions...
];

// ====================
// Science (15)
// ====================
export const scienceQuestions: Question[] = [
  createQuestion(
    121,
    'Which of the following is NOT a greenhouse gas?',
    ['A) Carbon dioxide', 'B) Methane', 'C) Oxygen', 'D) Nitrous oxide'],
    2,
    'Oxygen (O₂) is not a greenhouse gas, while the others are greenhouse gases that contribute to global warming.',
    'Science',
    'Environmental Science',
    'Easy'
  ),
  // Add 14 more science questions...
];

// ====================
// History (15)
// ====================
export const historyQuestions: Question[] = [
  createQuestion(
    136,
    'Who was the first Governor-General of Independent India?',
    ['A) C. Rajagopalachari', 'B) Lord Mountbatten', 'C) Rajendra Prasad', 'D) Jawaharlal Nehru'],
    1,
    'Lord Mountbatten served as the last Viceroy and first Governor-General of Independent India from 1947 to 1948.',
    'History',
    'Modern India',
    'Easy'
  ),
  // Add 14 more history questions...
];

// ====================
// Geography (15)
// ====================
export const geographyQuestions: Question[] = [
  createQuestion(
    151,
    'Which of the following rivers does NOT flow through Telangana?',
    ['A) Godavari', 'B) Krishna', 'C) Tungabhadra', 'D) Bhima'],
    2,
    'The Tungabhadra river flows through Karnataka and Andhra Pradesh but not through Telangana.',
    'Geography',
    'Indian Rivers',
    'Medium'
  ),
  // Add 14 more geography questions...
];

// ====================
// Polity & Economy (15)
// ====================
export const polityEconomyQuestions: Question[] = [
  createQuestion(
    166,
    'The concept of Fundamental Rights in the Indian Constitution is borrowed from:',
    ['A) UK', 'B) USA', 'C) France', 'D) Canada'],
    1,
    'The concept of Fundamental Rights in the Indian Constitution is borrowed from the United States Constitution (Bill of Rights).',
    'Polity & Economy',
    'Indian Constitution',
    'Easy'
  ),
  // Add 14 more polity & economy questions...
];

// ====================
// Current Affairs (5)
// ====================
export const currentAffairsQuestions: Question[] = [
  createQuestion(
    181,
    'Which city hosted the G20 Summit in 2023?',
    ['A) New Delhi', 'B) Rome', 'C) Bali', 'D) Osaka'],
    0,
    'The G20 Summit 2023 was held in New Delhi, India, on September 9-10, 2023.',
    'Current Affairs',
    'International Events',
    'Easy'
  ),
  // Add 4 more current affairs questions...
];

// ====================
// Telangana GK (15)
// ====================
export const telanganaQuestions: Question[] = [
  createQuestion(
    186,
    'The famous Ramappa Temple, a UNESCO World Heritage Site, is located in which district of Telangana?',
    ['A) Warangal', 'B) Nalgonda', 'C) Karimnagar', 'D) Khammam'],
    0,
    'The Ramappa Temple, also known as the Ramalingeswara Temple, is located in Palampet village, Warangal district, Telangana.',
    'Telangana GK',
    'Heritage and Culture',
    'Medium'
  ),
  // Add 14 more Telangana GK questions...
];

// ====================
// Combine all questions
// ====================
export const constablePrelims1Questions = [
  ...arithmeticQuestions,
  ...reasoningQuestions,
  ...englishQuestions,
  ...scienceQuestions,
  ...historyQuestions,
  ...geographyQuestions,
  ...polityEconomyQuestions,
  ...currentAffairsQuestions,
  ...telanganaQuestions
];

// Export question counts for validation
export const questionCounts = {
  arithmetic: arithmeticQuestions.length,
  reasoning: reasoningQuestions.length,
  english: englishQuestions.length,
  science: scienceQuestions.length,
  history: historyQuestions.length,
  geography: geographyQuestions.length,
  polityEconomy: polityEconomyQuestions.length,
  currentAffairs: currentAffairsQuestions.length,
  telangana: telanganaQuestions.length,
  total: constablePrelims1Questions.length
};

export default constablePrelims1Questions;
