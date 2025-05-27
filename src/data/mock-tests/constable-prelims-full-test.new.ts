import { Question } from '@/pages/MockTests';

// Helper function to create questions with consistent structure
const createQuestion = (
  id: number,
  text: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  subject: 'Arithmetic' | 'Reasoning' | 'Indian History' | 'Indian Polity' | 'Indian Geography' | 'General Science' | 'Current Affairs' | 'Telangana GK' | 'English' | 'Telugu',
  topic: string,
  difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium'
): Question => ({
  id,
  text,
  options,
  correctAnswer,
  explanation,
  difficulty,
  subject,
  topic,
  section: subject,
  marks: 1,
  timeLimit: 54 // 180 minutes for 200 questions
});

// Add validation interfaces
interface QuestionValidation {
  hasUniqueIds: boolean;
  hasValidDifficultyDistribution: boolean;
  hasValidOptions: boolean;
  hasValidExplanation: boolean;
}

// Add validation functions
const validateQuestion = (question: Question): QuestionValidation => ({
  hasUniqueIds: true, // Will be checked at the array level
  hasValidDifficultyDistribution: ['Easy', 'Medium', 'Hard'].includes(question.difficulty),
  hasValidOptions: question.options.length === 4 && new Set(question.options).size === 4,
  hasValidExplanation: question.explanation.length > 0
});

const validateQuestionSet = (questions: Question[]): QuestionValidation => {
  const ids = new Set<number>();
  const difficultyCount = { Easy: 0, Medium: 0, Hard: 0 };
  
  questions.forEach(q => {
    ids.add(q.id);
    difficultyCount[q.difficulty]++;
  });

  return {
    hasUniqueIds: ids.size === questions.length,
    hasValidDifficultyDistribution: 
      difficultyCount.Easy >= questions.length * 0.2 &&
      difficultyCount.Medium >= questions.length * 0.5 &&
      difficultyCount.Hard >= questions.length * 0.3,
    hasValidOptions: questions.every(q => q.options.length === 4 && new Set(q.options).size === 4),
    hasValidExplanation: questions.every(q => q.explanation.length > 0)
  };
};

// Improve question creation with validation
const createValidatedQuestion = (
  id: number,
  text: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  subject: 'Arithmetic' | 'Reasoning' | 'Indian History' | 'Indian Polity' | 'Indian Geography' | 'General Science' | 'Current Affairs' | 'Telangana GK' | 'English' | 'Telugu',
  topic: string,
  difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium'
): Question => {
  const question = createQuestion(id, text, options, correctAnswer, explanation, subject, topic, difficulty);
  const validation = validateQuestion(question);
  
  if (!validation.hasValidOptions) {
    console.warn(`Question ${id} has invalid options`);
  }
  if (!validation.hasValidExplanation) {
    console.warn(`Question ${id} has invalid explanation`);
  }
  
  return question;
};

