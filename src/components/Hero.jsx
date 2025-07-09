import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import p3 from "../assets/p3.jpg";

const roles = ["Frontend Developer", "DSA Enthusiast", "Student"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Cycle roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
      {/* Simplified background with CSS animation */}
      <div className="absolute inset-0 hero-bg-animation" />

      {/* Reduced geometric shapes for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced floating circles from 6 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              background: `linear-gradient(45deg, #60a5fa, #a855f7, #ec4899)`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: [0, 50 - i * 20],
              y: [0, 30 - i * 15],
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Reduced particles from 30 to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#ec4899',
              left: `${10 + i * 10}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              x: [0, 50 - i * 10],
              y: [0, 40 - i * 8],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Reduced lines from 8 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
            style={{
              width: `${300 + i * 100}px`,
              left: `${10 + i * 20}%`,
              top: `${30 + i * 20}%`,
              transform: `rotate(${i * 45}deg)`
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-8 pb-20 flex flex-col md:flex-row items-center md:pr-12 relative z-10"
      >
        <div className="md:w-1/2 flex flex-col space-y-8">
          <motion.p
            variants={itemVariants}
            className="text-2xl font-semibold text-cyan-300 drop-shadow-lg"
          >
            <span className="hello-glow">Hello, I'm</span>
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="name-gradient">Devina Yadav</span>
          </motion.h1>

          {/* Enhanced role animation with better visibility */}
          <motion.div
            variants={itemVariants}
            className="relative h-12 md:h-16"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[index]}
                initial={{ opacity: 0, rotateX: -90, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: 90, y: -20 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="absolute text-2xl md:text-4xl font-medium"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block overflow-hidden whitespace-nowrap role-gradient font-bold"
                >
                  {roles[index]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-cyan-400 ml-1 shadow-lg shadow-cyan-400/50"
                />
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-100 leading-relaxed font-medium drop-shadow-lg description-text"
          >
            I transform ideas into seamless digital journeys, blending pixel-perfect design with elegant, maintainable code. Always eager to collaborate on projects that challenge and inspire.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                y: -4,
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-white bg-cyan-500/20 backdrop-blur-sm rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg font-semibold cta-button"
            >
              <span className="relative z-10 drop-shadow-lg">See my Projects</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex space-x-6 pt-4"
          >
            {[
              { icon: FaGithub, href: "https://github.com/Devina0810", color: "text-gray-100 hover:text-purple-300" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/devina-yadav-516965295/", color: "text-gray-100 hover:text-blue-300" },
              { icon: FaEnvelope, href: "mailto:devinayadav8@gmail.com", color: "text-gray-100 hover:text-pink-300" }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                variants={socialIconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 15
                }}
                className={`${color} transition-all duration-300 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg`}
              >
                <Icon className="text-2xl drop-shadow-lg" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: 2
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.8)] group image-container"
          >
            {/* Simplified rotating border */}
            <div className="absolute inset-0 rotating-border rounded-full" />
            
            <motion.img
              src={p3}
              alt="Devina Yadav"
              className="w-full h-full object-cover relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="absolute inset-0 image-overlay" />
            
            {/* Reduced particles around image from 12 to 4 */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899'
                }}
                animate={{
                  x: [0, Math.cos(i * 90 * Math.PI / 180) * 80],
                  y: [0, Math.sin(i * 90 * Math.PI / 180) * 80],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                style={{
                  left: "50%",
                  top: "50%"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Add CSS styles */}
      <style jsx>{`
        .hero-gradient {
          background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #533483);
          background-size: 400% 400%;
        }

        .hero-bg-animation {
          background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #533483);
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hello-glow {
          animation: textGlow 3s ease-in-out infinite;
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px #06b6d4; }
          50% { text-shadow: 0 0 20px #06b6d4; }
        }

        .name-gradient {
          background: linear-gradient(45deg, #ffffff, #06b6d4, #a855f7);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nameGradient 4s ease infinite;
        }

        @keyframes nameGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .role-gradient {
          background: linear-gradient(45deg, #a855f7, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
        }

        .description-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .rotating-border {
          background: conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #06b6d4);
          opacity: 0.3;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .image-overlay {
          background: linear-gradient(to top, rgba(6, 182, 212, 0.2), transparent);
          animation: overlayPulse 4s ease-in-out infinite;
        }

        @keyframes overlayPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .image-container {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;
