import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Users, Sparkles, Shield, UserCheck, UserCog, ChevronRight } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Floating shape component props
type FloatingShapeProps = {
  type: 'circle' | 'square';
  size: number;
  color: string;
  top: number;
  left: number;
  delay: number;
  duration?: number;
  rotate?: number;
};

const FloatingShape = ({ 
  type, 
  size, 
  color, 
  top, 
  left, 
  delay, 
  duration = 15, 
  rotate = 0 
}: FloatingShapeProps) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, duration * 1000);
    
    return () => clearInterval(interval);
  }, [duration]);
  
  const shapeStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
    transform: `rotate(${rotate}deg) ${isVisible ? 'scale(1)' : 'scale(1.5)'}`,
    backgroundColor: color,
    opacity: 0.1,
    position: 'absolute' as const,
    borderRadius: type === 'circle' ? '50%' : '10%',
    transition: 'all 15s ease-in-out',
    filter: 'blur(20px)'
  };
  
  return <div style={shapeStyle} className="pointer-events-none" />;
};

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Role Selector Component
const RoleSelector = () => {
  const roles = [
    {
      id: 'constable',
      title: 'Police Constable',
      icon: <Shield className="w-8 h-8 text-ts-gold" />,
      gradient: 'from-blue-500 to-blue-700',
      description: 'Start your journey as a Police Constable'
    },
    {
      id: 'si',
      title: 'Sub-Inspector (SI)',
      icon: <UserCheck className="w-8 h-8 text-ts-gold" />,
      gradient: 'from-purple-500 to-purple-700',
      description: 'Aim for the Sub-Inspector position'
    },
    {
      id: 'ci',
      title: 'Circle Inspector (CI)',
      icon: <UserCog className="w-8 h-8 text-ts-gold" />,
      gradient: 'from-amber-500 to-amber-700',
      description: 'Advance your career to Circle Inspector'
    },
  ];

  return (
    <div className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape type="circle" size={300} color="#F9C80E" top={10} left={10} delay={0} duration={20} />
        <FloatingShape type="square" size={250} color="#4CC9F0" top={70} left={80} delay={2} duration={25} rotate={45} />
        <FloatingShape type="circle" size={200} color="#7209B7" top={30} left={80} delay={1} duration={30} />
      </div>
      
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Which role are you <span className="text-ts-gold">preparing</span> for?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              className={`relative overflow-hidden bg-white/5 backdrop-blur-md rounded-3xl p-8 text-white cursor-pointer border border-white/10 hover:border-ts-gold/30 transition-all duration-300`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.2 + (index * 0.1),
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/10 rounded-full -mr-16 -mt-16"></div>
              <Link to={`/hubs/${role.id}`} className="block h-full relative z-10">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-gradient-to-br from-ts-gold to-amber-400 rounded-xl mr-4 shadow-lg">
                    {role.icon}
                  </div>
                  <h3 className="text-2xl font-bold mt-1">{role.title}</h3>
                </div>
                <p className="text-blue-100/80 mb-6 text-sm leading-relaxed">
                  {role.description}
                </p>
                <div className="flex items-center text-sm font-medium text-ts-gold group">
                  <span>Explore {role.title} Hub</span>
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 text-white overflow-hidden">
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 opacity-80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900/80 to-slate-900" />
    </div>
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
        <FloatingShape type="circle" size={400} color="#F9C80E" top={-10} left={-10} delay={0} duration={25} />
        <FloatingShape type="square" size={300} color="#4CC9F0" top={20} left={20} delay={5} duration={30} rotate={30} />
        <FloatingShape type="circle" size={250} color="#7209B7" top={10} left={80} delay={10} duration={35} />
        <FloatingShape type="square" size={200} color="#F72585" top={70} left={70} delay={15} duration={40} rotate={60} />
        <FloatingShape type="circle" size={350} color="#4361EE" top={-20} left={-20} delay={20} duration={45} />
    </div>
    
    <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 relative z-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles className="w-5 h-5 text-ts-gold mr-2" />
          <span className="text-sm font-medium">Trusted by 1,00,000+ Aspirants</span>
        </motion.div>
        
        <motion.div className="relative inline-block">
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-ts-gold/20 via-ts-blue/20 to-ts-blue/30 rounded-lg blur-lg opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-300"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.8 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 4,
              ease: 'easeInOut'
            }}
          />
          <motion.h1 
            className="relative text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Path to <span className="bg-clip-text text-transparent bg-gradient-to-r from-ts-gold via-amber-300 to-yellow-500">TS Police</span> Success
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Comprehensive preparation resources for Telangana Police recruitment exams
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-ts-gold to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <Link
              to="/study-plans"
              className="relative bg-gradient-to-r from-ts-gold to-amber-400 text-ts-blue font-bold py-4 px-10 rounded-full transition-all duration-300 inline-flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-amber-500/30"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link
              to="/mock-tests"
              className="relative bg-transparent hover:bg-white/5 text-white font-bold py-4 px-10 border-2 border-white/20 rounded-full transition-all duration-300 inline-flex items-center justify-center group-hover:border-ts-gold/50 group-hover:text-ts-gold"
            >
              <span className="relative z-10 flex items-center">
                Try Free Test
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Role Selector Component */}
      <RoleSelector />
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = () => (
  <section className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-ts-blue/5 via-white to-ts-gold/5">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.8))] opacity-10"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center"
      >
        <div className="relative inline-block mb-12">
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-ts-gold/20 via-ts-blue/20 to-ts-blue/30 rounded-lg blur-lg opacity-80"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.8 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 4,
              ease: 'easeInOut'
            }}
          />
          <motion.h2 
            className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
            variants={itemVariants}
          >
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-ts-gold via-amber-300 to-yellow-500">TS Police Guru</span>?
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="w-12 h-12 text-ts-gold mx-auto mb-6 p-2 bg-ts-blue/10 rounded-full" />,
              title: 'Comprehensive Study Material',
              description: 'Access to a vast collection of study materials, practice tests, and previous year papers.'
            },
            {
              icon: <Brain className="w-12 h-12 text-ts-gold mx-auto mb-6 p-2 bg-ts-blue/10 rounded-full" />,
              title: 'AI-Powered Learning',
              description: 'Get personalized recommendations and doubt clarification through our AI chatbot.'
            },
            {
              icon: <Users className="w-12 h-12 text-ts-gold mx-auto mb-6 p-2 bg-ts-blue/10 rounded-full" />,
              title: 'Bilingual Support',
              description: 'Study in both Telugu and English for better understanding and preparation.'
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-ts-gold/50"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-ts-gold/10 to-ts-blue/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-ts-blue to-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-ts-gold/30 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = () => (
  <section className="py-16 bg-gradient-to-r from-ts-blue to-indigo-900 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 text-blue-100">Join thousands of aspirants preparing for TS Police exams with our comprehensive platform.</p>
        <Link
          to="/signup"
          className="inline-block bg-ts-gold hover:bg-yellow-500 text-ts-blue font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Get Started for Free
          <ArrowRight className="inline-block ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen bg-light-blue">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Home;
