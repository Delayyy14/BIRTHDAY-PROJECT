import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BirthdayWish = ({ onCatClick }) => {
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  
  const catImages = [
    '/images/cato/download (5).jpeg',
    '/images/cato/Florecita gatito 🌸🌸.jpeg',
    '/images/cato/_°•°emoji White cat°•°_.jpeg',
    '/images/cato/꒰ ִ ֺ ⊹ Credits @Basilleaf 🫧 ⊹ ֺ ִ ꒱.jpeg',
    '/images/cato/download (4).jpeg'
  ];

  const handleCatClick = () => {
    setCurrentCatIndex((prev) => (prev + 1) % catImages.length);
    setTimeout(() => {
      onCatClick();
    }, 300);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background decorations - more organic and scattered */}
      <div className="absolute top-16 left-8 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-32 right-12 w-32 h-32 bg-pink-300/25 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-24 left-12 w-36 h-36 bg-pink-100/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-8 w-28 h-28 bg-pink-200/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-1/2 left-4 w-24 h-24 bg-pink-300/15 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/3 right-4 w-20 h-20 bg-pink-400/20 rounded-full blur-lg animate-bounce"></div>

      {/* Main content - more organic layout */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative max-w-4xl w-full"
      >
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 font-serif">
              Happy Birthday!
            </h1>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </motion.div>

        {/* Name and age section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-pink-700 mb-8 font-serif">
          Clarista Aurene Nasywa Ardyatama
          </h2>
        </motion.div>

        {/* Cat image section with side photos */}
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="relative mb-12"
        >
          {/* Left side photo - Clarista-3 */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -15, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: -12, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotate: -10,
                y: -5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative group cursor-pointer"
            >
              <div className="w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
                <img 
                  src="/images/cato/Clarista-3.jpeg" 
                  alt="Clarista" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  onError={(e) => {
                    e.target.src = '/images/cato/download (5).jpeg';
                  }}
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-300 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-2 -right-2 w-2 h-2 bg-pink-200 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          {/* Right side photo - Clarista-4 */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 15, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 12, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotate: 10,
                y: -5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative group cursor-pointer"
            >
              <div className="w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
                <img 
                  src="/images/cato/Clarista-4.jpeg" 
                  alt="Clarista" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  onError={(e) => {
                    e.target.src = '/images/cato/download (5).jpeg';
                  }}
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-2 -left-2 w-2 h-2 bg-pink-200 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCatClick}
              className="cursor-pointer relative group"
            >
              {/* Cat image container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
                <img 
                  src={catImages[currentCatIndex]} 
                  alt="Cute Chibi Cat" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = catImages[0];
                  }}
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating decorative elements around cat */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-pink-300 rounded-full animate-bounce opacity-70"></div>
              <div className="absolute -top-2 -right-6 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-2 w-5 h-5 bg-pink-200 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-4 w-3 h-3 bg-pink-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile version - photos below cat */}
        <div className="flex justify-center space-x-6 lg:hidden mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative group cursor-pointer"
          >
            <motion.div
              whileHover={{ 
                scale: 1.03, 
                rotate: -6,
                y: -3,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className="w-24 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white/50 relative">
                <img 
                  src="/images/cato/Clarista-3.jpeg" 
                  alt="Clarista" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/images/cato/download (5).jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-60"></div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="relative group cursor-pointer"
          >
            <motion.div
              whileHover={{ 
                scale: 1.03, 
                rotate: 6,
                y: -3,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className="w-24 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white/50 relative">
                <img 
                  src="/images/cato/Clarista-4.jpeg" 
                  alt="Clarista" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/images/cato/download (5).jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Instruction text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-pink-600 font-medium bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-pink-200/50 inline-block">
            Klik kucing lucu di atas untuk melihat kejutan!
          </p>
        </motion.div>

        {/* Additional floating elements */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-16 right-12 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-20 left-16 w-4 h-4 bg-pink-200 rounded-full animate-ping opacity-70" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-12 right-8 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-1/2 left-6 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/3 right-6 w-2 h-2 bg-pink-200 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
      </motion.div>
    </div>
  );
};

export default BirthdayWish;
