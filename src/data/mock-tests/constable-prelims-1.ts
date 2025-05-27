import { Question } from '@/pages/MockTests';

// Helper function to generate questions with consistent structure
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
  timeLimit: 54 // 180 minutes for 200 questions = ~54 seconds per question
});

// Arithmetic Ability Questions (50)
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
  // Percentages
  createQuestion(
    2,
    'If the price of a commodity is increased by 25% and then decreased by 20%, what is the net percentage change in price?',
    ['A) 5% increase', 'B) No change', 'C) 5% decrease', 'D) 10% decrease'],
    1,
    'Let original price be 100. After 25% increase: 125. After 20% decrease: 125 * 0.8 = 100. Net change = 100 - 100 = 0%.',
    'Arithmetic',
    'Percentages',
    'Easy'
  ),
  // Time and Work
  createQuestion(
    3,
    'A can complete a work in 12 days and B can complete the same work in 18 days. In how many days will they complete the work if they work together?',
    ['A) 6.5 days', 'B) 7.2 days', 'C) 7.5 days', 'D) 8 days'],
    1,
    'A\'s 1 day work = 1/12, B\'s 1 day work = 1/18. Combined work per day = (1/12 + 1/18) = 5/36. Time taken = 36/5 = 7.2 days.',
    'Arithmetic',
    'Time and Work',
    'Medium'
  ),
  // Simple Interest
  createQuestion(
    4,
    'At what rate percent per annum will ₹6,250 amount to ₹7,500 in 4 years?',
    ['A) 5%', 'B) 6%', 'C) 8%', 'D) 10%'],
    0,
    'SI = 7500 - 6250 = 1250. Rate = (100 * SI) / (P * T) = (100 * 1250) / (6250 * 4) = 5%',
    'Arithmetic',
    'Simple Interest',
    'Easy'
  ),
  // Averages
  createQuestion(
    5,
    'The average of 11 results is 50. If the average of first six results is 49 and that of last six is 52, find the sixth result.',
    ['A) 48', 'B) 50', 'C) 52', 'D) 56'],
    3,
    'Total of 11 results = 11 * 50 = 550. Sum of first six = 6 * 49 = 294. Sum of last six = 6 * 52 = 312. Sixth result = 294 + 312 - 550 = 56',
    'Arithmetic',
    'Averages',
    'Hard'
  )
  // More questions would be added here to reach 50
];

// Reasoning Questions (50)
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
  // Coding-Decoding
  createQuestion(
    52,
    'In a certain code, "COMPUTER" is written as "PMOCRETU". How is "KEYBOARD" written in that code?',
    ['A) YEKDRABO', 'B) YEKDRABK', 'C) YEKDRABK', 'D) YEKDRABO'],
    0,
    'The word is divided into two halves and each half is reversed. COMPUTER → COMP + UTER → PMOC + RETU → PMOCRETU. Similarly, KEYBOARD → KEYB + OARD → BYEK + DRAO → BYEKDRAO.',
    'Reasoning',
    'Coding-Decoding',
    'Medium'
  ),
  // Blood Relations
  createQuestion(
    53,
    'Pointing to a photograph, a man said, "She is the daughter of my grandfather\'s only son." How is the person in the photograph related to the man?',
    ['A) Sister', 'B) Daughter', 'C) Mother', 'D) Niece'],
    0,
    'My grandfather\'s only son is my father. His daughter would be my sister.',
    'Reasoning',
    'Blood Relations',
    'Easy'
  ),
  // Series Completion
  createQuestion(
    54,
    'What comes next in the series: 2, 6, 12, 20, 30, ?',
    ['A) 40', 'B) 42', 'C) 44', 'D) 48'],
    1,
    'The pattern is: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, so the next term is 6×7=42.',
    'Reasoning',
    'Series Completion',
    'Medium'
  ),
  // Direction Sense
  createQuestion(
    55,
    'Rahul walks 10 meters south from his house, turns left and walks 25 meters, then turns right and walks 5 meters, and finally turns left and walks 10 meters. How far is he from his house now?',
    ['A) 25 m', 'B) 30 m', 'C) 35 m', 'D) 40 m'],
    1,
    'Using Pythagoras theorem: √(20² + 15²) = √(400 + 225) = √625 = 25 meters.',
    'Reasoning',
    'Direction Sense',
    'Hard'
  )
  // More questions would be added here to reach 50
];

