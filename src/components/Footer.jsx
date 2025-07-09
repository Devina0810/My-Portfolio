import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden footer-section">
      {/* Simplified background with CSS animation */}
      <div className="absolute inset-0 footer-bg-animation" />

      {/* Reduced background elements for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced floating orbs from 8 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${100 + i * 40}px`,
              height: `${100 + i * 40}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899'
              }, transparent)`,
              left: `${20 + i * 30}%`,
              top: `${25 + i * 20}%`,
            }}
            animate={{
              x: [0, 60 - i * 15],
              y: [0, 40 - i * 10],
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Reduced particles from 20 to 5 */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#ec4899' : '#10b981',
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              x: [0, 35 - i * 7],
              y: [0, 25 - i * 5],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}

        {/* Reduced lines from 4 to 2 */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              width: `${300 + i * 150}px`,
              left: `${25 + i * 35}%`,
              top: `${30 + i * 30}%`,
              transform: `rotate(${i * 90}deg)`
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Logo/Brand section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.h3
            className="text-3xl font-bold mb-2 footer-name-gradient"
          >
            Devina Yadav
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 font-medium footer-subtitle"
          >
            Frontend Developer & DSA Enthusiast
          </motion.p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          {[
            { icon: <FaGithub />, url: "https://github.com/Devina0810", color: "hover:bg-gray-700" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/devina-yadav-516965295/", color: "hover:bg-blue-600" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/devinayadav_8/", color: "hover:bg-pink-600" }
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.url}
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: 15
              }}
              whileTap={{ scale: 0.9 }}
              className={`h-14 w-14 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-300 mx-3 transition-all duration-300 ${social.color} hover:text-white hover:border-white/50`}
            >
              <span className="text-xl">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <ul className="flex flex-wrap justify-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href={`#${item}`}
                  whileHover={{ 
                    scale: 1.1
                  }}
                  className="text-gray-200 hover:text-cyan-300 transition-all duration-300 font-medium capitalize relative group footer-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-8"
        />

        {/* Copyright and Made with Love */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.p 
            className="text-sm text-gray-300 font-medium flex items-center justify-center footer-made-with"
          >
            Made with 
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ["#ec4899", "#ef4444", "#ec4899"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mx-2"
            >
              <FaHeart />
            </motion.span>
            and 
            <motion.span
              animate={{ 
                rotate: [0, 360],
                color: ["#06b6d4", "#a855f7", "#06b6d4"]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="mx-2"
            >
              <FaCode />
            </motion.span>
            by Devina Yadav
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-400 footer-copyright"
          >
            &copy; {new Date().getFullYear()} Devina Yadav. All rights reserved.
          </motion.p>

          {/* Back to top button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ 
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 hover:text-white transition-all duration-300 backdrop-blur-sm font-medium back-to-top-btn"
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </motion.div>

      {/* CSS Styles for better performance */}
      <style jsx>{`
        .footer-section {
          transform: translateZ(0);
          will-change: transform;
        }

        .footer-bg-animation {
          background: linear-gradient(45deg, #1e1b4b, #0f172a, #581c87);
          background-size: 400% 400%;
          animation: footerBgShift 14s ease infinite;
        }

        @keyframes footerBgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .footer-name-gradient {
          background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: footerNameGradient 5s ease infinite;
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }

        @keyframes footerNameGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .footer-subtitle {
          text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }

        .footer-nav-link {
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }

        .footer-nav-link:hover {
          text-shadow: 0 0 15px currentColor;
        }

        .footer-made-with {
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }

        .footer-copyright {
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }

        .back-to-top-btn:hover {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }

        /* Reduce motion for performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