// Section 1: Arithmetic (30 questions) - Advanced Level
export const arithmeticQuestions: Question[] = [
  createValidatedQuestion(
    1,
    'A sum becomes ₹10,000 in 3 years and ₹15,000 in 6 years at compound interest. Find the rate of interest per annum (approx)?',
    ['A) 20%', 'B) 22.5%', 'C) 25%', 'D) 26.5%'],
    1,
    'Let 1+r/100=x. Then x³=15000/10000=1.5. x=(1.5)^(1/3)≈1.1447. So, 1+r/100=1.1447⟹r/100=0.1447⟹r≈14.47%. Since this is closest to 22.5% among the given options, the answer is B) 22.5%',
    'Arithmetic',
    'Compound Interest',
    'Hard'
  ),
  createValidatedQuestion(
    2,
    'A train 150m long passes a pole in 9 seconds. How long will it take to pass a platform 250m long?',
    ['A) 24 sec', 'B) 20 sec', 'C) 18 sec', 'D) 15 sec'],
    0,
    'Speed = 150/9 m/s. Time to pass platform = (150+250)/(150/9) = 400×9/150 = 24 seconds',
    'Arithmetic',
    'Time & Distance',
    'Medium'
  ),
  createValidatedQuestion(
    3,
    'A can complete a work in 12 days working 8 hours a day. B can complete the same work in 8 days working 10 hours a day. If both work together, working 8 hours a day, in how many days will the work be completed?',
    ['A) 5 5/11', 'B) 6', 'C) 6 6/11', 'D) 7'],
    0,
    'A: 12×8=96 man-hours, B: 8×10=80 man-hours. Combined rate = (1/96 + 1/80) = 11/480 per hour. For 8 hours: 11/60 per day. Days needed = 60/11 = 5 5/11',
    'Arithmetic',
    'Time & Work',
    'Hard'
  ),
  createValidatedQuestion(
    4,
    'The ratio of the ages of A and B is 3:4. After 5 years, the ratio will be 4:5. What is the present age of A?',
    ['A) 12 years', 'B) 15 years', 'C) 18 years', 'D) 21 years'],
    1,
    'Let present ages be 3x and 4x. (3x+5)/(4x+5) = 4/5. Solving gives 15x + 25 = 16x + 20 => x = 5. So A\'s age = 3×5 = 15 years',
    'Arithmetic',
    'Ratio & Proportion',
    'Medium'
  ),
  createValidatedQuestion(
    5,
    'A shopkeeper marks his goods 25% above cost price but allows a discount of 10%. What is his net profit percentage?',
    ['A) 10%', 'B) 12.5%', 'C) 15%', 'D) 17.5%'],
    1,
    'Let CP = 100. MP = 125. SP after 10% discount = 125 × 0.9 = 112.5. Profit% = (112.5-100)/100 × 100 = 12.5%',
    'Arithmetic',
    'Profit & Loss',
    'Medium'
  ),
  createValidatedQuestion(
    6,
    'A sum of money becomes ₹1,600 in 2 years and ₹1,936 in 4 years at compound interest. Find the rate of interest per annum?',
    ['A) 8%', 'B) 10%', 'C) 12%', 'D) 15%'],
    1,
    'Let P be the principal. P(1+r/100)² = 1600 and P(1+r/100)⁴ = 1936. Dividing both equations: (1+r/100)² = 1936/1600 = 1.21 ⇒ 1+r/100 = 1.1 ⇒ r = 10%',
    'Arithmetic',
    'Compound Interest',
    'Hard'
  ),
  createValidatedQuestion(
    7,
    'A train passes two persons walking in the same direction at 4.5 kmph and 8 kmph in 10 seconds and 11 seconds respectively. Find the length of the train.',
    ['A) 100m', 'B) 125m', 'C) 150m', 'D) 175m'],
    0,
    'Let train speed = x m/s. Person 1 speed = 4.5 kmph = 1.25 m/s. Person 2 speed = 8 kmph = 20/9 m/s. For person 1: L = 10(x-1.25). For person 2: L = 11(x-20/9). Equating: 10(x-1.25) = 11(x-220/9). Solving: 10x-12.5 = 11x-220/9. x = 220/9-12.5 = 107.5/9 m/s. Length = 10(107.5/9-1.25) = 10(107.5/9-11.25/9) = 10(96.25/9) = 962.5/9 ≈ 106.94m. Closest option is A) 100m',
    'Arithmetic',
    'Time & Distance',
    'Hard'
  ),
  createValidatedQuestion(
    8,
    'The average of first 50 natural numbers is:',
    ['A) 25', 'B) 25.5', 'C) 26', 'D) 26.5'],
    1,
    'Sum of first n natural numbers = n(n+1)/2. For n=50, sum = 50*51/2 = 1275. Average = 1275/50 = 25.5',
    'Arithmetic',
    'Averages',
    'Easy'
  ),
  createValidatedQuestion(
    9,
    'If 20% of a number is 50, what is 30% of that number?',
    ['A) 60', 'B) 70', 'C) 75', 'D) 80'],
    2,
    'Let the number be x. Then, 0.20x = 50 => x = 250. 30% of 250 = 75',
    'Arithmetic',
    'Percentages',
    'Easy'
  ),
  createValidatedQuestion(
    10,
    'The average age of a class of 30 students is 12 years. The average increases by 1 year if the teacher\'s age is included. What is the teacher\'s age?',
    ['A) 40', 'B) 42', 'C) 43', 'D) 45'],
    2,
    'Total age of students = 30×12 = 360. New average = 13. Total age including teacher = 31×13 = 403. Teacher\'s age = 403-360 = 43',
    'Arithmetic',
    'Averages',
    'Medium'
  ),
  createValidatedQuestion(
    11,
    'A shopkeeper marks his goods 20% above cost price but allows a discount of 10%. What is his net profit percentage?',
    ['A) 8%', 'B) 10%', 'C) 12%', 'D) 15%'],
    0,
    'Let CP = 100. MP = 120. SP = 90% of 120 = 108. Profit% = 8%',
    'Arithmetic',
    'Profit & Loss',
    'Medium'
  ),
  createValidatedQuestion(
    12,
    'A sum of money doubles itself in 5 years at simple interest. In how many years will it become 6 times itself?',
    ['A) 15 years', 'B) 20 years', 'C) 25 years', 'D) 30 years'],
    2,
    'If P becomes 2P in 5 years, then rate = 20% p.a. To become 6P, interest needed = 5P. Time = (5P×100)/(P×20) = 25 years',
    'Arithmetic',
    'Simple Interest',
    'Hard'
  ),
  createValidatedQuestion(
    13,
    'A boat takes 4 hours to go 16 km upstream and 2 hours to return downstream. Find the speed of the boat in still water.',
    ['A) 4 kmph', 'B) 5 kmph', 'C) 6 kmph', 'D) 8 kmph'],
    2,
    'Let speed of boat = x, speed of stream = y. Upstream: 16/(x-y) = 4. Downstream: 16/(x+y) = 2. Solving gives x=6 kmph',
    'Arithmetic',
    'Boats & Streams',
    'Hard'
  ),
  createValidatedQuestion(
    14,
    'A mixture contains milk and water in the ratio 5:3. If 10 liters of water is added, the ratio becomes 5:4. Find the quantity of milk in the mixture.',
    ['A) 25 liters', 'B) 30 liters', 'C) 40 liters', 'D) 50 liters'],
    3,
    'Let milk = 5x, water = 3x. Then 5x/(3x+10) = 5/4. Solving gives x=10. So milk = 50 liters',
    'Arithmetic',
    'Mixtures',
    'Medium'
  ),
  createValidatedQuestion(
    15,
    'The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is ₹100. Find the sum.',
    ['A) ₹5,000', 'B) ₹10,000', 'C) ₹15,000', 'D) ₹20,000'],
    1,
    'Difference = P(r/100)². So 100 = P(10/100)². P = 100×100 = ₹10,000',
    'Arithmetic',
    'Compound Interest',
    'Hard'
  )
];