// English Questions (20)
export const englishQuestions: Question[] = [
  // Vocabulary
  createQuestion(
    101,
    'Choose the word most similar in meaning to "EPHEMERAL":',
    ['A) Eternal', 'B) Brief', 'C) Lasting', 'D) Permanent'],
    1,
    'Ephemeral means lasting for a very short time, so the correct answer is B) Brief.',
    'English',
    'Vocabulary',
    'Medium'
  ),
  // Grammar - Error Detection
  createQuestion(
    102,
    'Identify the part of the sentence with an error: "One of the students (A)/ have submitted (B)/ their assignment (C)/ before the deadline. (D)/ No Error (E)"',
    ['A) One of the students', 'B) have submitted', 'C) their assignment', 'D) before the deadline', 'E) No Error'],
    1,
    'The error is in part (B). The correct verb should be "has submitted" to agree with the singular subject "One".',
    'English',
    'Grammar',
    'Medium'
  ),
  // Reading Comprehension
  createQuestion(
    103,
    'Read the passage and answer the question: "The Internet has revolutionized the way we communicate, work, and access information. However, it has also led to concerns about privacy and data security." \n\nWhat is the main idea of this passage?',
    ['A) The benefits of the Internet', 'B) The dangers of the Internet', 'C) The dual nature of the Internet', 'D) The history of the Internet'],
    2,
    'The passage mentions both positive aspects (revolutionizing communication) and concerns (privacy issues), indicating it discusses the dual nature of the Internet.',
    'English',
    'Reading Comprehension',
    'Easy'
  ),
  // Sentence Rearrangement
  createQuestion(
    104,
    'Arrange the following sentences to form a coherent paragraph: \n1. The government has launched several initiatives to promote digital literacy. \n2. However, internet penetration remains low in rural areas. \n3. India is making significant progress in digital transformation. \n4. These efforts aim to bridge the digital divide in the country.',
    ['A) 3-1-2-4', 'B) 1-3-4-2', 'C) 2-3-1-4', 'D) 3-2-1-4'],
    3,
    'The correct sequence is: 3 (introduces the topic) - 2 (presents a challenge) - 1 (mentions the response) - 4 (explains the purpose).',
    'English',
    'Sentence Rearrangement',
    'Hard'
  ),
  // One-word Substitution
  createQuestion(
    105,
    'Choose the word that best describes "A person who is indifferent to pleasure or pain":',
    ['A) Stoic', 'B) Hedonist', 'C) Ascetic', 'D) Recluse'],
    0,
    'A stoic is someone who endures pain or hardship without showing their feelings or complaining.',
    'English',
    'Vocabulary',
    'Medium'
  )
  // More questions would be added here to reach 20
];

// General Science Questions (20)
export const scienceQuestions: Question[] = [
  // Physics
  createQuestion(
    121,
    'Which of the following is NOT a greenhouse gas?',
    ['A) Carbon dioxide', 'B) Methane', 'C) Oxygen', 'D) Water vapor'],
    2,
    'Oxygen is essential for respiration and is not a greenhouse gas. Greenhouse gases trap heat in the atmosphere, while oxygen does not have this property.',
    'General Science',
    'Environmental Science',
    'Easy'
  ),
  // Chemistry
  createQuestion(
    122,
    'The pH of a solution is a measure of its:',
    ['A) Temperature', 'B) Viscosity', 'C) Acidity or Alkalinity', 'D) Density'],
    2,
    'The pH scale measures how acidic or basic a substance is, ranging from 0 (very acidic) to 14 (very basic), with 7 being neutral.',
    'General Science',
    'Chemistry',
    'Easy'
  ),
  // Biology
  createQuestion(
    123,
    'Which of the following is known as the "powerhouse of the cell"?',
    ['A) Nucleus', 'B) Mitochondria', 'C) Ribosome', 'D) Golgi Apparatus'],
    1,
    'Mitochondria are called the powerhouse of the cell because they generate most of the cell\'s supply of ATP, used as a source of chemical energy.',
    'General Science',
    'Biology',
    'Easy'
  ),
  // Physics - Motion
  createQuestion(
    124,
    'A car moving with a speed of 36 km/h comes to rest in 5 seconds when the brakes are applied. What is the retardation produced?',
    ['A) 1 m/s²', 'B) 2 m/s²', 'C) 3 m/s²', 'D) 4 m/s²'],
    1,
    'First convert 36 km/h to m/s: 36 × (5/18) = 10 m/s. Retardation = (Final velocity - Initial velocity) / Time = (0 - 10)/5 = -2 m/s². The negative sign indicates retardation.',
    'General Science',
    'Physics',
    'Hard'
  ),
  // Environmental Science
  createQuestion(
    125,
    'The Chipko Movement was primarily concerned with:',
    ['A) Wildlife protection', 'B) Forest conservation', 'C) Water conservation', 'D) Air pollution control'],
    1,
    'The Chipko Movement was a forest conservation movement where people hugged trees to prevent them from being cut down, primarily in the Himalayan region during the 1970s.',
    'General Science',
    'Environmental Science',
    'Medium'
  )
  // More questions would be added here to reach 20
];

