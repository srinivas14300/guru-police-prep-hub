
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "Study Plans", 
      path: "/study-plans",
      highlight: true // Flag to highlight this item
    },
    { name: "Mock Tests", path: "/mock-tests" },
    { name: "Model Papers", path: "/model-papers" },
    { name: "Ask Doubts", path: "/ask-doubts" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-ts-blue via-blue-900 to-ts-blue backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/logo.png" 
                alt="TS Police Guru" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  console.error('Failed to load logo:', e);
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
                onLoad={() => console.log('Logo loaded successfully')}
              />
              <div className="hidden md:block text-white ml-2">
                <span className="font-bold text-lg">TS Police Guru</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <motion.div 
                key={item.name}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-ts-gold text-ts-blue shadow-lg"
                      : "text-white hover:bg-white/10 hover:text-ts-gold"
                  } ${item.highlight ? 'font-bold' : ''}`}
                >
                  {item.name}
                  {item.highlight && !isActive(item.path) && (
                    <motion.span
                      className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-ts-gold"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  )}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute inset-0 bg-ts-gold rounded-lg -z-10"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-ts-gold focus:outline-none transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="md:hidden fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-ts-blue to-blue-900 shadow-xl"
          >
            <div className="pt-20 pb-6 px-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-ts-gold text-ts-blue shadow-lg transform scale-105"
                        : "text-white hover:bg-white/10 hover:text-ts-gold hover:translate-x-2"
                    } ${item.highlight ? 'font-bold' : ''}`}
                  >
                    {item.name}
                    {item.highlight && !isActive(item.path) && (
                      <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-ts-gold animate-pulse"></span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
