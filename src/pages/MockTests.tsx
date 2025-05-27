import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, Zap, Clock, BookOpen, Award, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { constablePrelims1Questions } from '@/data/mock-tests/constable-prelims-1';
import { updatedConstablePrelimsQuestions } from '@/data/mock-tests/constable-prelims-updated';
import { constablePrelimsFullTest } from '@/data/mock-tests/constable-prelims-full-test';
import { useNavigate } from 'react-router-dom';

// Type Definitions
type Difficulty = 'Easy' | 'Medium' | 'Hard';
// Define a union type of all possible subjects
type Subject =
  | 'Arithmetic'
  | 'General Studies'
  | 'General Knowledge'
  | 'Reasoning'
  | 'Current Affairs'
  | 'Telugu'
  | 'English'
  | 'Telangana History'
  | 'New Criminal Laws'
  | 'Indian Penal Code'
  | 'Criminal Procedure Code'
  | 'Translation'
  | 'Quantitative Aptitude'
  | 'Logical Reasoning'
  | 'General Science'
  | 'Aptitude'
  | 'Indian History' // Added from mockTests data
  | 'Indian Geography' // Added from mockTests data
  | 'Indian Polity' // Added from mockTests data
  | 'Indian Economy' // Added from mockTests data
  | 'Telangana Geography' // Added from mockTests data
  | 'Telangana Polity' // Added from mockTests data
  | 'Telangana Economy' // Added from mockTests data
  | 'Telangana GK'; // Added from mockTests data

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
  subject: Subject;
  topic: string;
  section: string;
  marks: number;
  timeLimit: number;
}

export interface MockTestWithQuestions {
  id: number;
  title: string;
  description: string;
  duration: number;
  questions: Question[]; // This will be populated by the generation logic
  subject: Subject; // Primary subject of the test
  difficulty: Difficulty;
  isFree: boolean;
  isNew: boolean;
  isPremium: boolean;
  link: string;
  attempts: number;
  lastAttempted: Date | null;
  progress: number;
  totalMarks: number;
  passingMarks: number;
  sections: Array<{
    name: string;
    questions: number; // Number of questions in this section (used for generation)
    marks: number;
    duration?: number; // Optional: duration for this section
    topics?: string[];
    subSections?: Array<{ // For sections like General Studies that have sub-parts
      name: string;
      questions: number;
    }>;
  }>;
  examType: string;
  subjects: string[]; // List of subjects covered in the test (from mockTests data)
  testUrl?: string; // From mockTests data
}