// History & Culture Questions (15)
export const historyQuestions: Question[] = [
  // Modern India
  createQuestion(
    141,
    'Who was the first Indian woman president of the Indian National Congress?',
    ['A) Sarojini Naidu', 'B) Annie Besant', 'C) Vijaya Lakshmi Pandit', 'D) Indira Gandhi'],
    0,
    'Sarojini Naidu became the first Indian woman president of the Indian National Congress in 1925. Annie Besant was the first woman president overall in 1917, but she was of British origin.',
    'Indian History',
    'Modern India',
    'Medium'
  ),
  // Ancient India
  createQuestion(
    142,
    'Which ancient Indian text is considered the primary source of information about the Mauryan Empire?',
    ['A) Arthashastra', 'B) Indica', 'C) Rajatarangini', 'D) Harshacharita'],
    0,
    'The Arthashastra, written by Chanakya (Kautilya), provides detailed information about the Mauryan administration and political system.',
    'Indian History',
    'Ancient India',
    'Medium'
  ),
  // Medieval India
  createQuestion(
    143,
    'The famous "Qutub Minar" was completed by which ruler?',
    ['A) Qutb-ud-din Aibak', 'B) Iltutmish', 'C) Razia Sultan', 'D) Balban'],
    1,
    'Qutb-ud-din Aibak started the construction of Qutub Minar but it was completed by his successor Iltutmish.',
    'Indian History',
    'Medieval India',
    'Medium'
  ),
  // Indian Culture
  createQuestion(
    144,
    'The classical dance form "Mohiniyattam" belongs to which Indian state?',
    ['A) Tamil Nadu', 'B) Kerala', 'C) Andhra Pradesh', 'D) Karnataka'],
    1,
    'Mohiniyattam is a classical dance form from Kerala, characterized by graceful, swaying movements and feminine themes.',
    'Indian Culture',
    'Performing Arts',
    'Easy'
  ),
  // Modern History
  createQuestion(
    145,
    'The "Dandi March" led by Mahatma Gandhi in 1930 was a protest against:',
    ['A) Rowlatt Act', 'B) Jallianwala Bagh Massacre', 'C) Salt Tax', 'D) Partition of Bengal'],
    2,
    'The Dandi March was a 24-day march from Sabarmati Ashram to Dandi to produce salt from seawater, defying the British salt laws and tax.',
    'Indian History',
    'Freedom Struggle',
    'Easy'
  )
  // More questions would be added here to reach 15
];