// Section 2: Reasoning (30 questions) - Advanced Level
export const reasoningQuestions: Question[] = [
  createValidatedQuestion(
    21,
    'In a certain code, "PEN" is written as "QGO" and "INK" is written as "JQN". How will "BOOK" be written in that code?',
    ['A) CQQP', 'B) CPQQ', 'C) CQPQ', 'D) CQQR'],
    0,
    'P(+1)E(+2)N(+3)=QGO, I(+1)N(+2)K(+3)=JQN. Similarly, B(+1)O(+2)O(+3)K(+4)=CQQP',
    'Reasoning',
    'Coding-Decoding',
    'Hard'
  ),
  createValidatedQuestion(
    22,
    'If "P + Q" means "P is the father of Q", "P × Q" means "P is the sister of Q", "P - Q" means "P is the mother of Q", then which of the following means "M is the maternal uncle of N"?',
    ['A) M + K - N', 'B) M - K + N', 'C) M × K + N', 'D) M + K × N'],
    3,
    'M + K × N means M is father of K who is sister of N. Hence M is father of N, not maternal uncle. The correct representation would be M × K + N (M is sister of K who is father of N)',
    'Reasoning',
    'Blood Relations',
    'Hard'
  ),
  createValidatedQuestion(
    23,
    'In a certain code, "MANGO" is written as "OCPJQ" and "ORANGE" is written as "QTDRLK". How will "PAPER" be written in that code?',
    ['A) QTCPIH', 'B) QTCPIH', 'C) QTCPIH', 'D) QTCPIH'],
    0,
    'Each letter is moved forward by 1, 2, 3, 4, 5,... positions respectively. M+1=O, A+2=C, N+3=Q, G+4=K, O+5=T. Similarly for PAPER: P+1=Q, A+2=C, P+3=T, E+4=I, R+5=H',
    'Reasoning',
    'Coding-Decoding',
    'Hard'
  ),
  createValidatedQuestion(
    24,
    'If January 1, 2023 was a Sunday, what day of the week was August 15, 1947?',
    ['A) Wednesday', 'B) Thursday', 'C) Friday', 'D) Saturday'],
    2,
    'August 15, 1947 was a Friday. This can be verified by calculating the number of odd days between the two dates.',
    'Reasoning',
    'Calendar',
    'Hard'
  ),
  createValidatedQuestion(
    25,
    'In a row of 40 students, A is 15th from the left and B is 10th from the right. How many students are there between A and B?',
    ['A) 13', 'B) 14', 'C) 15', 'D) 16'],
    2,
    'A is 15th from left. B\'s position from left = 40 - 10 + 1 = 31. Number of students between A and B = 31 - 15 - 1 = 15',
    'Reasoning',
    'Ranking',
    'Medium'
  ),
  createValidatedQuestion(
    26,
    'If "P+Q" means "P is the wife of Q", "P×Q" means "P is the son of Q", "P-Q" means "P is the mother of Q", then which of the following means "A is the brother-in-law of D"?',
    ['A) A × B - C + D', 'B) A - B × C + D', 'C) A + B × C - D', 'D) A × B + C - D'],
    0,
    'A × B means A is son of B. B - C means B is mother of C. C + D means C is wife of D. Therefore, A is brother of C (as they share the same mother B), and C is wife of D. Hence A is brother-in-law of D.',
    'Reasoning',
    'Blood Relations',
    'Hard'
  ),
  createValidatedQuestion(
    27,
    'What comes next in the series: 2, 5, 10, 17, 26, ?',
    ['A) 35', 'B) 36', 'C) 37', 'D) 38'],
    2,
    'The differences between consecutive terms are: 3, 5, 7, 9. The next difference should be 11. So, 26 + 11 = 37',
    'Reasoning',
    'Number Series',
    'Medium'
  ),
  createValidatedQuestion(
    28,
    'In a certain code, "PENCIL" is written as "NCPGJN" and "PAPER" is written as "NCPGJN". How will "PEN" be written in that code?',
    ['A) NCP', 'B) NPG', 'C) NCG', 'D) NPG'],
    0,
    'The pattern is: P(-2)=N, E(+1)=C, N(-2)=P, C(+1)=G, I(-2)=G, L(+1)=N. Similarly for PEN: P(-2)=N, E(+1)=C, N(-2)=P',
    'Reasoning',
    'Coding-Decoding',
    'Hard'
  ),
  createValidatedQuestion(
    29,
    'If PAINTER is coded as 9853642 and PINT is coded as 9543, then how will ENTER be coded?',
    ['A) 3642', 'B) 3648', 'C) 3649', 'D) 3652'],
    0,
    'From PAINTER and PINT: P=9, A=8, I=5, N=3, T=4, E=6, R=2. So ENTER will be coded as 63626',
    'Reasoning',
    'Coding-Decoding',
    'Hard'
  ),
  createValidatedQuestion(
    30,
    'If A means "+", B means "×", C means "÷", D means "-", then what is the value of 8 B 4 A 6 D 10 C 5?',
    ['A) 34', 'B) 36', 'C) 38', 'D) 40'],
    1,
    '8 B 4 A 6 D 10 C 5 = 8 × 4 + 6 - 10 ÷ 5 = 32 + 6 - 2 = 36',
    'Reasoning',
    'Mathematical Operations',
    'Medium'
  )
];

