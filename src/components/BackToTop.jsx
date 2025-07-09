import { useState, useEffect } from 'react';
import { FaArrowUp, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      
      if (scrolled > 300) {
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
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Floating particles around button */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899',
              }}
              animate={{
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: "50%",
                top: "50%"
              }}
            />
          ))}

          {/* Progress ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #06b6d4 ${scrollProgress * 3.6}deg, transparent ${scrollProgress * 3.6}deg)`
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Main button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.8)",
              rotate: 360
            }}
            whileTap={{ scale: 0.9 }}
            className="relative h-14 w-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 group overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full"
            />

            {/* Pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
            />

            {/* Icon container */}
            <motion.div
              animate={{
                y: [-2, 2, -2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                <FaArrowUp className="text-lg" />
              </motion.div>
            </motion.div>

            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium border border-cyan-400/30 pointer-events-none"
          >
            Back to Top
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </motion.div>

          {/* Rocket trail effect (appears on click) */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animate={{
              height: [0, 40, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <div className="w-1 bg-gradient-to-t from-cyan-400 to-transparent rounded-full"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
