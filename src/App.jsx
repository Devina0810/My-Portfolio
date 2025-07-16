import React, { useState, useEffect, useCallback } from 'react';
import {
  LazyMotion, domAnimation, m, AnimatePresence, useScroll, useSpring
} from 'framer-motion';

import Header   from './components/Header';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import BackToTop from './components/BackToTop';

/* -------------------------------------------------------------
   1.  THE APP
------------------------------------------------------------- */
function App() {
  /* ---------------- theme ---------------- */
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark'
                 : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  /* ---------------- first-load splash ---------------- */
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(id);
  }, []);

  /* ---------------- scroll progress bar ---------------- */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  /* ---------------- toggle theme ---------------- */
  const toggleTheme = useCallback(() => setDarkMode(d => !d), []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-gray-900 text-gray-100 font-sans antialiased transition-colors duration-300 relative overflow-x-hidden">
        {/* decorative CSS particles */}
        <GlobalParticles />

        {/* --------------- LOADING --------------- */}
        <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

        {/* --------------- MAIN --------------- */}
        <AnimatePresence>
          {!loading && (
            <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
              <Section delay={0.2}><Header darkMode={darkMode} toggleTheme={toggleTheme} /></Section>
              <Section delay={0.3}><Hero /></Section>
              <Section><About /></Section>
              <Section><Skills /></Section>
              <Section><Projects /></Section>
              <Section><Contact /></Section>
              <Section><Footer /></Section>
              <BackToTop />
            </m.main>
          )}
        </AnimatePresence>

        {/* scroll progress bar */}
        <m.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform-gpu z-50 origin-left" />

        {/* page-transition veil (opens on first load) */}
        <m.div initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.8, delay: 2 }} className="fixed inset-0 bg-gradient-to-b from-cyan-500 to-purple-500 z-40 origin-top" />
      </div>
    </LazyMotion>
  );
}

export default App;

/* -------------------------------------------------------------
   2.  SMALL HELPERS
------------------------------------------------------------- */
function Section({ children, delay = 0 }) {
  return (
    <m.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </m.section>
  );
}

/* ---- Decorative particles turned into pure CSS ---- */
function GlobalParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <span className="global-particle gp-0" />
      <span className="global-particle gp-1" />
      <span className="global-particle gp-2" />
      <span className="global-particle gp-3" />
      <span className="global-particle gp-4" />
      <span className="global-particle gp-5" />
      <span className="global-particle gp-6" />
      <span className="global-particle gp-7" />
      <span className="global-particle gp-8" />
      <span className="global-particle gp-9" />
    </div>
  );
}

/* ---- Loading splash (unchanged visuals) ---- */
function LoadingScreen() {
  return (
    <m.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="absolute inset-0 loading-particles" />

      <div className="text-center relative z-10">
        <m.div animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
          <m.span animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent">
            DY
          </m.span>
        </m.div>

        <m.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-3xl font-bold text-white mb-4">
          Devina Yadav
        </m.h1>
        <m.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-cyan-300 mb-8">
          Loading Portfolio…
        </m.p>

        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <m.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.8, ease: 'easeInOut' }} className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>
      </div>
    </m.div>
  );
}
