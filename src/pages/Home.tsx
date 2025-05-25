
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Users, TrendingUp, Clock, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-ts-gold" />,
      title: "Live Mock Tests",
      description: "Practice with real exam pattern questions and get instant results",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-ts-gold" />,
      title: "Previous Year Papers",
      description: "Download original question papers with answer keys",
    },
    {
      icon: <Users className="w-8 h-8 text-ts-gold" />,
      title: "Live Doubt Clearing",
      description: "Get your doubts cleared instantly via AI chatbot",
    },
  ];

  const stats = [
    { number: "1,00,000+", label: "Students Helped" },
    { number: "50+", label: "Mock Tests" },
    { number: "25+", label: "Model Papers" },
    { number: "24/7", label: "Support Available" }
  ];

  const latestUpdates = [
    {
      title: "TS Constable Notification Released - Apply by June 30",
      date: "May 20, 2025",
      type: "Important",
      link: "#"
    },
    {
      title: "New 2025 Model Papers Added to Download Section",
      date: "May 18, 2025",
      type: "New Content",
      link: "/model-papers"
    },
    {
      title: "Free Live Doubt Session This Sunday at 6 PM",
      date: "May 15, 2025",
      type: "Live Event",
      link: "/ask-doubts"
    },
    {
      title: "SI Exam Pattern Changed - Check Updated Syllabus",
      date: "May 12, 2025",
      type: "Update",
      link: "#"
    }
  ];

  const getUpdateTypeColor = (type: string) => {
    const colors = {
      "Important": "bg-red-100 text-red-800 border-red-200",
      "New Content": "bg-green-100 text-green-800 border-green-200",
      "Live Event": "bg-purple-100 text-purple-800 border-purple-200",
      "Update": "bg-blue-100 text-blue-800 border-blue-200"
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section with Wave */}
      <section className="relative bg-gradient-to-br from-ts-blue via-blue-900 to-indigo-900 text-white py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-ts-gold rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-ts-gold rounded-full animate-bounce-gentle"></div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-6" variants={itemVariants}>
            <Sparkles className="w-6 h-6 text-ts-gold mr-2 animate-pulse" />
            <span className="bg-gradient-to-r from-ts-gold to-yellow-300 text-ts-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Trusted by 1,00,000+ Students
            </span>
            <Sparkles className="w-6 h-6 text-ts-gold ml-2 animate-pulse" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">TS Police Guru</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-3xl mb-6 text-blue-100 font-semibold"
            variants={itemVariants}
          >
            Helping <span className="text-ts-gold font-bold">1,00,000+ Students</span> Achieve Their Police Dreams
          </motion.p>

          <motion.p 
            className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Complete Preparation Platform for Telangana Police Constable, SI & CI Exams with Live Tests & Expert Guidance
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/mock-tests"
              className="inline-flex items-center bg-gradient-to-r from-ts-gold to-yellow-400 text-ts-blue px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-ts-gold transition-all duration-300 shadow-2xl hover:shadow-ts-gold/50 hover:scale-105 transform group"
            >
              Start Free Preparation Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-16">
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Stats Section with Glass Cards */}
      <section className="py-16 -mt-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 text-center group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-ts-blue mb-2 group-hover:text-ts-gold transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="py-16 px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-12 text-ts-blue"
            variants={itemVariants}
          >
            Everything You Need to <span className="text-ts-gold">Succeed</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 hover:scale-105 hover:rotate-1"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-gradient-to-br from-ts-gold to-yellow-300 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-ts-blue group-hover:text-ts-gold transition-colors">
                    {feature.title}
                  </h3>
                </motion.div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-8" variants={itemVariants}>
            <TrendingUp className="w-8 h-8 text-ts-gold mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-ts-blue">
              Latest Updates
            </h2>
          </motion.div>
          
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <motion.div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-ts-gold hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold mr-3 border ${getUpdateTypeColor(update.type)}`}>
                        {update.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {update.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-ts-blue mb-2 group-hover:text-ts-gold transition-colors">
                      {update.title}
                    </h3>
                  </div>
                  {update.link !== "#" && (
                    <Link 
                      to={update.link}
                      className="mt-3 md:mt-0 text-ts-gold hover:text-yellow-600 font-bold text-sm flex items-center group-hover:scale-110 transition-transform"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-ts-blue via-blue-900 to-indigo-900 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-ts-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full animate-bounce-gentle"></div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            Ready to Start Your <span className="text-ts-gold">Journey?</span>
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of aspirants who are preparing with TS Police Guru and achieve your dream job
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              to="/mock-tests"
              className="bg-white text-ts-blue px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Take Mock Test
            </Link>
            <Link
              to="/model-papers"
              className="bg-gradient-to-r from-ts-gold to-yellow-400 text-ts-blue px-8 py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-ts-gold transition-all duration-300 shadow-xl hover:shadow-ts-gold/50 hover:scale-105 transform"
            >
              Download Papers
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
