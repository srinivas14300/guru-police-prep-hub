import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowRight, BookOpen, Calendar, Clock, FileText, Award, 
  ChevronDown, ChevronUp, Download, Book, Target, 
  GraduationCap, Scale, History, Globe, Atom, Cpu, AlertTriangle,
  FileQuestion, TrendingUp, UserCheck, Award as AwardIcon, HeartPulse,
  Calculator, Brain, MapPin, Newspaper, Users, BarChart2, Shield, 
  MessageCircle, FileSearch, ChevronRight, CheckCircle, XCircle, 
  Clock as ClockIcon, Ruler, Award as Medal, Zap, Bookmark, Star
} from 'lucide-react';

interface SyllabusItem {
  subject: string;
  topics: string[];
  icon: JSX.Element;
}

interface PreviousYearPaper {
  year: number;
  title: string;
  type: 'Preliminary' | 'Final' | 'Physical' | 'Answer Key';
  downloadLink: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StudyMaterial {
  title: string;
  icon: JSX.Element;
  topics: string[];
  link: string;
}

interface PhysicalTestStandards {
  male: {
    height: string;
    chest: string;
    race: string;
    longJump: string;
    highJump: string;
  };
  female: {
    height: string;
    chest: string;
    race: string;
    longJump: string;
    highJump: string;
  };
}

const syllabus: SyllabusItem[] = [
  {
    subject: 'General Studies',
    icon: <Globe className="h-5 w-5" />,
    topics: [
      'Indian Constitution and Polity',
      'Indian History & Cultural Heritage',
      'Indian and Telangana Geography',
      'Indian Economy and Planning',
      'Environmental Issues & Disaster Management',
      'General Science & Technology',
      'Current Affairs - National & International',
      'Telangana State Specific Topics'
    ]
  },
  {
    subject: 'Arithmetic Ability',
    icon: <Calculator className="h-5 w-5" />,
    topics: [
      'Number System',
      'Fractions, Decimals, and Percentages',
      'Ratio and Proportion',
      'Simple and Compound Interest',
      'Time and Work',
      'Time and Distance',
      'Mensuration',
      'Data Interpretation'
    ]
  },
  {
    subject: 'General Abilities',
    icon: <Brain className="h-5 w-5" />,
    topics: [
      'Logical Reasoning',
      'Analytical Ability',
      'Decision Making',
      'Problem Solving',
      'Visual Memory',
      'Discrimination & Observation',
      'Relationship Concepts'
    ]
  },
  {
    subject: 'English',
    icon: <BookOpen className="h-5 w-5" />,
    topics: [
      'Vocabulary',
      'Grammar',
      'Idioms & Phrases',
      'Tenses',
      'Active & Passive Voice',
      'Direct & Indirect Speech',
      'Comprehension',
      'Error Detection'
    ]
  },
  {
    subject: 'Telugu/Urdu',
    icon: <GraduationCap className="h-5 w-5" />,
    topics: [
      'Vocabulary',
      'Grammar',
      'Idioms & Phrases',
      'Comprehension',
      'Translation',
      'Error Detection',
      'Letter Writing',
      'Essays'
    ]
  }
];

const previousYearPapers: PreviousYearPaper[] = [
  {
    year: 2023,
    title: 'TS Police Constable Preliminary Exam',
    type: 'Preliminary',
    downloadLink: '#'
  },
  {
    year: 2023,
    title: 'TS Police Constable Final Answer Key',
    type: 'Answer Key',
    downloadLink: '#'
  },
  {
    year: 2022,
    title: 'TS Police Constable Previous Year Paper',
    type: 'Preliminary',
    downloadLink: '#'
  },
  {
    year: 2021,
    title: 'TS Police Constable Previous Year Paper',
    type: 'Preliminary',
    downloadLink: '#'
  },
  {
    year: 2020,
    title: 'TS Police Constable Previous Year Paper',
    type: 'Preliminary',
    downloadLink: '#'
  }
];

const physicalTestStandards: PhysicalTestStandards = {
  male: {
    height: '167.5 cm (UR/OC/BC), 160 cm (SC/ST)',
    chest: '86.3 cm (with 5 cm expansion)',
    race: '5 km in 25 minutes',
    longJump: '3.80 meters (3 chances)',
    highJump: '1.20 meters (3 chances)'
  },
  female: {
    height: '152.5 cm (UR/OC/BC), 150 cm (SC/ST)',
    chest: 'Not applicable',
    race: '2.5 km in 15 minutes',
    longJump: '2.75 meters (3 chances)',
    highJump: '0.90 meters (3 chances)'
  }
};

const faqs: FAQItem[] = [
  {
    question: 'What is the eligibility criteria for TS Police Constable?',
    answer: 'Candidates must have passed Intermediate (10+2) or equivalent examination from a recognized board. The minimum age limit is 18 years and the maximum age limit is 22 years for OC candidates, 25 years for BC candidates, and 27 years for SC/ST candidates as on the date mentioned in the official notification. Age relaxation is applicable as per government norms.'
  },
  {
    question: 'What is the selection process for TS Police Constable?',
    answer: 'The selection process consists of: 1) Preliminary Written Test (100 marks), 2) Physical Measurement Test (PMT), 3) Physical Efficiency Test (PET), 4) Final Written Examination (200 marks), 5) Document Verification, and 6) Medical Examination. Candidates need to qualify in each stage to proceed to the next.'
  },
  {
    question: 'What is the exam pattern for TS Police Constable?',
    answer: 'The Preliminary Written Test consists of 100 multiple-choice questions (1 mark each) with 0.25 negative marking for wrong answers. The test covers topics like Arithmetic & Test of Reasoning, General Studies, and English. The Final Written Examination consists of 200 multiple-choice questions (200 marks) with similar negative marking. The duration is 3 hours for both exams.'
  },
  {
    question: 'What is the syllabus for TS Police Constable exam?',
    answer: 'The syllabus includes: 1) General Studies (Indian Constitution, History, Geography, Economy, Science, Current Affairs), 2) Arithmetic Ability (Number System, Percentages, Time & Work, etc.), 3) General Abilities (Logical Reasoning, Analytical Ability), 4) English (Vocabulary, Grammar, Comprehension), and 5) Telugu/Urdu (for respective medium candidates).'
  },
  {
    question: 'What are the physical standards for TS Police Constable?',
    answer: 'For Male candidates: Height - 167.5 cm (UR/OC/BC), 160 cm (SC/ST); Chest - 86.3 cm (with 5 cm expansion). For Female candidates: Height - 152.5 cm (UR/OC/BC), 150 cm (SC/ST). Physical Efficiency Test includes running, long jump, and high jump with different parameters for male and female candidates.'
  },
  {
    question: 'How to prepare for TS Police Constable exam?',
    answer: '1) Understand the complete syllabus and exam pattern, 2) Create a study schedule and stick to it, 3) Focus on basics and practice previous year papers, 4) Take mock tests regularly, 5) Read newspapers daily for current affairs, 6) Practice physical fitness exercises regularly, 7) Join a test series for better preparation, 8) Revise regularly and maintain notes.'
  },
  {
    question: 'What is the salary of a TS Police Constable?',
    answer: 'The pay scale for TS Police Constable is approximately ₹31,460 - ₹84,970 per month (as per 11th PRC). In addition to the basic pay, they are entitled to various allowances like DA, HRA, and other benefits as per the government norms. The total in-hand salary may vary based on the place of posting and other factors.'
  }
];

const studyMaterials: StudyMaterial[] = [
  {
    title: 'General Studies',
    icon: <Globe className="h-6 w-6" />,
    topics: ['Indian Polity', 'History', 'Geography', 'Economy', 'Science & Tech'],
    link: '#'
  },
  {
    title: 'Arithmetic Ability',
    icon: <Calculator className="h-6 w-6" />,
    topics: ['Number System', 'Percentage', 'Time & Work', 'Mensuration', 'Data Interpretation'],
    link: '#'
  },
  {
    title: 'General Abilities',
    icon: <Brain className="h-6 w-6" />,
    topics: ['Logical Reasoning', 'Analytical Ability', 'Decision Making', 'Problem Solving'],
    link: '#'
  },
  {
    title: 'English Language',
    icon: <BookOpen className="h-6 w-6" />,
    topics: ['Grammar', 'Vocabulary', 'Comprehension', 'Error Detection'],
    link: '#'
  },
  {
    title: 'Telangana GK',
    icon: <MapPin className="h-6 w-6" />,
    topics: ['History', 'Geography', 'Economy', 'Culture', 'Government Schemes'],
    link: '#'
  },
  {
    title: 'Current Affairs',
    icon: <Newspaper className="h-6 w-6" />,
    topics: ['National News', 'International News', 'Awards & Honors', 'Sports', 'Important Days'],
    link: '#'
  }
];

export default function ConstableHub() {
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const features = [
    {
      title: 'Comprehensive Study Plans',
      description: 'Structured 30, 60, and 90-day study plans tailored for Police Constable exam preparation.',
      icon: <Calendar className="h-8 w-8 text-ts-gold" />,
      link: '/study-plans/constable',
      target: ''
    },
    {
      title: 'Detailed Syllabus',
      description: 'Complete subject-wise syllabus covering all topics for the Police Constable examination.',
      icon: <BookOpen className="h-8 w-8 text-ts-gold" />,
      link: '#syllabus',
      target: ''
    },
    {
      title: 'Previous Year Papers',
      description: 'Access previous years\' question papers to understand the exam pattern.',
      icon: <FileText className="h-8 w-8 text-ts-gold" />,
      link: '#previous-year-papers',
      target: ''
    },
    {
      title: 'Physical Fitness Guide',
      description: 'Essential information and training plans for the physical efficiency test.',
      icon: <HeartPulse className="h-8 w-8 text-ts-gold" />,
      link: '#physical-fitness',
      target: ''
    },
  ];

  const syllabus: SyllabusItem[] = [
    {
      subject: 'General Studies',
      icon: <Book className="h-5 w-5" />,
      topics: [
        'Current Affairs (National & International)',
        'Indian History & Culture',
        'Indian Polity & Governance',
        'Indian Economy',
        'Geography of India & World',
        'Environmental Studies',
        'Disaster Management',
        'General Science & Technology',
        'Telangana Movement & State Formation',
        'Telangana Culture & Heritage'
      ]
    },
    {
      subject: 'Arithmetic Ability',
      icon: <Calculator className="h-5 w-5" />,
      topics: [
        'Number System',
        'Simplification',
        'Decimal & Fractions',
        'Ratio & Proportion',
        'Percentage',
        'Time & Work',
        'Time & Distance',
        'Simple & Compound Interest',
        'Profit & Loss',
        'Mensuration',
        'Data Interpretation',
        'Logical Reasoning'
      ]
    },
    {
      subject: 'General Abilities',
      icon: <Brain className="h-5 w-5" />,
      topics: [
        'Analytical Abilities',
        'Logical Reasoning',
        'Decision Making',
        'Problem Solving',
        'Visual Memory',
        'Discrimination & Observation',
        'Verbal & Non-Verbal Reasoning'
      ]
    },
    {
      subject: 'English',
      icon: <BookOpen className="h-5 w-5" />,
      topics: [
        'Vocabulary',
        'Grammar',
        'Sentence Structure',
        'Synonyms & Antonyms',
        'Comprehension',
        'Idioms & Phrases',
        'One Word Substitution',
        'Error Detection',
        'Fill in the Blanks'
      ]
    },
    {
      subject: 'Telugu/Urdu (Regional Language)',
      icon: <Globe className="h-5 w-5" />,
      topics: [
        'Vocabulary',
        'Grammar',
        'Comprehension',
        'Translation',
        'Essay Writing',
        'Letter Writing',
        'Precis Writing',
        'Idioms & Phrases'
      ]
    }
  ];

  const previousYearPapers: PreviousYearPaper[] = [
    { year: 2023, title: 'Constable Preliminary Exam', type: 'Preliminary', downloadLink: '#' },
    { year: 2022, title: 'Constable Final Written Exam', type: 'Final', downloadLink: '#' },
    { year: 2021, title: 'Constable Preliminary Exam', type: 'Preliminary', downloadLink: '#' },
    { year: 2020, title: 'Constable Final Written Exam', type: 'Final', downloadLink: '#' },
    { year: 2019, title: 'Constable Physical Test Guidelines', type: 'Physical', downloadLink: '#' },
    { year: 2018, title: 'Constable Preliminary Exam', type: 'Preliminary', downloadLink: '#' },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'What is the age limit for TS Police Constable recruitment?',
      answer: 'The minimum age limit is 18 years and the maximum age limit is 22 years for OC candidates, with age relaxation applicable for reserved categories as per government norms.'
    },
    {
      question: 'What is the educational qualification required?',
      answer: 'Candidates must have passed Intermediate (10+2) or its equivalent from a recognized board. However, for certain technical posts, specific educational qualifications may be required.'
    },
    {
      question: 'What is the selection process for TS Police Constable?',
      answer: 'The selection process consists of: 1) Preliminary Written Test (PWT), 2) Physical Measurement Test (PMT), 3) Physical Efficiency Test (PET), 4) Final Written Exam (FWE), and 5) Document Verification.'
    },
    {
      question: 'What is the syllabus for the Preliminary Written Test?',
      answer: 'The PWT covers General Studies, Arithmetic Ability, General Abilities, and English/Telugu/Urdu. The detailed syllabus is provided in the syllabus section above.'
    },
    {
      question: 'What are the physical standards for male and female candidates?',
      answer: 'For Male: Height - 167.6 cm (OC/BC), 164 cm (SC/ST); Chest - 86.3 cm (minimum 5 cm expansion). For Female: Height - 152.5 cm (OC/BC), 150 cm (SC/ST). Chest measurement is not applicable for female candidates.'
    },
    {
      question: 'How can I prepare for the Physical Efficiency Test?',
      answer: 'Regular practice is key. For running events, focus on endurance training. For long jump and high jump, work on explosive power and technique. Follow the training plan provided in the Physical Fitness Guide section.'
    }
  ];