// Mock test data (structure for defining tests, not including generated questions yet)
export const mockTests = [
  {
    id: 1,
    title: 'TS Police Constable Prelims - Full Length Test 1',
    examType: 'Constable Prelims',
    subjects: [
      'Arithmetic',
      'Reasoning',
      'English',
      'General Science',
      'Indian History',
      'Indian Geography',
      'Indian Polity',
      'Indian Economy',
      'Current Affairs',
      'Telangana History',
      'Telangana Geography',
      'Telangana Polity',
      'Telangana Economy',
      'Telangana GK',
      'Telugu'
    ],
    questions: 200,
    duration: 180,
    description: 'Comprehensive full-length mock test for TS Police Constable Prelims 2025. Covers all subjects as per latest syllabus including Arithmetic, Reasoning, General Studies, and Language sections. Includes detailed solutions and explanations.',
    testUrl: '/test/1',
    isFree: true,
    isNew: true,
    isPremium: false,
    attempts: 0,
    lastAttempted: null,
    progress: 0,
    totalMarks: 200,
    passingMarks: 60,
    sections: [
      {
        name: 'Arithmetic Ability',
        questions: 50,
        marks: 50,
        duration: 45,
        topics: [
          'Number System', 'LCM & HCF', 'Simplification',
          'Simple & Compound Interest', 'Ratio & Proportion',
          'Averages', 'Percentages', 'Profit & Loss',
          'Time & Work', 'Time & Distance', 'Mensuration'
        ]
      },
      {
        name: 'Test of Reasoning',
        questions: 50,
        marks: 50,
        duration: 45,
        topics: [
          'Analogy', 'Classification', 'Series',
          'Coding-Decoding', 'Blood Relations', 'Directions',
          'Puzzles', 'Syllogism', 'Venn Diagrams',
          'Alphabet Test', 'Number Ranking', 'Logical Reasoning'
        ]
      },
      {
        name: 'General Studies',
        questions: 100,
        marks: 100,
        subSections: [
          { 
            name: 'English',
            questions: 20,
            topics: ['Vocabulary', 'Grammar', 'Comprehension', 'Error Detection']
          },
          {
            name: 'General Science',
            questions: 20,
            topics: ['Physics', 'Chemistry', 'Biology', 'Environmental Science']
          },
          {
            name: 'History & Culture',
            questions: 15,
            topics: ['Ancient India', 'Medieval India', 'Modern India', 'Indian Culture']
          },
          {
            name: 'Geography',
            questions: 15,
            topics: ['Physical Geography', 'Economic Geography', 'Human Geography', 'World Geography']
          },
          {
            name: 'Polity & Economy',
            questions: 15,
            topics: ['Indian Constitution', 'Political System', 'Economic Development', 'Government Schemes']
          },
          {
            name: 'Current Affairs',
            questions: 5,
            topics: ['National', 'International', 'Sports', 'Awards', 'Summits']
          },
          {
            name: 'Telangana State',
            questions: 10,
            topics: ['History', 'Geography', 'Polity', 'Economy', 'Culture']
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'TS Police SI Mains - General Studies (Paper I)',
    examType: 'SI Mains Paper I',
    subjects: ['General Studies', 'Current Affairs', 'Telangana History'],
    questions: 200,
    duration: 150,
    description: 'Comprehensive test covering General Studies, Current Affairs, and Telangana History as per TS Police SI Mains Paper I syllabus. Includes questions on Indian Constitution, Indian Economy, and Telangana Movement.',
    testUrl: '/test/2',
    sections: [
      {
        name: 'General Studies', // This section might represent multiple actual subjects
        questions: 80,
        marks: 80,
        duration: 90
      },
      {
        name: 'Current Affairs',
        questions: 80,
        marks: 80,
        duration: 30
      },
      {
        name: 'Telangana History',
        questions: 40,
        marks: 40,
        duration: 30
      }
    ]
  },
  {
    id: 3,
    title: 'TS Police Constable - Arithmetic & Reasoning',
    examType: 'Constable Prelims',
    subjects: ['Arithmetic', 'Quantitative Aptitude', 'Logical Reasoning'],
    questions: 100,
    duration: 90,
    description: 'Focused practice test covering Arithmetic and Reasoning sections with questions on Number Systems, Percentages, Time & Work, Coding-Decoding, and more.',
    testUrl: '/test/3',
    sections: [
      {
        name: 'Arithmetic',
        questions: 60,
        marks: 60,
        duration: 50
      },
      {
        name: 'Quantitative Aptitude', // Often overlaps with Arithmetic
        questions: 20,
        marks: 20,
        duration: 20
      },
      {
        name: 'Logical Reasoning',
        questions: 20,
        marks: 20,
        duration: 20
      }
    ]
  },
  {
    id: 4,
    title: 'TS Police SI - New Criminal Laws 2023',
    examType: 'SI Mains Paper IV',
    subjects: ['New Criminal Laws', 'Indian Penal Code', 'Criminal Procedure Code'],
    questions: 100,
    duration: 90,
    description: 'Special test focusing on the newly introduced criminal laws in 2023. Covers key amendments and important sections of IPC, CrPC, and Evidence Act.',
    testUrl: '/test/4',
    sections: [
      {
        name: 'New Criminal Laws',
        questions: 40,
        marks: 40,
        duration: 36
      },
      {
        name: 'Indian Penal Code',
        questions: 30,
        marks: 30,
        duration: 27
      },
      {
        name: 'Criminal Procedure Code',
        questions: 30,
        marks: 30,
        duration: 27
      }
    ]
  },
  {
    id: 5,
    title: 'TS Police Constable - General Studies',
    examType: 'Constable Prelims',
    subjects: ['General Knowledge', 'Current Affairs', 'Telangana GK'],
    questions: 100,
    duration: 60,
    description: 'Practice test covering General Knowledge, Current Affairs, and Telangana specific GK. Includes questions on History, Polity, Geography, and Science.',
    testUrl: '/test/5',
    sections: [
      {
        name: 'General Knowledge',
        questions: 40,
        marks: 40,
        duration: 24
      },
      {
        name: 'Current Affairs',
        questions: 40,
        marks: 40,
        duration: 24
      },
      {
        name: 'Telangana GK',
        questions: 20,
        marks: 20,
        duration: 12
      }
    ]
  },
  {
    id: 6,
    title: 'TS Police SI - Language Test (English & Telugu)',
    examType: 'SI Mains Paper II',
    subjects: ['English', 'Telugu', 'Translation'],
    questions: 100, // Note: sum of questions in sections is 140, but test.questions is 100. This needs to be consistent.
    duration: 90,
    description: 'Language proficiency test covering English and Telugu. Includes questions on Grammar, Vocabulary, Comprehension, and Translation between the languages.',
    testUrl: '/test/6',
    sections: [ // Total questions here = 50+50+20+20 = 140. Test definition says 100.
               // This discrepancy will affect question generation.
               // For now, generation will be based on section.questions.
      {
        name: 'English Language', // Could be mapped to 'English' subject
        questions: 50,
        marks: 50,
        duration: 30
      },
      {
        name: 'Telugu Language', // Could be mapped to 'Telugu' subject
        questions: 50,
        marks: 50,
        duration: 30
      },
      {
        name: 'Translation (English to Telugu)', // Could be mapped to 'Translation' subject
        questions: 20,
        marks: 20,
        duration: 30
      },
      {
        name: 'Translation (Telugu to English)', // Could be mapped to 'Translation' subject
        questions: 20,
        marks: 20,
        duration: 30
      }
    ]
  }
];

// Simple gradient text component
const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
    {children}
  </span>
);

// Helper function to get subjects from a section or its subSections
const getSectionSubjects = (section: MockTestWithQuestions['sections'][0]): Subject[] => {
  if (section.subSections && section.subSections.length > 0) {
    // Map subSection names to Subject type. This requires careful mapping.
    // This is a simplified mapping; a more robust one might be needed.
    return section.subSections.map(sub => {
      if (sub.name === 'English') return 'English';
      if (sub.name === 'General Science') return 'General Science';
      if (sub.name === 'History & Culture') return 'Indian History'; // Example mapping
      if (sub.name === 'Geography, Polity & Economy') return 'Indian Geography'; // Example mapping
      if (sub.name === 'Current Affairs') return 'Current Affairs';
      return sub.name as Subject; // Fallback, might not be a valid Subject
    }).filter(s => s !== undefined) as Subject[];
  }
  // If no subSections, the section name itself might represent a subject or a category.
  // This part needs careful consideration on how section names map to `Subject` type.
  // For example, 'Arithmetic Ability' maps to 'Arithmetic'.
  const sectionNameMap: Record<string, Subject | undefined> = {
    'Arithmetic Ability': 'Arithmetic',
    'Test of Reasoning': 'Reasoning',
    'General Studies': 'General Studies', // This is broad; subSections are more specific
    'English Language': 'English',
    'Telugu Language': 'Telugu',
    'New Criminal Laws': 'New Criminal Laws',
    'Indian Penal Code': 'Indian Penal Code',
    'Criminal Procedure Code': 'Criminal Procedure Code',
    'Telangana History': 'Telangana History',
    'Quantitative Aptitude': 'Quantitative Aptitude',
    'Logical Reasoning': 'Logical Reasoning',
    'General Knowledge': 'General Knowledge',
    'Telangana GK': 'Telangana GK',
    'Current Affairs': 'Current Affairs',
    'Arithmetic': 'Arithmetic', // Direct mapping
    // Add other direct mappings or broader category mappings if necessary
  };
  const mappedSubject = sectionNameMap[section.name];
  if (mappedSubject) return [mappedSubject];

  // Fallback if no direct mapping or subSections, try to cast (use with caution)
  return [section.name as Subject];
};


// Helper function to get questions per subject in a section
// totalSectionQuestions refers to section.questions from the mockTest definition
const getQuestionsPerSubject = (
    section: MockTestWithQuestions['sections'][0],
    subject: Subject,
    totalSectionQuestions: number
  ): number => {
  if (section.subSections && section.subSections.length > 0) {
    // Find the subSection that corresponds to the subject
    // This requires a mapping from Subject type back to subSection name if they differ
    const subSection = section.subSections.find(sub => {
        // Example mapping (inverse of getSectionSubjects or similar logic)
        if (subject === 'English' && sub.name === 'English') return true;
        if (subject === 'General Science' && sub.name === 'General Science') return true;
        if (subject === 'Indian History' && sub.name === 'History & Culture') return true;
        if (subject === 'Indian Geography' && sub.name === 'Geography, Polity & Economy') return true;
        if (subject === 'Current Affairs' && sub.name === 'Current Affairs') return true;
        return sub.name === subject;
    });
    return subSection ? subSection.questions : 0;
  }
  // If no subSections, assume the section pertains to one primary subject or distribute questions.
  // The current getSectionSubjects might return multiple if not handled carefully.
  // For simplicity, if it's a single subject section (after mapping), all questions are for it.
  const primarySubjectsOfSection = getSectionSubjects(section);
  if (primarySubjectsOfSection.length === 1 && primarySubjectsOfSection[0] === subject) {
    return totalSectionQuestions;
  }
  // If multiple subjects are derived from a single section name without subSections (less ideal),
  // then distribute. This part might need refinement based on structure.
  if (primarySubjectsOfSection.includes(subject)) {
    return Math.ceil(totalSectionQuestions / primarySubjectsOfSection.length);
  }
  return 0; // Subject not found in this section
};


// Helper function to get a random element from an array
const getRandomElement = <T,>(arr: T[]): T => {
  if (arr.length === 0) throw new Error("Cannot get random element from an empty array");
  return arr[Math.floor(Math.random() * arr.length)];
};

// Helper function to generate random numbers for math questions
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to determine question difficulty
const getDifficulty = (questionNumber: number, totalQuestions: number): Difficulty => {
  const easyThreshold = Math.floor(totalQuestions * 0.6);
  const mediumThreshold = Math.floor(totalQuestions * 0.9);

  if (questionNumber <= easyThreshold) return 'Easy';
  if (questionNumber <= mediumThreshold) return 'Medium';
  return 'Hard';
};

// Helper function to generate explanation for answers
const generateExplanation = (subject: string, topic: string, correctAnswer: string): string => {
  const explanations: Record<string, string[]> = {
    'Arithmetic': [
      `The correct answer is ${correctAnswer} because it follows the mathematical principles of arithmetic operations.`,
      `${correctAnswer} is the right answer as it satisfies the given arithmetic conditions.`
    ],
    'General Studies': [
      `${correctAnswer} is the correct choice based on general knowledge and current affairs.`,
      `The right answer is ${correctAnswer} as it aligns with the facts and information in general studies.`
    ],
    // Add more subjects as needed
  };

  const defaultExplanations = [
    `The correct answer is ${correctAnswer} because it matches the expected outcome.`,
    `${correctAnswer} is the right choice based on the given information.`,
    `This explanation clarifies why ${correctAnswer} is the correct answer.`
  ];

  const subjectExplanations = explanations[subject] || [];
  const allExplanations = [...subjectExplanations, ...defaultExplanations];

  return getRandomElement(allExplanations);
};

// Helper function to get topics by subject
const getTopicsBySubject = (subject: Subject): string[] => {
  const topics: Partial<Record<Subject, string[]>> = { // Use Partial as not all Subjects might be covered
    'Arithmetic': [
      'Number System (LCM, HCF, Simplification)',
      'Simple & Compound Interest',
      'Percentage',
      'Ratio and Proportion',
      'Average',
      'Time and Work',
      'Time and Distance',
      'Profit and Loss',
      'Simple Equations',
      'Mensuration',
      'Data Interpretation'
    ],
    'Quantitative Aptitude': [ // Often similar to Arithmetic
      'Number System', 'Percentages', 'Profit & Loss', 'Ratio & Proportion', 'Time & Work', 'Data Interpretation'
    ],
    'Reasoning': [
      'Coding-Decoding',
      'Blood Relations',
      'Syllogism',
      'Number Series',
      'Analogy',
      'Classification',
      'Mirror and Water Images',
      'Venn Diagrams',
      'Logical Reasoning',
      'Puzzle Test',
      'Direction Sense',
      'Alphabet Test'
    ],
    'Logical Reasoning': [ // Often similar to Reasoning
        'Series Completion', 'Analogies', 'Coding-Decoding', 'Blood Relations', 'Direction Sense Test'
    ],
    'English': [
      'Vocabulary (Synonyms, Antonyms)',
      'Grammar (Tenses, Articles, Prepositions)',
      'Error Detection',
      'Sentence Improvement',
      'Fill in the Blanks',
      'Idioms and Phrases',
      'One Word Substitution',
      'Active and Passive Voice',
      'Direct and Indirect Speech',
      'Reading Comprehension'
    ],
    'General Science': [
      'Physics: Laws of Motion, Light, Sound',
      'Chemistry: Elements, Compounds, Mixtures',
      'Biology: Human Physiology',
      'Environmental Science',
      'Scientific Instruments',
      'Inventions and Discoveries',
      'Units and Measurements'
    ],
    'Indian History': [ // More specific than 'History & Polity'
      'Ancient Indian History', 'Medieval Indian History', 'Modern Indian History (Indian National Movement)',
      'World History Basics'
    ],
    'Indian Polity': [
        'Constitution of India', 'Fundamental Rights and Duties', 'Parliament and State Legislatures',
        'Judiciary in India', 'Emergency Provisions', 'Constitutional Bodies'
    ],
    'Indian Geography': [
        'Physical Geography of India', 'Climate and Weather', 'Natural Resources', 'Agriculture and Irrigation',
        'Transport and Communication', 'Population and Census'
    ],
    'Indian Economy': [
        'Basics of Indian Economy', 'Planning in India', 'Poverty, Unemployment', 'Inflation',
        'Banking and Finance', 'Budgeting', 'Economic Reforms'
    ],
    'Current Affairs': [
      'National Events',
      'International Events',
      'Sports',
      'Awards and Honors',
      'Books and Authors',
      'Important Days',
      'Government Schemes & Policies',
      'Science & Technology Developments'
    ],
    'Telangana History': [ // More specific than 'Telangana Specific'
      'History of Telangana Region', 'Telangana Movement (1948-2014)', 'Formation of Telangana State',
      'Important Personalities'
    ],
    'Telangana Geography': [
        'Physical Geography of Telangana', 'Rivers and Climate in Telangana', 'Districts and Demographics of Telangana',
        'Natural Resources in Telangana'
    ],
    'Telangana Polity': [
        'Telangana State Government', 'Local Self Government in Telangana', 'Welfare Schemes in Telangana'
    ],
    'Telangana Economy': [
        'Overview of Telangana Economy', 'Agriculture and Industries in Telangana', 'IT Sector in Telangana'
    ],
    'Telangana GK': [ // General Knowledge specific to Telangana
      'Art and Culture of Telangana', 'Festivals of Telangana', 'Tourist Places in Telangana',
      'Telangana Government Welfare Schemes', 'Prominent Personalities from Telangana'
    ],
    'Telugu': [
      'వ్యాకరణం (విభక్తులు, సమాసాలు, సంధులు)',
      'సామెతలు-పొడుపు కథలు',
      'సంక్షిప్తీకరణ',
      'భాషాభాగాలు',
      'విరుద్ధార్థకాలు',
      'పర్యాయపదాలు',
      'వాక్య భేదాలు',
      'లింగ, వచన, విభక్తి ప్రకారం వికల్ప రూపాలు',
      'తెలుగు సాహిత్యం పరిచయం'
    ],
    'New Criminal Laws': [
        'Bharatiya Nyaya Sanhita (BNS)', 'Bharatiya Nagarik Suraksha Sanhita (BNSS)', 'Bharatiya Sakshya Adhiniyam (BSA)',
        'Key Changes and Amendments'
    ],
    'Indian Penal Code': ['Offences against Body', 'Offences against Property', 'General Exceptions', 'Punishments'],
    'Criminal Procedure Code': ['Arrest Procedures', 'Bail Provisions', 'Trial Procedures', 'FIR and Investigation'],
    'Translation': ['English to Telugu Translation Practice', 'Telugu to English Translation Practice', 'Vocabulary for Translation'],
    'General Knowledge': [ // Broader than General Studies
        'Indian History Overview', 'Geography Basics', 'Polity Basics', 'Economy Basics', 'Everyday Science', 'Books and Authors', 'Awards'
    ],
    'General Studies': [ // This is very broad; usually broken down.
        'Indian History', 'Geography', 'Polity', 'Economy', 'General Science', 'Current Events'
    ]
  };
  // Ensure all explicitly listed subjects in `mockTests` have topic entries.
  // Fallback for subjects not explicitly listed in `topics`
  return topics[subject] || ['General ' + subject + ' Topic'];
};

// Helper function to generate question text based on subject and topic
const getQuestionText = (subject: Subject, topic: string): string => {
  const questionTemplates: Partial<Record<Subject, Partial<Record<string, string[]>>>> = {
    'Arithmetic': {
      'Number System (LCM, HCF, Simplification)': [
        `What is the HCF of ${getRandomNumber(10, 100)} and ${getRandomNumber(10, 100)}?`,
        `Find the LCM of ${getRandomNumber(5, 30)} and ${getRandomNumber(5, 30)}.`,
        `Simplify: (${getRandomNumber(1, 20)} × ${getRandomNumber(1, 20)}) + ${getRandomNumber(1, 100)} - ${getRandomNumber(1, 50)}`,
        `Which of the following is a prime number? (options will list numbers)`,
        `What is the sum of first ${getRandomNumber(5, 15)} natural numbers?`
      ],
      'Simple & Compound Interest': [
        `Find the simple interest on Rs. ${getRandomNumber(1000, 10000)} at ${getRandomNumber(5, 15)}% per annum for ${getRandomNumber(2, 10)} years.`,
        `The compound interest on Rs. ${getRandomNumber(5000, 20000)} at ${getRandomNumber(8, 15)}% per annum for 2 years, compounded annually, is:`,
        `What principal will amount to Rs. ${getRandomNumber(1000, 5000)} in ${getRandomNumber(2,5)} years at ${getRandomNumber(4,10)}% simple interest?`
      ],
      'Percentage': [
        `What is ${getRandomNumber(5, 50)}% of ${getRandomNumber(100, 1000)}?`,
        `If a number is increased by ${getRandomNumber(10, 30)}%, it becomes ${getRandomNumber(100, 200)}. What is the number?`,
        `A shopkeeper offers a discount of ${getRandomNumber(10,25)}% on an item marked at Rs. ${getRandomNumber(500,1500)}. What is the selling price?`
      ]
    },
    'Reasoning': {
      'Coding-Decoding': [
        'If "MASTER" is coded as "OCUVGT", how is "LABOUR" coded?',
        'In a certain code, "SYSTEM" is written as "SYSMET". How is "NEARER" written in that code?',
        'If "RED" is coded as "SFE", how is "BLUE" coded?'
      ],
      'Blood Relations': [
        'Pointing to a photograph, a man said, "I have no brother or sister but that man\'s father is my father\'s son." Whose photograph was it?',
        'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. Then, how is A related to D?',
        'P is the brother of Q. R is the mother of Q. S is the father of R. How is P related to S?'
      ],
      'Number Series': [
        `What comes next in the series: ${getRandomNumber(1,5)}, ${getRandomNumber(6,10)}, ${getRandomNumber(11,15)}, ${getRandomNumber(16,20)}, ?`,
        `Find the missing term: 2, 5, 10, 17, __, 37.`,
        `Complete the series: 1, 4, 9, 16, 25, __.`
      ]
    },
    'English': {
      'Vocabulary (Synonyms, Antonyms)': [
        'Choose the word which is most similar in meaning (synonym) to "EFFACE":',
        'Select the word which is the opposite in meaning (antonym) of "BENIGN":',
        'Choose the word which best expresses the meaning of "VERBOSE":',
        'Select the word opposite in meaning to "FREQUENT":'
      ],
      'Grammar (Tenses, Articles, Prepositions)': [
        'Fill in the blank with the correct article: He is ___ honorable man.',
        'Choose the correct preposition: She is afraid ___ spiders.',
        'Identify the tense of the verb in the sentence: "They will have finished the work by tomorrow."'
      ],
      'Error Detection': [
        'Find the part of the sentence that has an error: (A) Neither of the two boys / (B) have submitted / (C) their records. / (D) No error.',
        'Identify the incorrect part: (A) The informations supplied / (B) to us were not as / (C) useful as we first thought it would be. / (D) No error.'
      ]
    },
    'General Science': {
        'Physics: Laws of Motion, Light, Sound': [
            'Which of Newton\'s laws is also known as the law of inertia?',
            'What is the unit of frequency?',
            'Sound waves cannot travel through which of the following: (A) Solids (B) Liquids (C) Gases (D) Vacuum'
        ],
        'Chemistry: Elements, Compounds, Mixtures': [
            'Which of the following is a noble gas?',
            'What is the chemical formula for water?',
            'Bronze is an alloy of:'
        ],
        'Biology: Human Physiology': [
            'Which part of the human brain is responsible for maintaining balance?',
            'What is the largest organ in the human body?',
            'Which blood group is known as the universal donor?'
        ]
    },
     'Indian History': {
        'Indian National Movement': [
            'Who founded the Indian National Congress?',
            'The Jallianwala Bagh massacre took place in which year?',
            'Who gave the slogan "Do or Die" during the Quit India Movement?'
        ]
    },
    'Current Affairs': {
        'National Events': ['Who is the current President of India?', 'Which city hosted the recent G20 summit in India (if applicable)?'],
        'Awards and Honors': ['Who won the Dadasaheb Phalke Award last year?', 'Which film won the Best Picture at the most recent Academy Awards?']
    }
    // Add more specific templates for other subjects and topics
  };

  // Default question templates if specific subject/topic not found
  const defaultTemplates = [
    `What is a key concept related to "${topic}" within the subject of ${subject}?`,
    `Which of the following statements accurately describes an aspect of "${topic}" in ${subject}?`,
    `Discuss the importance of "${topic}" in the broader context of ${subject}.`,
    `Explain the term "${topic}" as it applies to ${subject}.`,
    `Which option best defines or relates to "${topic}" for ${subject}?`
  ];

  const subjectSpecificTemplates = questionTemplates[subject];
  const topicSpecificTemplates = subjectSpecificTemplates ? subjectSpecificTemplates[topic] : undefined;
  const questionsToUse = topicSpecificTemplates && topicSpecificTemplates.length > 0 ? topicSpecificTemplates : defaultTemplates;

  return getRandomElement(questionsToUse);
};

// Helper function to generate unique options
const generateUniqueOptions = (baseOptions: string[], count: number, existingOptions: string[] = []): string[] => {
  const uniqueOptions = [...new Set([...existingOptions, ...baseOptions])];
  return uniqueOptions.slice(0, count);
};

// Helper function to generate options for a question
const generateOptions = (subject: Subject, topic: string, count: number): string[] => {
  const options: string[] = [];
  const usedOptions = new Set<string>();

  // Function to add unique options
  const addUniqueOptions = (newOptions: string[]) => {
    for (const option of newOptions) {
      if (!usedOptions.has(option) && options.length < count) {
        options.push(option);
        usedOptions.add(option);
      }
    }
  };

  // Generate options based on subject and topic
  if (subject === 'Arithmetic') {
    // For arithmetic questions, generate numerical options
    const baseAnswer = getRandomNumber(10, 500);
    addUniqueOptions([String(baseAnswer)]);
    
    // Generate unique distractors
    while (options.length < count) {
      const variation = Math.max(1, Math.floor(baseAnswer * 0.2));
      const distractor = baseAnswer + getRandomNumber(-variation, variation);
      const distractorStr = String(distractor > 0 ? distractor : baseAnswer + variation);
      addUniqueOptions([distractorStr]);
    }
  } 
  else if (subject === 'English') {
    // For English questions, generate vocabulary or grammar options
    if (topic.includes('Vocabulary')) {
      const vocabSets = [
        ['Ephemeral', 'Temporary', 'Fleeting', 'Momentary', 'Transient'],
        ['Benevolent', 'Kind', 'Generous', 'Philanthropic', 'Altruistic'],
        ['Pragmatic', 'Practical', 'Realistic', 'Sensible', 'Logical'],
        ['Ubiquitous', 'Omnipresent', 'Pervasive', 'Universal', 'Everywhere'],
        ['Meticulous', 'Thorough', 'Precise', 'Exacting', 'Scrupulous']
      ];
      const selectedSet = getRandomElement(vocabSets);
      addUniqueOptions(selectedSet);
    } else {
      // For grammar questions
      const grammarOptions = [
        'Subject-verb agreement', 'Tense consistency', 'Pronoun reference', 
        'Parallel structure', 'Modifier placement', 'Article usage',
        'Preposition choice', 'Conjunction usage', 'Punctuation', 'Word order'
      ];
      // Shuffle and select unique options
      const shuffled = [...grammarOptions].sort(() => 0.5 - Math.random());
      addUniqueOptions(shuffled);
    }
  }
  else if (subject === 'General Science') {
    // Science questions
    const scienceOptions = {
      'Physics': [
        'Acceleration due to gravity', 'Speed of light', 'Planck constant', 
        'Avogadro number', 'Electron charge', 'Gravitational constant',
        'Elementary charge', 'Magnetic constant', 'Atomic mass unit'
      ],
      'Chemistry': [
        'H₂O', 'CO₂', 'NaCl', 'H₂SO₄', 'C₆H₁₂O₆', 'CH₄', 'NH₃', 'O₂', 'N₂'
      ],
      'Biology': [
        'Mitochondria', 'Nucleus', 'Ribosome', 'Lysosome', 'Chloroplast',
        'Endoplasmic reticulum', 'Golgi apparatus', 'Vacuole', 'Cell membrane'
      ]
    };
    
    const scienceField = topic.includes('Physics') ? 'Physics' : 
                         topic.includes('Chemistry') ? 'Chemistry' : 'Biology';
    const fieldOptions = scienceOptions[scienceField] || [];
    
    if (fieldOptions.length > 0) {
      const shuffled = [...fieldOptions].sort(() => 0.5 - Math.random());
      addUniqueOptions(shuffled);
    }
  }
  else if (subject === 'Current Affairs' || subject === 'Telangana GK') {
    // For current affairs and GK
    const gkOptions = [
      'Hyderabad', 'Warangal', 'Karimnagar', 'Khammam', 'Nizamabad',
      'KCR', 'KTR', 'Chandrashekar Rao', 'Revanth Reddy', 'K. Chandrasekhar Rao',
      'Godavari', 'Krishna', 'Musi', 'Manjira', 'Bhima', 'Pranahita',
      'IT', 'Pharma', 'Textiles', 'Automobiles', 'Agriculture', 'Tourism'
    ];
    const shuffled = [...gkOptions].sort(() => 0.5 - Math.random());
    addUniqueOptions(shuffled);
  }

  // Add default options if needed
  const defaultOptions = [
    'First option', 'Second option', 'Third option', 'Fourth option',
    'Option A', 'Option B', 'Option C', 'Option D',
    'Choice 1', 'Choice 2', 'Choice 3', 'Choice 4',
    'Alternative A', 'Alternative B', 'Alternative C', 'Alternative D',
    'Select this', 'Choose this', 'Pick this', 'Mark this'
  ];
  
  // Add remaining options from default set if needed
  while (options.length < count) {
    const remainingOptions = defaultOptions.filter(opt => !usedOptions.has(opt));
    if (remainingOptions.length === 0) break;
    addUniqueOptions([remainingOptions[0]]);
  }

  // Final fallback - use numbers if we still need more options
  let num = 1;
  while (options.length < count) {
    addUniqueOptions([`Option ${num++}`]);
  }

  // Return exactly the requested number of options
  return options.slice(0, count);
};

// Helper function to get questions for a specific test
const getQuestionsForTest = (testId: number): Question[] => {
  switch(testId) {
    case 1: // TS Police Constable Prelims - Full Length Test 1
      return [...constablePrelimsFullTest];
    case 2: // Other tests can use different question sets
      return [...updatedConstablePrelimsQuestions];
    default:
      return [...constablePrelims1Questions];
  }
};

// Generate mock test with predefined questions
export const mockTestsWithQuestions: MockTestWithQuestions[] = mockTests.map((testConfig) => {
  // Get pre-defined questions for this test
  const predefinedQuestions = getQuestionsForTest(testConfig.id);
  
  // Ensure IDs are sequential and set defaults
  const processedQuestions = predefinedQuestions.map((q, index) => ({
    ...q,
    id: index + 1,
    timeLimit: q.timeLimit || 60, // Default to 60 seconds if not specified
    marks: q.marks || 1, // Default to 1 mark if not specified
    section: q.section || 'General', // Default section if not specified
    difficulty: q.difficulty || 'Medium',
  }));

  const totalMarks = processedQuestions.reduce((sum, q) => sum + q.marks, 0);
  
  return {
    ...testConfig,
    questions: processedQuestions,
    subject: testConfig.subjects[0] as Subject,
    difficulty: 'Medium' as const,
    isFree: true,
    isNew: true,
    isPremium: false,
    link: testConfig.testUrl || `/test/${testConfig.id}`,
    attempts: Math.floor(Math.random() * 1000),
    lastAttempted: Math.random() > 0.5 ? new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30) : null,
    progress: 0,
    totalMarks,
    passingMarks: Math.ceil(totalMarks * 0.4), // 40% of total marks
  };
});


// Helper functions
// This is the corrected and sole definition of getTestById
export const getTestById = (id: number): MockTestWithQuestions | undefined => {
  // Find the base configuration for the test
  const testConfig = mockTests.find(t => t.id === id);
  if (!testConfig) return undefined;

  // Find if we already generated this test in mockTestsWithQuestions
  const alreadyGeneratedTest = mockTestsWithQuestions.find(t => t.id === id);
  if (alreadyGeneratedTest) return alreadyGeneratedTest;

  // If not found in pre-generated (e.g. if getTestById is called standalone),
  // we would ideally generate it here.
  // For this example, we assume mockTestsWithQuestions is the source of truth for tests with questions.
  // This part shows that `mockTestsWithQuestions` should be the primary source.
  // If `getTestById` needs to dynamically generate a test not in `mockTestsWithQuestions`,
  // the generation logic used for `mockTestsWithQuestions` would be invoked here for the specific `testConfig`.
  // However, the current setup populates `mockTestsWithQuestions` upfront.

  // Fallback: if somehow mockTestsWithQuestions wasn't populated or doesn't have it,
  // we'll return undefined or log an error, as question generation is complex.
  // For robustness, ensure `mockTestsWithQuestions` is the source or replicate generation.
  console.warn(`Test with ID ${id} was found in configurations but not in fully generated tests. Ensure mockTestsWithQuestions is comprehensive.`);
  return undefined;
};

export const getTestByLink = (link: string): MockTestWithQuestions | undefined => {
  const testIdString = link.split('/').pop();
  if (!testIdString) return undefined;
  const testId = parseInt(testIdString, 10);
  if (isNaN(testId)) return undefined;
  return mockTestsWithQuestions.find(t => t.id === testId); // Search in the fully generated tests
};


const MockTests: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter tests based on search term from the fully generated mockTestsWithQuestions
  const filteredTests = mockTestsWithQuestions.filter(test =>
    test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.examType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.subjects.some(subject =>
      subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Zap className="h-6 w-6 mr-2" />
            <span className="text-amber-300 font-medium">
              {t('mockTests.pageSubtitle', 'Ace Your Exam Preparation')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <GradientText>TS Police Guru</GradientText> - Mock Test Series 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            {t('mockTests.description', 'Practice with our comprehensive mock tests designed to help you ace the Telangana Police exams. Click "Start Test" to begin your practice on our partner platform.')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t('mockTests.searchPlaceholder', 'Search tests by title, exam type, or subject...')}
              className="pl-12 pr-4 py-6 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus-visible:ring-2 focus-visible:ring-white/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      {/* Mock Tests Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
            {t('mockTests.availableTests', 'Available Mock Tests')}
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredTests.length} {filteredTests.length === 1 ? t('mockTests.testFound', 'test found') : t('mockTests.testsFound', 'tests found')}
          </div>
        </div>

        {filteredTests.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('mockTests.noTestsFound', 'No tests found')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              {t('mockTests.tryDifferentSearch', 'Try adjusting your search or check back later for new tests.')}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"> {/* Changed to lg:grid-cols-1 for single column list view */}
            {filteredTests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {test.title}
                      </h3>
                      <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mb-4">
                        <Award className="h-4 w-4 mr-1" />
                        {test.examType}
                      </div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full">
                      {test.questions.length} {t('mockTests.questions', 'Questions')} {/* Use test.questions.length */}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {test.subjects.map((subject, i) => ( // These are subjects from testConfig.subjects
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {test.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {test.duration} {t('mockTests.minutes', 'Minutes')}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {test.questions.length} {t('mockTests.questions', 'Questions')} {/* Use test.questions.length */}
                      </div>
                       <div className="flex items-center">
                        {/* Consider showing total marks */}
                        <strong>{t('mockTests.totalMarks', 'Total Marks')}: {test.totalMarks}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      onClick={() => navigate(`/test/${test.id}`)}
                      className="w-full md:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      {t('mockTests.startTest', 'Start Test')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTests;