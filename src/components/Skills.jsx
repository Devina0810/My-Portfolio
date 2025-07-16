import React, { useState, useCallback } from 'react';
import {
  FaCode, FaProjectDiagram, FaTools, FaHeart, FaTimes,
  FaJava, FaPython, FaReact, FaGit, FaGithub
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiMongodb,
  SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiTailwindcss,
  SiBootstrap, SiPostman, SiAppwrite
} from 'react-icons/si';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------------
   1.  STATIC DATA  (defined once, outside the component)
------------------------------------------------------------------ */
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: <FaCode className="text-2xl text-cyan-400" />,
    frontContent: 'Programming languages I know',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Python',      icon: <FaPython className="text-blue-500" /> },
      { name: 'Java',        icon: <FaJava className="text-red-500" /> },
      { name: 'C',           icon: <SiC className="text-blue-600" /> },
      { name: 'C++',         icon: <SiCplusplus className="text-blue-700" /> },
      { name: 'JavaScript',  icon: <SiJavascript className="text-yellow-500" /> },
      { name: 'SQL',         icon: <span className="text-gray-300 font-bold">SQL</span> },
      { name: 'HTML',        icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS',         icon: <SiCss3 className="text-blue-500" /> }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: <FaProjectDiagram className="text-2xl text-yellow-400" />,
    frontContent: 'Frameworks and libraries I work with',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React',       icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS',icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Bootstrap',   icon: <SiBootstrap className="text-purple-500" /> },
      { name: 'Node.js',     icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'Express.js',  icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB',     icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL',       icon: <SiMysql className="text-blue-500" /> }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: <FaTools className="text-2xl text-green-400" />,
    frontContent: 'Tools I use daily',
    color: 'from-pink-500 to-orange-500',
    skills: [
      { name: 'Git',       icon: <FaGit className="text-orange-500" /> },
      { name: 'GitHub',    icon: <FaGithub className="text-gray-300" /> },
      { name: 'VS Code',   icon: <span className="text-blue-500 font-bold">VS</span> },
      { name: 'Eclipse',   icon: <span className="text-purple-500 font-bold">EC</span> },
      { name: 'Postman',   icon: <SiPostman className="text-orange-600" /> },
      { name: 'Firebase',  icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Appwrite',  icon: <SiAppwrite className="text-pink-500" /> }
    ]
  },
  {
    id: 'interests',
    title: 'Interests',
    icon: <FaHeart className="text-2xl text-orange-400" />,
    frontContent: 'My professional interests',
    color: 'from-green-500 to-cyan-500',
    skills: [
      { name: 'DSA (100+ problems)',   icon: <span className="text-green-500 font-bold">DSA</span> },
      { name: 'Web Development',       icon: <span className="text-blue-500 font-bold">Web</span> },
      { name: 'OOP',                   icon: <span className="text-purple-500 font-bold">OOP</span> },
      { name: 'UI / UX',               icon: <span className="text-pink-500 font-bold">UI</span> }
    ]
  }
];

/* ------------------------------------------------------------------
   2.  COMPONENT
------------------------------------------------------------------ */
function Skills() {
  const [activeCard, setActiveCard] = useState(null);
  const toggleCard = useCallback(id => {
    setActiveCard(prev => (prev === id ? null : id));
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section id="skills" className="relative py-20 overflow-hidden skills-section">
        {/* animated gradient behind everything */}
        <div className="absolute inset-0 skills-bg-animation" />

        {/* orbs + particles implemented with pure CSS */}
        <SkillsDecorations />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* ----------------------- content ----------------------- */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10"
        >
          {/* heading */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
          >
            <span className="skills-title-gradient font-extrabold">My Skills</span>
            <m.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
            />
          </m.h2>

          {/* cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((cat, idx) => (
              <SkillCard
                key={cat.id}
                data={cat}
                idx={idx}
                isActive={activeCard === cat.id}
                toggle={() => toggleCard(cat.id)}
                close={() => setActiveCard(null)}
              />
            ))}
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
export default React.memo(Skills);

/* ------------------------------------------------------------------
   3.  HELPER COMPONENTS
------------------------------------------------------------------ */
function SkillsDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3 ORBS */}
      <span className="skills-orb orb-s1" />
      <span className="skills-orb orb-s2" />
      <span className="skills-orb orb-s3" />

      {/* 6 PARTICLES */}
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className={`skills-particle part-s${i}`} />
      ))}
    </div>
  );
}

function SkillCard({ data, idx, isActive, toggle, close }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden h-72 cursor-pointer group transition-all duration-500 skill-card ${
        isActive
          ? 'ring-2 ring-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)]'
          : 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
      } card-border-${idx}`}
      onClick={toggle}
    >
      {/* FRONT */}
      <AnimatePresence mode="wait">
        {!isActive && (
          <m.div
            key="front"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col items-center justify-center p-6"
          >
            <m.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ duration: 0.3 }}
              className={`w-20 h-20 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
            >
              {data.icon}
            </m.div>
            <h3 className="text-xl font-semibold text-white mb-3 skill-card-title">{data.title}</h3>
            <p className="text-gray-200 text-center text-sm leading-relaxed skill-card-description">{data.frontContent}</p>
            <m.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 text-xs text-cyan-300 opacity-70"
            >
              Click to explore
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* BACK */}
      <AnimatePresence>
        {isActive && (
          <m.div
            key="back"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 p-6"
          >
            <m.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl font-semibold text-white mb-4 skill-card-title">
              {data.title}
            </m.h3>

            <m.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 overflow-y-auto h-48 pr-2 custom-scrollbar"
            >
              {data.skills.map((s, i) => (
                <m.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="flex items-center text-gray-200 p-2 rounded-lg hover:bg-white/10 group transition-all duration-300"
                >
                  <m.span whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }} className="mr-3 text-lg">
                    {s.icon}
                  </m.span>
                  <span className="font-medium">{s.name}</span>
                </m.li>
              ))}
            </m.ul>

            <m.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 right-4 p-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
              onClick={e => {
                e.stopPropagation();
                close();
              }}
            >
              <FaTimes className="text-lg" />
            </m.button>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}