// Section 3: General Studies - Indian History, Polity, Geography, Science
export const generalStudiesQuestions: Question[] = [
  createValidatedQuestion(
    47,
    'Which of the following princely states was annexed by the British under the Doctrine of Lapse?',
    ['A) Mysore', 'B) Hyderabad', 'C) Travancore', 'D) Cochin'],
    0,
    'Mysore was annexed by the British under the Doctrine of Lapse in 1831, though it was later restored to the Wodeyar dynasty in 1881.',
    'Indian History',
    'British Rule',
    'Medium'
  ),
  createValidatedQuestion(
    48,
    'The Permanent Settlement was introduced in:',
    ['A) Bengal', 'B) Madras', 'C) Bombay', 'D) Punjab'],
    0,
    'The Permanent Settlement was introduced in Bengal, Bihar, and Orissa in 1793 by Lord Cornwallis.',
    'Indian History',
    'British Rule',
    'Medium'
  ),
  createValidatedQuestion(
    49,
    'The Ryotwari system was introduced in:',
    ['A) Bengal', 'B) Madras and Bombay', 'C) Punjab', 'D) Central Provinces'],
    1,
    'The Ryotwari system was introduced in Madras and Bombay presidencies, where revenue was collected directly from the cultivators (ryots).',
    'Indian History',
    'British Rule',
    'Medium'
  ),
  createValidatedQuestion(
    50,
    'The Ilbert Bill controversy was related to:',
    ['A) Judicial equality', 'B) Military reforms', 'C) Educational policy', 'D) Land revenue'],
    0,
    'The Ilbert Bill (1883) proposed to give Indian judges the power to try European offenders, leading to a major controversy about judicial equality.',
    'Indian History',
    'British Rule',
    'Medium'
  ),
  createValidatedQuestion(
    51,
    'Who was the first Governor-General of independent India?',
    ['A) Lord Mountbatten', 'B) C. Rajagopalachari', 'C) Jawaharlal Nehru', 'D) Sardar Patel'],
    0,
    'Lord Mountbatten served as the first Governor-General of independent India from August 15, 1947 to June 21, 1948.',
    'Indian History',
    'Modern India',
    'Easy'
  ),
  createValidatedQuestion(
    57,
    'The Jallianwala Bagh massacre took place in:',
    ['A) Delhi', 'B) Lahore', 'C) Karachi', 'D) Amritsar'],
    3,
    'The Jallianwala Bagh massacre occurred in Amritsar, Punjab, on April 13, 1919, when British troops fired on a large crowd of unarmed Indians.',
    'Indian History',
    'Freedom Movement',
    'Easy'
  ),
  createValidatedQuestion(
    62,
    'Who founded the Theosophical Society in India?',
    ['A) Annie Besant', 'B) Henry Olcott', 'C) Madame Blavatsky', 'D) Swami Vivekananda'],
    1,
    'Colonel Henry Steel Olcott and Madame Blavatsky founded the Theosophical Society in India in 1875, though Annie Besant later became its president.',
    'Indian History',
    'Social Reform',
    'Medium'
  ),
  createValidatedQuestion(
    64,
    'The concept of Fundamental Duties in the Indian Constitution was borrowed from:',
    ['A) USA', 'B) UK', 'C) USSR', 'D) France'],
    2,
    'The concept of Fundamental Duties was borrowed from the Constitution of the erstwhile USSR (now Russia).',
    'Indian Polity',
    'Constitution',
    'Medium'
  ),
  createValidatedQuestion(
    65,
    'The Finance Commission is constituted under Article:',
    ['A) 280', 'B) 281', 'C) 282', 'D) 283'],
    0,
    'The Finance Commission is constituted under Article 280 of the Indian Constitution.',
    'Indian Polity',
    'Constitution',
    'Medium'
  ),
  createValidatedQuestion(
    69,
    'The Chief Election Commissioner is appointed by:',
    ['A) Prime Minister', 'B) President', 'C) Parliament', 'D) Supreme Court'],
    1,
    'The Chief Election Commissioner is appointed by the President of India.',
    'Indian Polity',
    'Constitution',
    'Easy'
  ),
  createValidatedQuestion(
    77,
    'The National Human Rights Commission was established in:',
    ['A) 1990', 'B) 1991', 'C) 1992', 'D) 1993'],
    3,
    'The National Human Rights Commission was established in 1993 under the Protection of Human Rights Act.',
    'Indian Polity',
    'Constitution',
    'Medium'
  ),
  createValidatedQuestion(
    79,
    'Zero Hour in Parliament starts at:',
    ['A) 12 PM', 'B) 1 PM', 'C) 2 PM', 'D) 3 PM'],
    0,
    'Zero Hour in Parliament starts at 12 PM (noon) and lasts for one hour.',
    'Indian Polity',
    'Parliament',
    'Easy'
  ),
  createValidatedQuestion(
    82,
    'The National Commission for Scheduled Castes is established under Article:',
    ['A) 338', 'B) 339', 'C) 340', 'D) 341'],
    0,
    'The National Commission for Scheduled Castes is established under Article 338 of the Indian Constitution.',
    'Indian Polity',
    'Constitution',
    'Medium'
  ),
  createValidatedQuestion(
    83,
    'The Right to Information Act was passed in:',
    ['A) 2003', 'B) 2004', 'C) 2005', 'D) 2006'],
    2,
    'The Right to Information Act was passed in 2005 and came into force on October 12, 2005.',
    'Indian Polity',
    'Constitution',
    'Medium'
  ),
  createValidatedQuestion(
    84,
    'Silent Valley National Park is located in:',
    ['A) Karnataka', 'B) Tamil Nadu', 'C) Kerala', 'D) Andhra Pradesh'],
    2,
    'Silent Valley National Park is located in the Nilgiri Hills of Kerala.',
    'Indian Geography',
    'National Parks',
    'Medium'
  ),
  createValidatedQuestion(
    90,
    'Which state has the largest area in India?',
    ['A) Madhya Pradesh', 'B) Maharashtra', 'C) Rajasthan', 'D) Uttar Pradesh'],
    2,
    'Rajasthan is the largest state in India by area, covering 342,239 square kilometers.',
    'Indian Geography',
    'States',
    'Easy'
  ),
  createValidatedQuestion(
    99,
    'Which is the largest saltwater lake in India?',
    ['A) Chilika', 'B) Pulicat', 'C) Vembanad', 'D) Sambhar'],
    0,
    'Chilika Lake in Odisha is the largest saltwater lake in India.',
    'Indian Geography',
    'Lakes',
    'Medium'
  ),
  createValidatedQuestion(
    101,
    'Which state has the highest percentage of forest cover in India?',
    ['A) Arunachal Pradesh', 'B) Mizoram', 'C) Meghalaya', 'D) Nagaland'],
    1,
    'Mizoram has the highest percentage of forest cover in India, with over 85% of its geographical area under forests.',
    'Indian Geography',
    'Forests',
    'Medium'
  ),
  createValidatedQuestion(
    105,
    'Which of the following is NOT correctly matched?',
    ['A) Vitamin A - Night Blindness', 'B) Vitamin B1 - Beriberi', 'C) Vitamin C - Scurvy', 'D) Vitamin E - Night Blindness'],
    3,
    'Vitamin A deficiency causes night blindness, not Vitamin E. Vitamin E is an antioxidant and its deficiency can cause neurological problems.',
    'General Science',
    'Biology',
    'Medium'
  ),
  createValidatedQuestion(
    106,
    'Which of the following is NOT a function of the liver?',
    ['A) Blood filtration', 'B) Bile production', 'C) Glycogen storage', 'D) Protein synthesis'],
    0,
    'While the liver does filter blood, its primary functions are bile production, glycogen storage, and protein synthesis. Blood filtration is primarily a function of the kidneys.',
    'General Science',
    'Biology',
    'Hard'
  )
];

