import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BirthdayWish from './BirthdayWish';
import BirthdayLetter from './BirthdayLetter';

const BirthdayCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCatClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(2);
      setIsTransitioning(false);
    }, 500);
  };

  const handleBackClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BirthdayWish onCatClick={handleCatClick} />
          </motion.div>
        )}
        
        {currentPage === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BirthdayLetter onBackClick={handleBackClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayCard;