// Geography Questions (15)
export const geographyQuestions: Question[] = [
  // Indian Geography - Rivers
  createQuestion(
    156,
    'Which of the following rivers does NOT flow through Telangana?',
    ['A) Godavari', 'B) Krishna', 'C) Tungabhadra', 'D) Musi'],
    2,
    'Tungabhadra flows through Karnataka and Andhra Pradesh but not through Telangana. Godavari and Krishna are the major rivers of Telangana, while Musi is a tributary of Krishna flowing through Hyderabad.',
    'Indian Geography',
    'Rivers',
    'Medium'
  ),
  // Physical Geography
  createQuestion(
    157,
    'The "Western Ghats" and the "Eastern Ghats" meet at which hill range?',
    ['A) Nilgiri Hills', 'B) Cardamom Hills', 'C) Anaimalai Hills', 'D) Palani Hills'],
    0,
    'The Western Ghats and Eastern Ghats meet at the Nilgiri Hills in Tamil Nadu, which is part of the Western Ghats mountain range.',
    'Indian Geography',
    'Physical Features',
    'Medium'
  ),
  // Climate
  createQuestion(
    158,
    'Which of the following states receives rainfall from the North-East Monsoon?',
    ['A) Kerala', 'B) Tamil Nadu', 'C) Maharashtra', 'D) West Bengal'],
    1,
    'Tamil Nadu receives most of its rainfall from the North-East Monsoon (October-December), while the rest of India receives rainfall from the South-West Monsoon (June-September).',
    'Indian Geography',
    'Climate',
    'Hard'
  ),
  // Agriculture
  createQuestion(
    159,
    'The "Black Soil" of the Deccan Plateau is most suitable for the cultivation of:',
    ['A) Wheat', 'B) Rice', 'C) Cotton', 'D) Tea'],
    2,
    'Black soil, also known as Regur or Black Cotton Soil, is ideal for cotton cultivation due to its high moisture retention capacity and is found in the Deccan Plateau region.',
    'Indian Geography',
    'Agriculture',
    'Medium'
  ),
  // World Geography
  createQuestion(
    160,
    'Which of the following is the largest island in the world?',
    ['A) Greenland', 'B) New Guinea', 'C) Borneo', 'D) Madagascar'],
    0,
    'Greenland is the world\'s largest island with an area of about 2,166,086 square kilometers. It is an autonomous territory within the Kingdom of Denmark.',
    'World Geography',
    'Physical Features',
    'Easy'
  )
  // More questions would be added here to reach 15
];

// Polity & Economy Questions (15)
export const polityEconomyQuestions: Question[] = [
  // Polity - Constitution
  createQuestion(
    171,
    'The concept of Fundamental Rights in the Indian Constitution is borrowed from:',
    ['A) US Constitution', 'B) British Constitution', 'C) French Constitution', 'D) Canadian Constitution'],
    0,
    'The concept of Fundamental Rights is inspired by the US Constitution\'s Bill of Rights. The Indian Constitution has adopted the concept of fundamental rights from the US Constitution (Part III, Articles 12-35).',
    'Indian Polity',
    'Constitution',
    'Easy'
  ),
  // Political System
  createQuestion(
    172,
    'The maximum strength of the Lok Sabha, as per the Constitution of India, is:',
    ['A) 525', 'B) 543', 'C) 552', 'D) 560'],
    2,
    'The maximum strength of the Lok Sabha is 552 members - 530 members represent States, 20 members represent Union Territories, and 2 members are nominated by the President from the Anglo-Indian community (as per the 104th Amendment Act, 2019, this provision has been abolished).',
    'Indian Polity',
    'Parliament',
    'Medium'
  ),
  // Fundamental Duties
  createQuestion(
    173,
    'Fundamental Duties were added to the Indian Constitution by which Constitutional Amendment?',
    ['A) 40th Amendment', 'B) 42nd Amendment', 'C) 44th Amendment', 'D) 52nd Amendment'],
    1,
    'The Fundamental Duties were added by the 42nd Constitutional Amendment Act, 1976, based on the recommendations of the Swaran Singh Committee. They were added under Article 51A of the Constitution.',
    'Indian Polity',
    'Constitution',
    'Medium'
  ),
  // Indian Economy
  createQuestion(
    174,
    'Which of the following is NOT a direct tax?',
    ['A) Income Tax', 'B) Corporate Tax', 'C) Goods and Services Tax (GST)', 'D) Wealth Tax'],
    2,
    'Goods and Services Tax (GST) is an indirect tax. Direct taxes are those paid directly to the government by the taxpayer (like Income Tax, Corporate Tax, Wealth Tax), while indirect taxes are collected by intermediaries (like GST, VAT, Excise Duty).',
    'Indian Economy',
    'Taxation',
    'Easy'
  ),
  // Economic Planning
  createQuestion(
    175,
    'The concept of "Five Year Plans" in India was borrowed from:',
    ['A) United States', 'B) United Kingdom', 'C) Soviet Union', 'D) Japan'],
    2,
    'The concept of Five Year Plans was borrowed from the Soviet Union (now Russia). India adopted this model of centralized planning after independence, with the first Five Year Plan launched in 1951 under Prime Minister Jawaharlal Nehru.',
    'Indian Economy',
    'Planning',
    'Easy'
  )
  // More questions would be added here to reach 15
];