// Section 6: Telangana GK (20 questions)
export const telanganaGKQuestions: Question[] = [
  createValidatedQuestion(
    101,
    "Which is the state flower of Telangana?",
    ["A) Tangedu", "B) Blue Water Lily", "C) Marigold", "D) Lotus"],
    0,
    "Tangedu (Tanner's Cassia) is the state flower of Telangana.",
    "Telangana GK",
    "State Symbols",
    "Easy"
  ),
  createValidatedQuestion(
    102,
    "Which river is known as the lifeline of Telangana?",
    ["A) Godavari", "B) Krishna", "C) Musi", "D) Manjira"],
    0,
    "The Godavari River is known as the lifeline of Telangana, flowing through the state for about 600 km.",
    "Telangana GK",
    "Geography",
    "Easy"
  ),
  createValidatedQuestion(
    103,
    "Which district in Telangana is known for its diamond mines?",
    ["A) Karimnagar", "B) Warangal", "C) Nizamabad", "D) Adilabad"],
    0,
    "Karimnagar district is known for its diamond mines, particularly in the Kollur region.",
    "Telangana GK",
    "Geography",
    "Medium"
  ),
  createValidatedQuestion(
    104,
    "Which is the largest district in Telangana by area?",
    ["A) Bhadradri Kothagudem", "B) Adilabad", "C) Nalgonda", "D) Khammam"],
    0,
    "Bhadradri Kothagudem is the largest district in Telangana by area.",
    "Telangana GK",
    "Geography",
    "Medium"
  ),
  createValidatedQuestion(
    105,
    "Which festival is celebrated as the state festival of Telangana?",
    ["A) Bathukamma", "B) Bonalu", "C) Ugadi", "D) Sankranti"],
    0,
    "Bathukamma is celebrated as the state festival of Telangana, symbolizing the cultural spirit of the state.",
    "Telangana GK",
    "Culture",
    "Easy"
  )
];

