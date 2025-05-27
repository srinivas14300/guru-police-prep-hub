import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

// Animation variants
export const fadeIn = (direction = 'up', delay = 0.2) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay,
      duration: 0.6,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay = 0.2) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const slideIn = (direction: string, type = 'tween', delay = 0.2, duration = 0.65) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Floating shape component
type FloatingShapeProps = {
  type: 'circle' | 'square';
  size: number;
  color: string;
  top: number;
  left: number;
  delay: number;
  duration?: number;
  rotate?: number;
  className?: string;
};

export const FloatingShape = ({
  type,
  size,
  color,
  top,
  left,
  delay,
  duration = 15,
  rotate = 0,
  className = '',
}: FloatingShapeProps) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, duration * 1000);
    
    return () => clearInterval(interval);
  }, [duration]);
  
  const shapeStyle: any = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
    transform: `rotate(${rotate}deg) ${isVisible ? 'scale(1)' : 'scale(1.5)'}`,
    backgroundColor: color,
    opacity: 0.1,
    position: 'absolute',
    borderRadius: type === 'circle' ? '50%' : '10%',
    transition: 'all 15s ease-in-out',
    filter: 'blur(20px)',
  };
  
  return <div style={shapeStyle} className={`pointer-events-none ${className}`} />;
};

export const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <FloatingShape type="circle" size={400} color="#F9C80E" top={-10} left={-10} delay={0} duration={25} />
    <FloatingShape type="square" size={300} color="#4CC9F0" top={20} left={20} delay={5} duration={30} rotate={30} />
    <FloatingShape type="circle" size={250} color="#7209B7" top={10} left={80} delay={10} duration={35} />
    <FloatingShape type="square" size={200} color="#F72585" top={70} left={70} delay={15} duration={40} rotate={60} />
    <FloatingShape type="circle" size={350} color="#4361EE" top={-20} left={-20} delay={20} duration={45} />
  </div>
);

export const GradientText = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-ts-gold via-amber-300 to-yellow-500 ${className}`}>
    {children}
  </span>
);

export const GlassCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-ts-gold/30 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const AnimatedButton = ({ 
  children, 
  to, 
  variant = 'primary',
  className = '' 
}: { 
  children: ReactNode; 
  to: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-block ${className}`}
    >
      {isPrimary && (
        <div className="absolute -inset-1 bg-gradient-to-r from-ts-gold to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      )}
      <Link
        to={to}
        className={`relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-full transition-all duration-300 ${
          isPrimary 
            ? 'bg-gradient-to-r from-ts-gold to-amber-400 text-ts-blue hover:shadow-lg hover:shadow-amber-500/30' 
            : 'bg-transparent border-2 border-white/20 text-white hover:border-ts-gold/50 hover:text-ts-gold'
        }`}
      >
        <span className="relative z-10 flex items-center">
          {children}
          <ChevronRight className={`ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform ${
            isPrimary ? 'text-ts-blue' : 'text-current'
          }`} />
        </span>
      </Link>
    </motion.div>
  );
};

export const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '' 
}: { 
  title: string; 
  subtitle?: string; 
  className?: string;
}) => (
  <div className={`text-center mb-12 ${className}`}>
    {subtitle && (
      <motion.span 
        className="inline-block px-4 py-1.5 text-sm font-medium text-ts-gold bg-ts-gold/10 rounded-full mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {title}
    </motion.h2>
    <motion.div 
      className="w-16 h-1 bg-gradient-to-r from-ts-gold to-amber-500 mx-auto rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: 64 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </div>
);