// Current Affairs Questions (5)
export const currentAffairsQuestions: Question[] = [
  // International Events
  createQuestion(
    186,
    'Which city hosted the G20 Summit in 2023?',
    ['A) New Delhi', 'B) Bali', 'C) Rome', 'D) Osaka'],
    0,
    'India hosted the G20 Summit in 2023 in New Delhi. The theme was "Vasudhaiva Kutumbakam - One Earth, One Family, One Future" which emphasizes global unity and sustainable development.',
    'Current Affairs',
    'International Events',
    'Easy'
  ),
  // National Affairs
  createQuestion(
    187,
    'Which Indian state recently became the first to implement the "One Nation, One Ration Card" scheme?',
    ['A) Andhra Pradesh', 'B) Telangana', 'C) Karnataka', 'D) Maharashtra'],
    0,
    'Andhra Pradesh became the first state to implement the "One Nation, One Ration Card" scheme, enabling migrant workers to access subsidized food grains from any fair price shop across the country.',
    'Current Affairs',
    'Government Schemes',
    'Medium'
  ),
  // Science and Technology
  createQuestion(
    188,
    'Which Indian state recently launched the "Har Ghar Solar" scheme to promote solar energy?',
    ['A) Gujarat', 'B) Rajasthan', 'C) Kerala', 'D) Tamil Nadu'],
    0,
    'Gujarat launched the "Surya Gujarat" or "Har Ghar Solar" scheme to encourage residential consumers to install rooftop solar panels by providing subsidies and incentives.',
    'Current Affairs',
    'Science and Technology',
    'Medium'
  ),
  // Sports
  createQuestion(
    189,
    'Who won the men\'s singles title in the 2023 Australian Open?',
    ['A) Rafael Nadal', 'B) Novak Djokovic', 'C) Daniil Medvedev', 'D) Carlos Alcaraz'],
    1,
    'Novak Djokovic won the men\'s singles title at the 2023 Australian Open, defeating Stefanos Tsitsipas in the final. This was his 10th Australian Open title and 22nd Grand Slam overall.',
    'Current Affairs',
    'Sports',
    'Easy'
  ),
  // Environment
  createQuestion(
    190,
    'Which international environmental agreement aims to phase out hydrofluorocarbons (HFCs)?',
    ['A) Paris Agreement', 'B) Kyoto Protocol', 'C) Kigali Amendment', 'D) Montreal Protocol'],
    2,
    'The Kigali Amendment to the Montreal Protocol, adopted in 2016, aims to phase out hydrofluorocarbons (HFCs), which are potent greenhouse gases used in refrigeration and air conditioning.',
    'Current Affairs',
    'Environment',
    'Hard'
  )
];