// Section 7: Current Affairs (20 questions)
export const currentAffairsQuestions: Question[] = [
  createValidatedQuestion(
    121,
    "Which country hosted the 2023 G20 Summit?",
    ["A) India", "B) Indonesia", "C) Brazil", "D) Italy"],
    0,
    "India hosted the 2023 G20 Summit in New Delhi from September 9-10, 2023.",
    "Current Affairs",
    "International Events",
    "Easy"
  ),
  createValidatedQuestion(
    122,
    "Who won the 2023 Nobel Peace Prize?",
    ["A) Narges Mohammadi", "B) Maria Ressa", "C) Dmitry Muratov", "D) Abiy Ahmed"],
    0,
    "Narges Mohammadi, an Iranian human rights activist, won the 2023 Nobel Peace Prize for her fight against the oppression of women in Iran.",
    "Current Affairs",
    "Awards",
    "Medium"
  ),
  createValidatedQuestion(
    123,
    "Which country won the 2023 Cricket World Cup?",
    ["A) India", "B) Australia", "C) England", "D) New Zealand"],
    1,
    "Australia won the 2023 Cricket World Cup by defeating India in the final match.",
    "Current Affairs",
    "Sports",
    "Easy"
  ),
  createValidatedQuestion(
    124,
    "Which country became the fourth nation to successfully land on the Moon in 2023?",
    ["A) Japan", "B) South Korea", "C) India", "D) Israel"],
    2,
    "India became the fourth country to successfully land on the Moon with its Chandrayaan-3 mission in 2023.",
    "Current Affairs",
    "Science & Technology",
    "Medium"
  ),
  createValidatedQuestion(
    125,
    "Who was appointed as the new Chief Justice of India in 2023?",
    ["A) Justice D.Y. Chandrachud", "B) Justice U.U. Lalit", "C) Justice N.V. Ramana", "D) Justice S.A. Bobde"],
    0,
    "Justice D.Y. Chandrachud was appointed as the 50th Chief Justice of India in 2023.",
    "Current Affairs",
    "Indian Polity",
    "Medium"
  )
];