  const physicalTestStandards = {
    male: {
      height: '167.6 cm (OC/BC), 164 cm (SC/ST)',
      chest: '86.3 cm (minimum 5 cm expansion)',
      race: '1600 meters in 7 minutes',
      longJump: '3.80 meters (3 chances)',
      highJump: '1.20 meters (3 chances)'
    },
    female: {
      height: '152.5 cm (OC/BC), 150 cm (SC/ST)',
      chest: 'Not applicable',
      race: '800 meters in 5 minutes',
      longJump: '2.75 meters (3 chances)',
      highJump: '0.90 meters (3 chances)'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-ts-gold rounded-full animate-bounce-gentle" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-ts-gold rounded-full animate-bounce-gentle" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 text-ts-gold mr-2" />
                <span className="text-sm font-medium">Trusted by 50,000+ Aspirants</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                Police Constable <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">Preparation Hub</span>
              </h1>
              <p className="mt-4 max-w-3xl text-lg md:text-xl text-blue-100">
                Your comprehensive resource for Telangana Police Constable exam preparation. 
                Access study plans, practice tests, and expert guidance to ace your exam.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#syllabus" 
                  className="bg-ts-gold hover:bg-yellow-500 text-ts-blue font-bold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center"
                >
                  <BookOpen className="mr-2 h-5 w-5" /> View Syllabus
                </a>
                <a 
                  href="#previous-year-papers" 
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center"
                >
                  <FileText className="mr-2 h-5 w-5" /> Previous Year Papers
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Exam Date', value: 'To be announced', icon: <Calendar className="h-5 w-5" /> },
                  { label: 'Total Vacancies', value: '17,400+', icon: <Users className="h-5 w-5" /> },
                  { label: 'Application Fee', value: '₹500-800', icon: <span className="text-lg">₹</span> },
                  { label: 'Salary', value: 'Up to ₹40,000', icon: <TrendingUp className="h-5 w-5" /> },
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="flex items-center text-blue-100 mb-1">
                      <span className="mr-2">{stat.icon}</span>
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8 overflow-x-auto">
          {[
            { id: 'syllabus', label: 'Detailed Syllabus', icon: <BookOpen className="h-5 w-5 mr-2" /> },
            { id: 'previous-year-papers', label: 'Previous Year Papers', icon: <FileText className="h-5 w-5 mr-2" /> },
            { id: 'study-material', label: 'Study Material', icon: <Book className="h-5 w-5 mr-2" /> },
            { id: 'physical-fitness', label: 'Physical Fitness', icon: <HeartPulse className="h-5 w-5 mr-2" /> },
            { id: 'faqs', label: 'FAQs', icon: <FileQuestion className="h-5 w-5 mr-2" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-t-lg mr-2 mb-2 transition-colors ${
                activeTab === tab.id
                  ? 'bg-ts-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 mb-12">
          {/* Detailed Syllabus */}
          <AnimatePresence mode="wait">
            {activeTab === 'syllabus' && (
              <motion.div
                key="syllabus"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                id="syllabus"
              >
                <h2 className="text-2xl font-bold text-ts-blue mb-6">Detailed Syllabus for TS Police Constable</h2>
                <p className="text-gray-600 mb-6">
                  The TS Police Constable examination consists of the following subjects. Click on each subject to view the detailed syllabus.
                </p>
                
                <div className="space-y-4">
                  {syllabus.map((subject, index) => (
                    <div key={subject.subject} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                        onClick={() => toggleSection(`syllabus-${index}`)}
                      >
                        <div className="flex items-center">
                          <span className="text-ts-blue mr-3">{subject.icon}</span>
                          <h3 className="text-lg font-semibold text-gray-800">{subject.subject}</h3>
                        </div>
                        {expandedSections[`syllabus-${index}`] ? 
                          <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        }
                      </button>
                      <AnimatePresence>
                        {expandedSections[`syllabus-${index}`] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-white border-t">
                              <ul className="list-disc pl-5 space-y-2">
                                {subject.topics.map((topic, i) => (
                                  <li key={i} className="text-gray-700">{topic}</li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Previous Year Papers */}
            {activeTab === 'previous-year-papers' && (
              <motion.div
                key="papers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                id="previous-year-papers"
              >
                <h2 className="text-2xl font-bold text-ts-blue mb-6">Previous Year Question Papers</h2>
                <p className="text-gray-600 mb-6">
                  Download previous years' question papers to understand the exam pattern and practice effectively.
                </p>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Download</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {previousYearPapers.map((paper, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paper.year}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                paper.type === 'Preliminary' ? 'bg-blue-100 text-blue-800' :
                                paper.type === 'Final' ? 'bg-green-100 text-green-800' :
                                paper.type === 'Answer Key' ? 'bg-purple-100 text-purple-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {paper.type}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a 
                                href={paper.downloadLink} 
                                className="text-ts-blue hover:text-blue-700 flex items-center justify-end"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // In a real app, this would trigger a download
                                  alert('Downloading ' + paper.title);
                                }}
                              >
                                <Download className="h-4 w-4 mr-1" /> Download
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-ts-blue mb-3">How to Use These Papers Effectively</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Take timed tests to simulate exam conditions</li>
                    <li>Analyze your mistakes and focus on weak areas</li>
                    <li>Note recurring topics and question patterns</li>
                    <li>Practice with answer sheets to improve speed and accuracy</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Study Material */}
            {activeTab === 'study-material' && (
              <motion.div
                key="study-material"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                id="study-material"
              >
                <h2 className="text-2xl font-bold text-ts-blue mb-6">Study Material & Resources</h2>
                <p className="text-gray-600 mb-6">
                  Access comprehensive study materials and resources to prepare for the TS Police Constable examination.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studyMaterials.map((material, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            {material.icon}
                          </div>
                          <h3 className="ml-3 text-lg font-semibold text-gray-900">{material.title}</h3>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {material.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <ChevronRight className="h-4 w-4 text-ts-gold mr-2 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={material.link}
                          className="inline-flex items-center text-sm font-medium text-ts-blue hover:text-blue-700 group"
                        >
                          View Resources
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-100">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">
                    <AlertTriangle className="h-5 w-5 inline-block mr-2 text-amber-500" />
                    Important Notice
                  </h3>
                  <p className="text-amber-700 mb-4">
                    The study materials are being continuously updated. Check back regularly for new resources and updates.
                  </p>
                  <div className="flex items-center text-sm text-amber-600">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Physical Fitness */}
            {activeTab === 'physical-fitness' && (
              <motion.div
                key="physical-fitness"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                id="physical-fitness"
              >
                <h2 className="text-2xl font-bold text-ts-blue mb-6">Physical Fitness Guide</h2>
                <p className="text-gray-600 mb-6">
                  Prepare for the Physical Efficiency Test (PET) with our comprehensive fitness guide and training plans.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Standards</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Users className="h-5 w-5 mr-2 text-ts-blue" />
                          For Male Candidates
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <Ruler className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Height:</span> {physicalTestStandards.male.height}</span>
                          </li>
                          <li className="flex items-start">
                            <Ruler className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Chest:</span> {physicalTestStandards.male.chest}</span>
                          </li>
                          <li className="flex items-start">
                            <Zap className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Race:</span> {physicalTestStandards.male.race}</span>
                          </li>
                          <li className="flex items-start">
                            <Zap className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Long Jump:</span> {physicalTestStandards.male.longJump}</span>
                          </li>
                          <li className="flex items-start">
                            <Zap className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">High Jump:</span> {physicalTestStandards.male.highJump}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Users className="h-5 w-5 mr-2 text-ts-blue" />
                          For Female Candidates
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <Ruler className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Height:</span> {physicalTestStandards.female.height}</span>
                          </li>
                          <li className="flex items-start">
                            <Ruler className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Chest:</span> {physicalTestStandards.female.chest}</span>
                          </li>
                          <li className="flex items-start">
                            <Zap className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Race:</span> {physicalTestStandards.female.race}</span>
                          </li>
                          <li className="flex items-start">
                            <Zap className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">Long Jump:</span> {physicalTestStandards.female.longJump}</span>
                          </li>
                          <li className="flex items-start">
                            <Zap className="h-5 w-5 mr-2 text-ts-gold flex-shrink-0" />
                            <span><span className="font-medium">High Jump:</span> {physicalTestStandards.female.highJump}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Training Plan</h3>
                    
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <div className="p-4 bg-gray-50 border-b">
                        <h4 className="font-medium text-gray-900">8-Week Training Schedule</h4>
                      </div>
                      <div className="divide-y">
                        {[
                          { week: 'Week 1-2', focus: 'Build Endurance', activities: 'Jogging, Stretching, Basic Strength' },
                          { week: 'Week 3-4', focus: 'Improve Speed', activities: 'Interval Training, Sprint Drills' },
                          { week: 'Week 5-6', focus: 'Strength & Power', activities: 'Plyometrics, Jump Training' },
                          { week: 'Week 7-8', focus: 'Test Simulation', activities: 'Mock Tests, Recovery' },
                        ].map((item, index) => (
                          <div key={index} className="p-4 hover:bg-gray-50">
                            <div className="font-medium text-gray-900">{item.week}</div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Focus:</span> {item.focus}
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Activities:</span> {item.activities}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Tips for Success
                      </h4>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Start training at least 3 months before the test</li>
                        <li>• Follow a balanced diet and stay hydrated</li>
                        <li>• Get adequate rest and recovery time</li>
                        <li>• Practice in conditions similar to the actual test</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FAQs */}
            {activeTab === 'faqs' && (
              <motion.div
                key="faqs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                id="faqs"
              >
                <h2 className="text-2xl font-bold text-ts-blue mb-6">Frequently Asked Questions</h2>
                <p className="text-gray-600 mb-8">
                  Find answers to common questions about the TS Police Constable recruitment process, 
                  eligibility criteria, and preparation strategies.
                </p>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-left"
                        onClick={() => toggleSection(`faq-${index}`)}
                      >
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        {expandedSections[`faq-${index}`] ? 
                          <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        }
                      </button>
                      <AnimatePresence>
                        {expandedSections[`faq-${index}`] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-gray-50 border-t">
                              <p className="text-gray-700">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-ts-blue mb-3">Still have questions?</h3>
                  <p className="text-gray-700 mb-4">
                    If you couldn't find the answer to your question, feel free to reach out to our support team.
                  </p>
                  <button className="bg-ts-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Contact Support
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Study Plan Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ts-blue mb-2">Structured Study Plans</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose a study plan that fits your timeline and start your preparation journey today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[30, 60, 90].map((days) => (
              <div 
                key={days}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{days}-Day Plan</h3>
                    <Clock className="h-8 w-8 text-blue-100" />
                  </div>
                  <p className="mt-2 text-blue-100">For {days} days of preparation</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {[
                      'Daily study schedule',
                      'Topic-wise breakdown',
                      'Practice questions',
                      'Weekly revisions',
                      'Mock tests',
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-green-500">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/study-plans/constable?plan=${days}days`}
                    className="block w-full bg-ts-blue text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View {days}-Day Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-ts-blue mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Exam Pattern & Syllabus</h3>
              <p className="text-gray-600 mb-4">
                Understand the detailed exam pattern, marking scheme, and complete syllabus for the Police Constable examination.
              </p>
              <button className="text-ts-blue hover:underline font-medium">View Details →</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Test Preparation</h3>
              <p className="text-gray-600 mb-4">
                Get guidance on physical efficiency tests, including running, long jump, and other physical requirements.
              </p>
              <button className="text-ts-blue hover:underline font-medium">Learn More →</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