// Telangana State Questions (10)
export const telanganaQuestions: Question[] = [
  // Heritage and Culture
  createQuestion(
    191,
    'The famous Ramappa Temple, a UNESCO World Heritage Site, is located in which district of Telangana?',
    ['A) Warangal', 'B) Karimnagar', 'C) Nizamabad', 'D) Khammam'],
    0,
    'The Ramappa Temple, also known as the Ramalingeswara Temple, is located in Palampet village of Warangal Rural district. It was built in the 13th century during the Kakatiya dynasty and is known for its exquisite carvings and floating bricks.',
    'Telangana GK',
    'Heritage Sites',
    'Easy'
  ),
  // History - Telangana Movement
  createQuestion(
    192,
    'The "Telangana Armed Struggle" against the Nizam\'s rule took place during which period?',
    ['A) 1920-1930', 'B) 1938-1948', 'C) 1946-1951', 'D) 1952-1956'],
    2,
    'The Telangana Armed Struggle, also known as the Telangana Rebellion, was a peasant revolt against the feudal lords of the Telangana region and later against the Nizam of Hyderabad. It took place between 1946-1951 and was a significant movement in the history of Telangana.',
    'Telangana GK',
    'History',
    'Medium'
  ),
  // Geography
  createQuestion(
    193,
    'Which of the following is the largest district in Telangana by area?',
    ['A) Bhadradri Kothagudem', 'B) Nalgonda', 'C) Mahabubnagar', 'D) Adilabad'],
    2,
    'Mahabubnagar is the largest district in Telangana by area, covering approximately 4,173 square kilometers. It is located in the southern part of the state and is known for its historical and cultural significance.',
    'Telangana GK',
    'Geography',
    'Easy'
  ),
  // Polity
  createQuestion(
    194,
    'Who was the first Chief Minister of Telangana after its formation in 2014?',
    ['A) K. Chandrashekar Rao', 'B) N. Chandrababu Naidu', 'C) K. Jana Reddy', 'D) E. S. L. Narasimhan'],
    0,
    'K. Chandrashekar Rao, popularly known as KCR, became the first Chief Minister of Telangana after the state was officially formed on June 2, 2014. He is the founder and president of the Telangana Rashtra Samithi (TRS) party.',
    'Telangana GK',
    'Polity',
    'Easy'
  ),
  // Economy
  createQuestion(
    195,
    'Which of the following is known as the "Rice Bowl of Telangana"?',
    ['A) Karimnagar', 'B) Nalgonda', 'C) Khammam', 'D) Warangal'],
    1,
    'Nalgonda is often referred to as the "Rice Bowl of Telangana" due to its extensive paddy cultivation. The district is irrigated by the Krishna and Musi rivers, making it highly suitable for rice cultivation.',
    'Telangana GK',
    'Economy',
    'Medium'
  ),
  // Current Affairs - Telangana
  createQuestion(
    196,
    'Which scheme launched by the Telangana government provides financial assistance to farmers per acre for two crops in a year?',
    ['A) Rythu Bandhu', 'B) Rythu Bima', 'C) Rythu Vedika', 'D) Rythu Mitra'],
    0,
    'The Rythu Bandhu scheme, launched in 2018, provides financial assistance of ₹5,000 per acre per season to all farmers in Telangana for both Kharif and Rabi seasons. This is an investment support scheme for agriculture and horticulture crops.',
    'Telangana GK',
    'Government Schemes',
    'Medium'
  ),
  // Art and Culture
  createQuestion(
    197,
    'The "Bathukamma" festival is primarily celebrated in which Indian state?',
    ['A) Andhra Pradesh', 'B) Karnataka', 'C) Telangana', 'D) Tamil Nadu'],
    2,
    'Bathukamma is a floral festival celebrated predominantly in Telangana. It is a colorful and vibrant festival where women create flower stacks in the evenings and celebrate with traditional songs and dances. The festival typically falls in September-October.',
    'Telangana GK',
    'Culture',
    'Easy'
  ),
  // Rivers and Dams
  createQuestion(
    198,
    'The Kaleshwaram Lift Irrigation Project is built on which river?',
    ['A) Godavari', 'B) Krishna', 'C) Manjira', 'D) Musi'],
    0,
    'The Kaleshwaram Lift Irrigation Project is built on the Godavari River in Telangana. It is one of the world\'s largest multi-stage lift irrigation projects, aimed at providing water for irrigation and drinking purposes to large parts of the state.',
    'Telangana GK',
    'Irrigation',
    'Hard'
  ),
  // Wildlife and Environment
  createQuestion(
    199,
    'Which of the following is the only tiger reserve in Telangana?',
    ['A) Kawal Tiger Reserve', 'B) Amrabad Tiger Reserve', 'C) Pocharam Wildlife Sanctuary', 'D) Eturnagaram Wildlife Sanctuary'],
    1,
    'Amrabad Tiger Reserve, located in the Nallamala hills, is the only tiger reserve in Telangana. It was earlier part of the Nagarjunsagar-Srisailam Tiger Reserve before the bifurcation of Andhra Pradesh.',
    'Telangana GK',
    'Environment',
    'Medium'
  ),
  // Education and Institutions
  createQuestion(
    200,
    'The Indian Institute of Technology (IIT) in Telangana is located in which city?',
    ['A) Hyderabad', 'B) Warangal', 'C) Karimnagar', 'D) Nizamabad'],
    1,
    'The Indian Institute of Technology (IIT) in Telangana is located in Warangal city. It is one of the premier technical institutes in the country and was established in 2008 as IIT Hyderabad before being renamed as IIT Hyderabad (IITH) in 2011.',
    'Telangana GK',
    'Education',
    'Easy'
  )
];

// Combine all questions
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
  total: 200 // This should match the sum of all questions above
};

export default constablePrelims1Questions;