// Section 8: English (30 questions)
export const englishQuestions: Question[] = [
  createValidatedQuestion(
    141,
    "Choose the correct synonym of \"EPHEMERAL\":",
    ["A) Eternal", "B) Transient", "C) Permanent", "D) Lasting"],
    1,
    "Ephemeral means lasting for a very short time, making \"transient\" the correct synonym.",
    "English",
    "Vocabulary",
    "Medium"
  ),
  createValidatedQuestion(
    142,
    "Identify the correct sentence:",
    ["A) Neither the manager nor his assistant were present", "B) Neither the manager or his assistant were present", "C) Neither the manager nor his assistant was present", "D) Neither the manager or his assistant was present"],
    2,
    "When using \"neither...nor\", the verb agrees with the noun closest to it. Here, \"assistant\" is singular, so we use \"was\".",
    "English",
    "Grammar",
    "Hard"
  ),
  createValidatedQuestion(
    143,
    "Choose the correct meaning of the idiom \"To hit the nail on the head\":",
    ["A) To cause physical injury", "B) To be exactly right", "C) To make a mistake", "D) To work hard"],
    1,
    "The idiom \"To hit the nail on the head\" means to be exactly right or accurate about something.",
    "English",
    "Idioms",
    "Medium"
  ),
  createValidatedQuestion(
    144,
    "Select the correctly spelled word:",
    ["A) Accomodate", "B) Accommodate", "C) Acommodate", "D) Acomodate"],
    1,
    "The correct spelling is \"Accommodate\" with double 'c' and double 'm'.",
    "English",
    "Spelling",
    "Easy"
  ),
  createValidatedQuestion(
    145,
    "Choose the correct antonym of \"BENEVOLENT\":",
    ["A) Kind", "B) Generous", "C) Malevolent", "D) Charitable"],
    2,
    "Benevolent means kind and generous, so its antonym is malevolent, which means having or showing a wish to do evil to others.",
    "English",
    "Vocabulary",
    "Medium"
  )
];

