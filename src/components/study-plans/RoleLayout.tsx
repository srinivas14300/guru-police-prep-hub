import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoleLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  color?: string;
  bgGradient?: string;
}

export const RoleLayout = ({
  title,
  description,
  children,
  color = 'text-ts-blue',
  bgGradient = 'from-blue-600 to-blue-800',
}: RoleLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header with Gradient */}
      <div className={`relative bg-gradient-to-r ${bgGradient} text-white overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-ts-gold rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-ts-gold rounded-full animate-bounce-gentle"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            to="/study-plans"
            className="group inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 mb-8"
          >
            <motion.div
              animate={{ x: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mr-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.div>
            <span className="group-hover:underline">Back to all roles</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">Study Plans</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-blue-100">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-16">
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="#F8FAFC"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
