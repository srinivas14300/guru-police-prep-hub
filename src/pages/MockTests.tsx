import { Clock, FileText, Users, ExternalLink, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";

const MockTests = () => {
  const mockTests = [
    {
      id: 1,
      title: "General Knowledge Test – 01",
      description: "Current affairs and general awareness for TS Police",
      questions: 50,
      duration: "60 mins",
      attempts: 1250,
      subject: "GK",
      link: "https://forms.gle/1FAIpQLSe8GJxQ4r2xJ4mQ9Z5VvN8H3L7P6K",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Reasoning Test – 01",
      description: "Logical reasoning and analytical ability test",
      questions: 40,
      duration: "45 mins",
      attempts: 980,
      subject: "Reasoning",
      link: "https://quizizz.com/join/quiz/5f8b1c2a3e4d5f6g7h8i9j0k/start",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Current Affairs April 2025",
      description: "Latest current affairs and recent developments",
      questions: 30,
      duration: "40 mins",
      attempts: 850,
      subject: "Current Affairs",
      link: "https://testbook.com/police-constable-mock-test",
      difficulty: "Medium"
    },
    {
      id: 4,
      title: "Mathematics & Numerical Ability",
      description: "Basic mathematics and numerical problem solving",
      questions: 35,
      duration: "50 mins",
      attempts: 750,
      subject: "Mathematics",
      link: "https://gradeup.co/police-exams/mock-tests",
      difficulty: "Hard"
    },
    {
      id: 5,
      title: "Telugu Language Test",
      description: "Telugu grammar, literature and comprehension",
      questions: 25,
      duration: "30 mins",
      attempts: 920,
      subject: "Telugu",
      link: "https://www.fresherslive.com/telangana-police-constable-mock-test",
      difficulty: "Easy"
    },
    {
      id: 6,
      title: "Full Length Mock Test – 01",
      description: "Complete simulation of actual TS Police exam",
      questions: 100,
      duration: "120 mins",
      attempts: 1500,
      subject: "Full Test",
      link: "https://www.oliveboard.in/police-exams/mock-tests/",
      difficulty: "Hard"
    },
  ];

  const getSubjectColor = (subject: string) => {
    const colors = {
      "GK": "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200",
      "Reasoning": "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200",
      "Current Affairs": "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border-purple-200",
      "Mathematics": "bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border-red-200",
      "Telugu": "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-yellow-200",
      "Full Test": "bg-gradient-to-r from-ts-gold to-yellow-200 text-ts-blue border-ts-gold"
    };
    return colors[subject] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      "Easy": "text-green-600",
      "Medium": "text-yellow-600",
      "Hard": "text-red-600"
    };
    return colors[difficulty] || "text-gray-600";
  };

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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
            <Trophy className="w-8 h-8 text-ts-gold mr-3" />
            <h1 className="text-3xl md:text-5xl font-bold text-ts-blue">
              Live Mock Tests
            </h1>
            <Zap className="w-8 h-8 text-ts-gold ml-3" />
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
            variants={itemVariants}
          >
            Take real mock tests designed for Telangana Police exams. All tests are timed and provide instant results.
          </motion.p>
          
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 inline-block shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-green-800 font-bold text-lg">✅ All tests are live and ready to attempt!</p>
          </motion.div>
        </motion.div>

        {/* Mock Tests Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {mockTests.map((test) => (
            <motion.div
              key={test.id}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 border border-white/30 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-ts-blue/5 to-ts-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getSubjectColor(test.subject)}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {test.subject}
                  </motion.span>
                  <span className={`text-sm font-bold ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ts-blue mb-3 group-hover:text-ts-gold transition-colors">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{test.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg">
                    <FileText className="w-4 h-4 mr-1 text-ts-blue" />
                    <span className="font-medium">{test.questions} Questions</span>
                  </div>
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
                    <Clock className="w-4 h-4 mr-1 text-green-600" />
                    <span className="font-medium">{test.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Users className="w-4 h-4 mr-1 text-yellow-600" />
                    <span className="font-medium">{test.attempts} attempts</span>
                  </div>
                </div>

                <motion.a
                  href={test.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-ts-blue to-blue-800 hover:from-blue-800 hover:to-ts-blue text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl group-hover:animate-pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Test Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Test Instructions */}
        <motion.div 
          className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-ts-blue mb-6 text-center">
            Test Instructions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-ts-blue mb-3 flex items-center">
                <span className="w-6 h-6 bg-ts-gold text-ts-blue rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                Before Starting
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ts-gold rounded-full mr-2"></span>
                  Ensure stable internet connection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ts-gold rounded-full mr-2"></span>
                  Keep a pen and paper ready
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ts-gold rounded-full mr-2"></span>
                  Find a quiet environment
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-ts-blue mb-3 flex items-center">
                <span className="w-6 h-6 bg-ts-gold text-ts-blue rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                During Test
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ts-gold rounded-full mr-2"></span>
                  Timer will start automatically
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ts-gold rounded-full mr-2"></span>
                  Submit before time expires
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ts-gold rounded-full mr-2"></span>
                  Results available instantly
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MockTests;
