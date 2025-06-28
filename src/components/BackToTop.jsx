import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button 
      id="back-to-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 h-12 w-12 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center"
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default BackToTop;