import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Award, Sparkles, ArrowRight } from "lucide-react";

const StudyPlans = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = [
    {
      id: "constable",
      title: "Police Constable",
      description: "Start your journey as a Police Constable in Telangana Police",
      icon: <Shield className="w-8 h-8 text-ts-gold" />,
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "from-blue-600 to-blue-800",
    },
    {
      id: "si",
      title: "Sub-Inspector (SI)",
      description: "Aim for the Sub-Inspector position with comprehensive guides",
      icon: <Users className="w-8 h-8 text-ts-gold" />,
      gradient: "from-purple-500 to-purple-700",
      hoverGradient: "from-purple-600 to-purple-800",
    },
    {
      id: "ci",
      title: "Circle Inspector (CI)",
      description: "Learn about the path to becoming a Circle Inspector",
      icon: <Award className="w-8 h-8 text-ts-gold" />,
      gradient: "from-amber-500 to-amber-700",
      hoverGradient: "from-amber-600 to-amber-800",
    },
  ];

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

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // Navigate to the corresponding hub page
    navigate(`/hubs/${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ts-blue via-blue-900 to-indigo-900 text-white py-16 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-ts-gold rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-ts-gold rounded-full animate-bounce-gentle"></div>
        </div>

        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-6" variants={itemVariants}>
            <Sparkles className="w-6 h-6 text-ts-gold mr-2 animate-pulse" />
            <span className="bg-gradient-to-r from-ts-gold to-yellow-300 text-ts-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Choose Your Career Path
            </span>
            <Sparkles className="w-6 h-6 text-ts-gold ml-2 animate-pulse" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">
              Study Plans
            </span> for Your Dream Role
          </motion.h1>

          <motion.p 
            className="text-xl text-blue-100 font-medium max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Select your desired position and get access to tailored study materials, practice tests, and expert guidance
          </motion.p>
        </motion.div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-16">
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-16 px-4 -mt-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onClick={() => handleRoleSelect(role.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${role.gradient}`}></div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-ts-blue/10 to-ts-blue/30">
                    {role.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-ts-blue mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{role.description}</p>
                  <div className="inline-flex items-center text-ts-blue font-semibold group">
                    <span>Explore {role.title}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-600">
              Not sure which role to choose?{' '}
              <button className="text-ts-blue hover:text-ts-gold font-semibold transition-colors">
                Compare all roles
              </button>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default StudyPlans;
