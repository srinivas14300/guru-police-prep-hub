import { motion } from 'framer-motion';
import { RoleLayout } from '../../components/study-plans/RoleLayout';
import { Calendar, BookOpen, Clock, Award, FileText, BarChart2, Book, CheckCircle, ArrowRight } from 'lucide-react';

const ConstablePage = () => {
  const studyPlans = [
    {
      id: '30-day',
      title: '30-Day Intensive Plan',
      duration: '30 days',
      difficulty: 'Intensive',
      description: 'Fast-track preparation covering all key topics for quick revision',
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: '60-day',
      title: '60-Day Standard Plan',
      duration: '60 days',
      difficulty: 'Standard',
      description: 'Comprehensive coverage of all topics with practice tests',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      id: '90-day',
      title: '90-Day Complete Plan',
      duration: '90 days',
      difficulty: 'Thorough',
      description: 'In-depth preparation with full syllabus coverage and mock tests',
      icon: <Award className="w-6 h-6 text-blue-600" />,
      gradient: 'from-blue-700 to-blue-900',
    },
  ];

  const examHighlights = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: 'Syllabus',
      description: 'General Studies, Arithmetic, General Science, History of India, Indian Constitution, and more.',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Exam Pattern',
      description: '200 MCQs, 3 hours duration, Negative marking of 0.25 marks per wrong answer.',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: 'Eligibility',
      description: '10+2 pass, 18-22 years (General), 18-25 years (SC/ST), 18-28 years (Ex-servicemen).',
    },
  ];

  const additionalResources = [
    {
      title: 'Previous Year Papers',
      description: 'Download and practice with previous year question papers',
      icon: <FileText className="h-5 w-5" />,
      link: '/model-papers',
    },
    {
      title: 'Mock Tests',
      description: 'Take full-length mock tests to assess your preparation',
      icon: <BarChart2 className="h-5 w-5" />,
      link: '/mock-tests',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <RoleLayout
      title="Police Constable"
      description="Comprehensive study plans and resources to help you prepare for the Telangana Police Constable examination."
      color="text-blue-600"
      bgGradient="from-blue-500 to-blue-700"
    >
      <motion.div 
        className="space-y-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Exam Overview */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-ts-blue mb-8">Exam Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examHighlights.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white shadow-md flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ts-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Study Plans */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-ts-blue">Choose Your Study Plan</h2>
            <span className="text-sm text-ts-blue/70">Select based on your preparation time</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyPlans.map((plan, index) => (
              <motion.div 
                key={plan.id} 
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ts-blue mb-3">{plan.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{plan.duration}</span>
                    <span className="mx-2">•</span>
                    <span className="font-medium text-blue-600">{plan.difficulty}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <button className="w-full group flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    <span>Start {plan.title.split(' ')[0]}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-ts-blue mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div 
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                whileHover={{ x: 5 }}
                variants={itemVariants}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ts-blue mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <a 
                      href={resource.link} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:underline"
                    >
                      Explore {resource.title.toLowerCase()}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-ts-blue mb-3">Need personalized guidance?</h3>
                <p className="text-gray-600 mb-6">Get a customized study plan based on your strengths and weaknesses.</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center group">
                  Get Personalized Plan
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="hidden md:block md:w-1/3">
                <div className="bg-blue-200/30 rounded-full p-8 w-48 h-48 flex items-center justify-center mx-auto">
                  <Book className="w-20 h-20 text-blue-600 opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Recommended Books & Tests */}
      <motion.div 
        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mt-12"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recommended Books */}
          <div>
            <h3 className="text-xl font-bold text-ts-blue mb-4">Recommended Books</h3>
            <ul className="space-y-3">
              <li className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-blue-600 mr-2">•</span>
                <span>Telangana Police Constable Guide by Arihant Publications</span>
              </li>
              <li className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-blue-600 mr-2">•</span>
                <span>General Knowledge by Lucent's</span>
              </li>
              <li className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-blue-600 mr-2">•</span>
                <span>Quantitative Aptitude by R.S. Aggarwal</span>
              </li>
            </ul>
          </div>

          {/* Practice Tests */}
          <div>
            <h3 className="text-xl font-bold text-ts-blue mb-4">Practice Tests</h3>
            <ul className="space-y-3">
              <li className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-blue-600 mr-2">•</span>
                <span>Full-Length Mock Tests</span>
              </li>
              <li className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-blue-600 mr-2">•</span>
                <span>Section-wise Practice Tests</span>
              </li>
              <li className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-blue-600 mr-2">•</span>
                <span>Previous Year Question Papers</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </RoleLayout>
  );
};

export default ConstablePage;
