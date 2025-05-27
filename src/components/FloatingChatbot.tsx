
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingChatbot = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
    >
      <Link
        to="/ask-doubts"
        className="relative group"
      >
        <motion.div
          className="bg-gradient-to-r from-ts-gold to-yellow-400 hover:from-yellow-400 hover:to-ts-gold text-ts-blue p-4 rounded-full shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle size={24} />
          
          {/* Pulsing indicator */}
          <motion.div 
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Tooltip */}
          <motion.div 
            className="absolute bottom-16 right-0 bg-white text-ts-blue px-4 py-2 rounded-lg shadow-xl text-sm font-bold whitespace-nowrap border border-ts-gold"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Ask Your Doubts Now!
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white border-r border-b border-ts-gold transform rotate-45" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default FloatingChatbot;
