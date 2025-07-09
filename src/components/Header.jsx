import { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ darkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      // Check if page is scrolled
      setScrolled(window.scrollY > 50);
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 header-container ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-cyan-500/20 border-b border-cyan-500/20' 
          : 'bg-black/60 backdrop-blur-md'
      }`}
    >
      {/* Simplified background particles - reduced from 15 to 4 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899',
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              x: [0, 20 - i * 5],
              y: [0, 15 - i * 3],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* Simplified Logo */}
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: 15
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="text-2xl font-bold relative group cursor-pointer"
        >
          <span className="logo-gradient font-extrabold">DY</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((section, index) => (
            <motion.a
              key={section}
              href={`#${section}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -2
              }}
              className={`relative text-gray-200 hover:text-cyan-400 transition-all duration-300 font-medium group nav-link ${
                activeSection === section ? 'text-cyan-400' : ''
              }`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              
              {/* Simplified underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: activeSection === section ? "100%" : 0 
                }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden focus:outline-none p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-xl text-cyan-400" />
                ) : (
                  <FaBars className="text-xl text-cyan-400" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="py-6 px-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((section, index) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      x: 10
                    }}
                    className={`relative text-gray-200 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg group ${
                      activeSection === section ? 'text-cyan-400 bg-cyan-500/10' : 'hover:bg-cyan-500/5'
                    }`}
                    onClick={() => handleNavClick(section)}
                  >
                    <span className="relative z-10">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    
                    {/* Active indicator */}
                    {activeSection === section && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r-full"
                        initial={false}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Styles for better performance */}
      <style jsx>{`
        .header-container {
          transform: translateZ(0);
          will-change: transform;
        }

        .logo-gradient {
          background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logoGradient 4s ease infinite;
        }

        @keyframes logoGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nav-link {
          position: relative;
        }

        .nav-link:hover {
          text-shadow: 0 0 15px currentColor;
        }

        /* Optimize for mobile */
        @media (max-width: 768px) {
          .header-container {
            backdrop-filter: blur(10px);
          }
        }

        /* Reduce motion for performance */
        @media (prefers-reduced-motion: reduce) {
          .logo-gradient {
            animation: none;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
