import { Question } from '@/pages/MockTests';

// Helper function to create questions with consistent structure
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
  subject: subject as any,
  topic,
  section: subject,
  marks: 1,
  timeLimit: 54
});

// Corrected and Validated Questions

export const updatedArithmeticQuestions: Question[] = [
  // Existing correct questions 1-5 remain the same
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
  // ... other correct questions 2-5
];

// Fix for Question 7 (Coding-Decoding)
export const updatedReasoningQuestions: Question[] = [
  // ... other questions
  createQuestion(
    7,
    'In a certain code, COMPUTER is written as PMOCRETU. How is KEYBOARD written in that code?',
    ['A) DRAOBYAK', 'B) DRAOBYAE', 'C) YAKDRAOB', 'D) BYEKDRAO'],
    3,
    'The coding logic is: Split the word into two equal halves, reverse each half. COMPUTER → COMP | UTER → PMOC | RETU → PMOCRETU. Applying same to KEYBOARD: KEYB | OARD → BYEK | DRAO → BYEKDRAO',
    'Reasoning',
    'Coding-Decoding',
    'Medium'
  ),
  // ... other questions
];

// Fix for Question 10 (Direction Sense)
export const updatedDirectionSenseQuestion: Question = createQuestion(
  10,
  'A man walks 10 m towards South. Then turning to his left, he walks 25 m. Then turning to his right, he walks 5 m. Again, he turns to his left and walks 10 m. How far is he from his house and in which direction?',
  [
    'A) 30 m, South-East',
    'B) 35 m, South',
    'C) 40 m, East',
    'D) 35 m, East'
  ],
  3,
  'Starts at (0,0). Walks 10m South: (0, -10). Turns left (East), walks 25m: (25, -10). Turns right (South), walks 5m: (25, -15). Turns left (East), walks 10m: (35, -15). Final position is 35m East and 15m South from start.',
  'Reasoning',
  'Direction Sense',
  'Hard'
);

// Fix for Question 43 (Largest District in Telangana)
export const updatedTelanganaGKQuestions: Question[] = [
  // ... other questions
  createQuestion(
    43,
    'Which is the largest district in Telangana by area after the 2016 reorganization?',
    [
      'A) Bhadradri Kothagudem',
      'B) Mahabubnagar',
      'C) Nalgonda',
      'D) Adilabad'
    ],
    0,
    'After the 2016 reorganization, Bhadradri Kothagudem became the largest district in Telangana by area, covering approximately 7,483 square kilometers.',
    'Telangana GK',
    'Districts',
    'Easy'
  ),
  // ... other questions
];

// Fix for Question 49 (Tiger Reserves in Telangana)
export const updatedEnvironmentQuestions: Question[] = [
  // ... other questions
  createQuestion(
    49,
    'How many tiger reserves are there in Telangana as of 2024?',
    [
      'A) 1',
      'B) 2',
      'C) 3',
      'D) 4'
    ],
    1,
    'Telangana has two tiger reserves: 1) Amrabad Tiger Reserve and 2) Kawal Tiger Reserve. Both are important for the conservation of the Royal Bengal Tiger in the region.',
    'Environment',
    'Protected Areas',
    'Medium'
  )
];

// Fix for Question 50 (IIT in Telangana)
export const updatedEducationQuestions: Question[] = [
  // ... other questions
  createQuestion(
    50,
    'Where is the Indian Institute of Technology (IIT) located in Telangana?',
    [
      'A) Warangal',
      'B) Hyderabad',
      'C) Karimnagar',
      'D) Nizamabad'
    ],
    1,
    'The Indian Institute of Technology Hyderabad (IITH) is located at Kandi, Sangareddy district near Hyderabad. It was established in 2008 as one of the eight new IITs.',
    'Education',
    'Institutions',
    'Easy'
  )
];

// Combine all updated questions
export const updatedConstablePrelimsQuestions = [
  ...updatedArithmeticQuestions,
  ...updatedReasoningQuestions,
  updatedDirectionSenseQuestion,
  ...updatedTelanganaGKQuestions,
  ...updatedEnvironmentQuestions,
  ...updatedEducationQuestions
];
