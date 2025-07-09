import { useState } from 'react';
import { FaCode, FaProjectDiagram, FaTools, FaHeart, FaTimes } from 'react-icons/fa';
import { FaJava, FaPython, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiFirebase } from 'react-icons/si';
import { SiTailwindcss, SiBootstrap, SiPostman, SiAppwrite } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <FaCode className="text-2xl text-cyan-400" />,
      frontContent: 'Programming languages I know',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'C', icon: <SiC className="text-blue-600" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'SQL', icon: <span className="text-gray-300 font-bold">SQL</span> },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: <FaProjectDiagram className="text-2xl text-yellow-400" />,
      frontContent: 'Frameworks and libraries I work with',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> }
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <FaTools className="text-2xl text-green-400" />,
      frontContent: 'Tools I use daily',
      color: 'from-pink-500 to-orange-500',
      skills: [
        { name: 'Git', icon: <FaGit className="text-orange-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
        { name: 'VS Code', icon: <span className="text-blue-500 font-bold">VS</span> },
        { name: 'Eclipse', icon: <span className="text-purple-500 font-bold">EC</span> },
        { name: 'Postman', icon: <SiPostman className="text-orange-600" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
        { name: 'Appwrite', icon: <SiAppwrite className="text-pink-500" /> }
      ]
    },
    {
      id: 'interests',
      title: 'Interests',
      icon: <FaHeart className="text-2xl text-orange-400" />,
      frontContent: 'My professional interests',
      color: 'from-green-500 to-cyan-500',
      skills: [
        { name: 'Data Structures & Algorithms (100+ problems)', icon: <span className="text-green-500 font-bold">DSA</span> },
        { name: 'Web Development', icon: <span className="text-blue-500 font-bold">Web</span> },
        { name: 'Object-Oriented Programming', icon: <span className="text-purple-500 font-bold">OOP</span> },
        { name: 'UI/UX Design', icon: <span className="text-pink-500 font-bold">UI</span> }
      ]
    }
  ];

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden skills-section">
      {/* Simplified background with CSS animation */}
      <div className="absolute inset-0 skills-bg-animation" />

      {/* Reduced background elements for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced floating orbs from 10 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899'
              }, transparent)`,
              left: `${20 + i * 30}%`,
              top: `${15 + i * 25}%`,
            }}
            animate={{
              x: [0, 60 - i * 15],
              y: [0, 40 - i * 10],
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 16 + i * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Reduced particles from 30 to 6 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#ec4899' : '#10b981',
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              x: [0, 40 - i * 6],
              y: [0, 30 - i * 5],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6
            }}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="skills-title-gradient font-extrabold">My Skills</span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden h-72 cursor-pointer group transition-all duration-500 skill-card ${
                activeCard === category.id 
                  ? 'ring-2 ring-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)]' 
                  : 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
              }`}
              onClick={() => toggleCard(category.id)}
            >
              {/* Simplified border animation */}
              <div className={`absolute inset-0 opacity-20 card-border-${index}`} />

              {/* Front Content */}
              <AnimatePresence mode="wait">
                {activeCard !== category.id && (
                  <motion.div
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col items-center justify-center p-6 relative z-10"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-semibold text-white mb-3 skill-card-title"
                    >
                      {category.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-200 text-center text-sm leading-relaxed skill-card-description"
                    >
                      {category.frontContent}
                    </motion.p>

                    {/* Click indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-4 text-xs text-cyan-300 opacity-70"
                    >
                      Click to explore
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Back Content */}
              <AnimatePresence>
                {activeCard === category.id && (
                  <motion.div
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 p-6 relative z-10"
                  >
                    <motion.h3
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-semibold text-white mb-4 skill-card-title"
                    >
                      {category.title}
                    </motion.h3>
                    
                    <motion.ul
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3 overflow-y-auto h-48 pr-2 custom-scrollbar"
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + skillIndex * 0.1 }}
                          whileHover={{ 
                            x: 5,
                            scale: 1.05
                          }}
                          className="flex items-center text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                        >
                          <motion.span
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ duration: 0.3 }}
                            className="mr-3 text-lg"
                          >
                            {skill.icon}
                          </motion.span>
                          <span className="font-medium">{skill.name}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 90
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-4 right-4 p-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard(null);
                      }}
                    >
                      <FaTimes className="text-lg" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CSS Styles for better performance */}
      <style jsx>{`
        .skills-section {
          transform: translateZ(0);
          will-change: transform;
        }

        .skills-bg-animation {
          background: linear-gradient(45deg, #1e1b4b, #0f172a, #581c87);
          background-size: 400% 400%;
          animation: skillsBgShift 18s ease infinite;
        }

        @keyframes skillsBgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .skills-title-gradient {
          background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: skillsTitleGradient 6s ease infinite;
        }

        @keyframes skillsTitleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .skill-card {
          transform: translateZ(0);
          will-change: transform;
        }

        .skill-card-title {
          text-shadow: 0 0 15px rgba(255,255,255,0.3);
        }

        .skill-card-description {
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }

        .card-border-0 {
          background: linear-gradient(45deg, transparent, #06b6d4, transparent);
          animation: cardBorder0 8s ease infinite;
        }

        .card-border-1 {
          background: linear-gradient(45deg, transparent, #a855f7, transparent);
          animation: cardBorder1 8s ease infinite 2s;
        }

        .card-border-2 {
          background: linear-gradient(45deg, transparent, #ec4899, transparent);
          animation: cardBorder2 8s ease infinite 4s;
        }

        .card-border-3 {
          background: linear-gradient(45deg, transparent, #10b981, transparent);
          animation: cardBorder3 8s ease infinite 6s;
        }

        @keyframes cardBorder0 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }

        @keyframes cardBorder1 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-180deg); }
        }

        @keyframes cardBorder2 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }

        @keyframes cardBorder3 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-180deg); }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #a855f7);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #9333ea);
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

export default Skills;
