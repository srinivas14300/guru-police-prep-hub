
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
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
              className="bg-ts-gold text-ts-blue p-2 rounded-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-6 h-6 font-bold" />
            </motion.div>
            <div className="text-white">
              <span className="font-bold text-xl">TS Police</span>
              <span className="text-ts-gold font-bold text-xl ml-1">Guru</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-ts-gold text-ts-blue shadow-lg"
                    : "text-white hover:bg-white/10 hover:text-ts-gold"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute inset-0 bg-ts-gold rounded-lg -z-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
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
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-ts-gold text-ts-blue shadow-lg transform scale-105"
                        : "text-white hover:bg-white/10 hover:text-ts-gold hover:translate-x-2"
                    }`}
                  >
                    {item.name}
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
