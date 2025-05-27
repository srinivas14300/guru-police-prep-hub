import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Clock, FileText, Award, Users, BarChart2 } from 'lucide-react';

export default function SIHub() {
  const features = [
    {
      title: 'Structured Study Plans',
      description: 'Comprehensive study plans designed specifically for SI exam preparation.',
      icon: <Calendar className="h-8 w-8 text-ts-gold" />,
      link: '/study-plans/si'
    },
    {
      title: 'Syllabus & Exam Pattern',
      description: 'Detailed syllabus and exam pattern for the Sub-Inspector examination.',
      icon: <BookOpen className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
    {
      title: 'Previous Year Papers',
      description: 'Access previous years\' question papers with solutions.',
      icon: <FileText className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
    {
      title: 'Mock Tests & Analysis',
      description: 'Full-length mock tests with detailed performance analysis.',
      icon: <BarChart2 className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              Sub-Inspector <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">Aspirant Zone</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-blue-100">
              Your dedicated platform for comprehensive Sub-Inspector exam preparation. Access study materials, 
              practice tests, and expert guidance to excel in your SI examination.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="inline-flex items-center text-sm font-medium text-ts-blue hover:text-blue-700 group"
              >
                Explore
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Study Plan Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ts-blue mb-2">SI Exam Preparation Plans</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose a preparation plan that suits your timeline and start your journey to becoming a Sub-Inspector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Foundation',
                duration: '3-4 Months',
                description: 'For beginners starting their preparation',
                features: [
                  'Basic concept building',
                  'Subject-wise study material',
                  'Weekly practice tests',
                  'Doubt clearing sessions',
                  'Prelims focused'
                ]
              },
              {
                title: 'Intensive',
                duration: '2-3 Months',
                description: 'For candidates with basic preparation',
                features: [
                  'Advanced concepts',
                  'Full-length mock tests',
                  'Previous year papers',
                  'Performance analysis',
                  'Mains focused'
                ]
              },
              {
                title: 'Crash Course',
                duration: '1 Month',
                description: 'For last-minute revision',
                features: [
                  'Quick revision notes',
                  'Important topics coverage',
                  'Speed test series',
                  'Exam strategy sessions',
                  'Current affairs update'
                ]
              }
            ].map((plan, index) => (
              <div 
                key={plan.title}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <Clock className="h-8 w-8 text-blue-100" />
                  </div>
                  <p className="mt-2 text-blue-100">{plan.duration} Plan</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic mb-4">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-green-500">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/study-plans/si?plan=${plan.title.toLowerCase()}`}
                    className="block w-full bg-ts-blue text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View {plan.title} Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Exam Information */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-ts-blue mb-6">SI Exam Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exam Pattern</h3>
              <div className="space-y-4">
                {[
                  { name: 'Preliminary Exam', desc: 'Objective type, 200 marks, 2 hours' },
                  { name: 'Physical Test', desc: 'Physical Measurement Test (PMT) & Physical Efficiency Test (PET)' },
                  { name: 'Mains Exam', desc: 'Objective type, 200 marks, 3 hours' },
                  { name: 'Interview', desc: '50 marks' },
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Syllabus Highlights</h3>
              <div className="space-y-4">
                {[
                  'General Studies',
                  'Arithmetic Ability',
                  'General Abilities',
                  'History & Culture of India',
                  'Indian Constitution',
                  'Current Events of National & International Importance',
                  'Telangana Movement & Statehood',
                  'General Science & Technology'
                ].map((subject, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-ts-gold mr-3"></div>
                    <span className="text-gray-700">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Affairs</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest current affairs, important events, and news relevant to the SI examination.
              </p>
              <button className="text-ts-blue hover:underline font-medium">Explore Current Affairs →</button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview Preparation</h3>
              <p className="text-gray-600 mb-4">
                Get expert tips, common interview questions, and preparation strategies for the SI interview round.
              </p>
              <button className="text-ts-blue hover:underline font-medium">Prepare for Interview →</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
