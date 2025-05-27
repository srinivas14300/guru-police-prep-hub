import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Briefcase, Award, Users, BarChart2, FileText } from 'lucide-react';

export default function CIHub() {
  const features = [
    {
      title: 'Promotion Guide',
      description: 'Step-by-step guide to understanding the promotion process to Circle Inspector.',
      icon: <Briefcase className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
    {
      title: 'Departmental Knowledge',
      description: 'Essential knowledge about police procedures, laws, and regulations.',
      icon: <BookOpen className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
    {
      title: 'Leadership Skills',
      description: 'Develop leadership and management skills required for the CI role.',
      icon: <Users className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
    {
      title: 'Exam Preparation',
      description: 'Resources and strategies for departmental promotion exams.',
      icon: <Award className="h-8 w-8 text-ts-gold" />,
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              Circle Inspector <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">Career Path</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-blue-100">
              Your dedicated resource for career advancement to Circle Inspector in Telangana Police. 
              Access promotion guides, departmental knowledge, and leadership development resources.
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

        {/* Promotion Path Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ts-blue mb-2">Path to Circle Inspector</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understand the promotion process and requirements to become a Circle Inspector in Telangana Police.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-blue-400"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  title: 'Eligibility',
                  content: 'Minimum 5 years of service as a Sub-Inspector',
                  icon: <FileText className="h-6 w-6 text-white" />
                },
                {
                  title: 'Departmental Exam',
                  content: 'Clear the departmental promotion examination',
                  icon: <Award className="h-6 w-6 text-white" />
                },
                {
                  title: 'Seniority & Vacancies',
                  content: 'Based on seniority and available vacancies',
                  icon: <BarChart2 className="h-6 w-6 text-white" />
                },
                {
                  title: 'Interview',
                  content: 'Performance in the departmental interview',
                  icon: <Users className="h-6 w-6 text-white" />
                },
                {
                  title: 'Training',
                  content: 'Undergo mandatory training program',
                  icon: <BookOpen className="h-6 w-6 text-white" />
                }
              ].map((item, index) => (
                <div key={index} className="relative md:flex items-center">
                  {/* For even items, show on right, for odd on left */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="hidden md:block w-1/2"></div>
                      <div className="hidden md:block absolute left-1/2 -ml-4">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-16">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-16">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 -ml-4">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Responsibilities */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-ts-blue mb-6">Key Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational</h3>
              <ul className="space-y-3">
                {[
                  'Maintain law and order in the circle',
                  'Supervise police station operations',
                  'Investigate serious crimes',
                  'Implement departmental policies',
                  'Coordinate with other law enforcement agencies'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Administrative</h3>
              <ul className="space-y-3">
                {[
                  'Personnel management',
                  'Resource allocation',
                  'Budget management',
                  'Performance evaluation of staff',
                  'Report preparation and submission'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
          <h2 className="text-2xl font-bold text-ts-blue mb-6">Professional Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership Training</h3>
              <p className="text-gray-600 mb-4">
                Enhance your leadership and management skills with specialized training programs designed for police officers.
              </p>
              <button className="text-ts-blue hover:underline font-medium">Explore Training →</button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Updates</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest legal changes, court rulings, and amendments relevant to law enforcement.
              </p>
              <button className="text-ts-blue hover:underline font-medium">View Updates →</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