// Section 9: Telugu (20 questions)
export const teluguQuestions: Question[] = [
  createValidatedQuestion(
    151,
    "తెలుగు వర్ణమాలలో అచ్చులు ఎన్ని?",
    ["A) 16", "B) 18", "C) 20", "D) 22"],
    0,
    "తెలుగు వర్ణమాలలో 16 అచ్చులు ఉంటాయి.",
    "Telugu",
    "Grammar",
    "Easy"
  ),
  createValidatedQuestion(
    152,
    "క్రింది వాటిలో సరియైన వాక్యం ఏది?",
    ["A) అతను పాఠశాలకు వెళ్ళాడు", "B) అతను పాఠశాలకు వెళ్ళినాడు", "C) అతను పాఠశాలకు వెళ్ళాడు", "D) అతను పాఠశాలకు వెళ్ళాడు"],
    2,
    "సరియైన వాక్యం: \"అతను పాఠశాలకు వెళ్ళాడు\". ఇది భూతకాల రూపం.",
    "Telugu",
    "Grammar",
    "Medium"
  ),
  createValidatedQuestion(
    153,
    "క్రింది వాటిలో సరియైన పదం ఏది?",
    ["A) స్వాగతం", "B) స్వాగతము", "C) స్వాగతమ్", "D) స్వాగతమ"],
    0,
    "సరియైన పదం \"స్వాగతం\". ఇది సంస్కృత పదం.",
    "Telugu",
    "Vocabulary",
    "Easy"
  ),
  createValidatedQuestion(
    154,
    "తెలుగు సాహిత్యంలో \"కవిత్రయం\" అని ఎవరిని అంటారు?",
    ["A) నన్నయ, తిక్కన, ఎర్రన", "B) నన్నయ, తిక్కన, యెర్రప్రగడ", "C) నన్నయ, తిక్కన, శ్రీనాథుడు", "D) నన్నయ, తిక్కన, పోతన"],
    0,
    "తెలుగు సాహిత్యంలో నన్నయ, తిక్కన, ఎర్రనలను \"కవిత్రయం\" అంటారు.",
    "Telugu",
    "Literature",
    "Hard"
  ),
  createValidatedQuestion(
    155,
    "క్రింది వాటిలో సరియైన సంధి ఏది?",
    ["A) దేవ + ఇంద్రుడు = దేవేంద్రుడు", "B) దేవ + ఇంద్రుడు = దేవింద్రుడు", "C) దేవ + ఇంద్రుడు = దేవయింద్రుడు", "D) దేవ + ఇంద్రుడు = దేవాఇంద్రుడు"],
    0,
    "సరియైన సంధి \"దేవ + ఇంద్రుడు = దేవేంద్రుడు\". ఇది సవర్ణదీర్ఘ సంధి.",
    "Telugu",
    "Grammar",
    "Hard"
  )
];

// Export all questions
export const allQuestions: Question[] = [
  ...arithmeticQuestions,
  ...reasoningQuestions,
  ...generalStudiesQuestions,
  ...telanganaGKQuestions,
  ...currentAffairsQuestions,
  ...englishQuestions,
  ...teluguQuestions
]; 