import * as React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className={`rounded-full border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent ${sizeClasses[size]} border-solid`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`rounded-full bg-blue-100 ${size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-3 w-3' : 'h-4 w-4'}`} />
      </div>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <LoadingSpinner size="lg" />
      <motion.p 
        className="mt-4 text-lg font-medium text-gray-700"
        initial={{ opacity: 0.5, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
