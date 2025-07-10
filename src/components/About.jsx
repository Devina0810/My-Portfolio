import p1 from "../assets/p1.jpg";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden about-section">
      {/* Simplified background with CSS animation */}
      <div className="absolute inset-0 about-bg-animation" />

      {/* Reduced geometric shapes for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced floating orbs from 8 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
              }, transparent)`,
              left: `${15 + i * 30}%`,
              top: `${20 + i * 25}%`,
            }}
            animate={{
              x: [0, 80 - i * 20],
              y: [0, 60 - i * 15],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Reduced particles from 25 to 6 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 4 === 0 ? '#60a5fa' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#ec4899' : '#06b6d4',
              left: `${10 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              x: [0, 60 - i * 10],
              y: [0, 50 - i * 8],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}

        {/* Reduced grid lines from 6 to 2 */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            style={{
              width: `${400 + i * 200}px`,
              left: `${20 + i * 40}%`,
              top: `${30 + i * 30}%`,
              transform: `rotate(${i * 90}deg)`
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="px-4 md:container md:mx-auto md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-16 border border-cyan-400/20 relative overflow-hidden about-card"
          >
            {/* Simplified card background */}
            <div className="absolute inset-0 card-bg-animation" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 relative"
            >
              <span className="about-title-gradient font-extrabold">About Me</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
              />
            </motion.h2>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2
                  }}
                  className="w-full max-w-xs sm:max-w-sm md:w-96 h-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50 relative group image-container"
                >
                  {/* Simplified rotating border */}
                  <div className="absolute inset-0 rotating-border-about rounded-2xl" />
                  
                  <motion.img 
                    src={p1}
                    alt="Working" 
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" 
                    whileHover={{ filter: "brightness(1.1)" }}
                  />
                  
                  {/* Simplified overlay */}
                  <div className="absolute inset-0 image-overlay-about" />

                  {/* Reduced particles around image from 8 to 3 */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899'
                      }}
                      animate={{
                        x: [0, Math.cos(i * 120 * Math.PI / 180) * 60],
                        y: [0, Math.sin(i * 120 * Math.PI / 180) * 60],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: i * 0.8
                      }}
                      style={{
                        left: "50%",
                        top: "50%"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="md:w-2/3 md:pl-12 px-4 text-justify"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300 who-i-am-title"
                >
                  Who I Am
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-100 mb-6 leading-relaxed font-medium about-description"
                >
                  I am currently in my third year of studying Computer Science at the Indian Institute of Information Technology (IIIT) Kota. I possess a strong enthusiasm for frontend development, with a particular focus on creating seamless and intuitive user experiences. My expertise includes a solid foundation in JavaScript, React, and contemporary CSS, which I utilize to develop elegant and responsive web applications. In addition to my programming skills, I have a keen interest in Data Structures and Algorithms, UI/UX design, and data science. I actively seek opportunities to explore and expand my knowledge in these areas to enhance my technical capabilities. As a committed reader and lifelong learner, I am dedicated to delivering digital solutions that are not only functional but also meaningful and centered around the user.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h4 className="text-xl md:text-2xl font-medium mb-6 text-purple-300 journey-title">
                    My Journey
                  </h4>
                  <div className="space-y-6">
                    {[
                      { year: "2022", text: "Completed 12th standard with PCM from Maharani Gayatri Devi Girls School" },
                      { year: "2023", text: "Started B.Tech in Computer Science at Indian Institute of Information Technology (IIIT) Kota" },
                      { year: "2027", text: "Expected graduation with B.Tech in Computer Science from Indian Institute of Information Technology (IIIT) Kota" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex-shrink-0 h-4 w-4 mt-1 bg-gradient-to-r from-cyan-400 to-purple-500 border-2 border-white rounded-full mr-4 shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/80 transition-all duration-300"
                        />
                        <p className="text-gray-100 font-medium journey-text">
                          <span className="font-bold text-cyan-300">{item.year}:</span> {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                  href="/DevinaYadav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 border-2 border-cyan-400 text-white bg-cyan-500/20 backdrop-blur-sm rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg font-semibold relative overflow-hidden group resume-button"
                >
                  <span className="relative z-10 drop-shadow-lg">Download Resume</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CSS Styles for better performance */}
      <style jsx>{`
        .about-section {
          transform: translateZ(0);
          will-change: transform;
        }

        .about-bg-animation {
          background: linear-gradient(45deg, #1e1b4b, #0f172a, #581c87);
          background-size: 400% 400%;
          animation: aboutBgShift 15s ease infinite;
        }

        @keyframes aboutBgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .about-card {
          transform: translateZ(0);
        }

        .card-bg-animation {
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          animation: cardBgPulse 12s ease-in-out infinite;
        }

        @keyframes cardBgPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .about-title-gradient {
          background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: titleGradient 6s ease infinite;
        }

        @keyframes titleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .rotating-border-about {
          background: conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #06b6d4);
          opacity: 0.2;
          animation: rotateBorder 25s linear infinite;
        }

        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .image-overlay-about {
          background: linear-gradient(to top, rgba(6, 182, 212, 0.2), transparent);
          animation: overlayPulse 6s ease-in-out infinite;
        }

        @keyframes overlayPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .image-container {
          transform: translateZ(0);
          will-change: transform;
        }

        .who-i-am-title {
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }

        .about-description {
          text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }

        .journey-title {
          text-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
        }

        .journey-text {
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }

        .resume-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .resume-button:hover::before {
          left: 100%;
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
    </section>
  );
};

export default About;
