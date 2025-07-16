import React, { useState, useEffect, useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import p3 from '../assets/p3.jpg';

/* ------- data that never changes -------- */
const roles = ['Full-Stack Developer', 'DSA Enthusiast', 'Student'];

const socials = [
  { icon: FaGithub,   href: 'https://github.com/Devina0810',                       color: 'text-gray-100 hover:text-purple-300' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devina-yadav-516965295/', color: 'text-gray-100 hover:text-blue-300'   },
  { icon: FaEnvelope, href: 'mailto:devinayadav8@gmail.com',                       color: 'text-gray-100 hover:text-pink-300'   }
];

/* ---------------------------------------- */
function Hero() {
  const [index, setIndex] = useState(0);

  /* cycle the role text every 3 s */
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(id);
  }, []);

  /* framer-motion variants, memoised so they’re created only once */
  const { containerVariants, itemVariants, socialIconVariants, imageVariants } = useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: .3, delayChildren: .2 } }
      },
      itemVariants: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: .8, ease: 'easeOut' } }
      },
      socialIconVariants: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 10 } }
      },
      imageVariants: {
        hidden: { opacity: 0, scale: .8, rotate: -10 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut', delay: .5 } }
      }
    }),
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
        {/* animated colour wash behind everything */}
        <div className="absolute inset-0 hero-bg-animation" />

        {/* decorative shapes – pure CSS, no React re-renders */}
        <Decorations />

        {/* dim overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/40" />

        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 pt-8 pb-20 flex flex-col md:flex-row items-center md:pr-12 relative z-10"
        >
          {/* ---------- left column ---------- */}
          <div className="md:w-1/2 flex flex-col space-y-8">
            <m.p variants={itemVariants} className="text-2xl font-semibold text-cyan-300 drop-shadow-lg">
              <span className="hello-glow">Hello, I'm</span>
            </m.p>

            <m.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="name-gradient">Devina Yadav</span>
            </m.h1>

            <m.div variants={itemVariants} className="relative h-12 md:h-16">
              <AnimatePresence mode="wait">
                <m.h2
                  key={roles[index]}
                  initial={{ opacity: 0, rotateX: -90, y: 20 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: 90, y: -20 }}
                  transition={{ duration: .6, ease: 'easeOut' }}
                  className="absolute text-2xl md:text-4xl font-medium"
                >
                  <m.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: .8, delay: .2 }}
                    className="inline-block overflow-hidden whitespace-nowrap role-gradient font-bold"
                  >
                    {roles[index]}
                  </m.span>
                  <m.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-1 h-8 bg-cyan-400 ml-1 shadow-lg shadow-cyan-400/50"
                  />
                </m.h2>
              </AnimatePresence>
            </m.div>

            <m.p variants={itemVariants} className="text-lg text-gray-100 leading-relaxed font-medium drop-shadow-lg description-text">
              I transform ideas into seamless digital journeys, blending pixel-perfect design with elegant, maintainable code. Always eager to collaborate on projects that challenge and inspire.
            </m.p>

            <m.div variants={itemVariants} className="flex space-x-4">
              <m.a
                href="#projects"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: .95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-white bg-cyan-500/20 backdrop-blur-sm rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg font-semibold cta-button"
              >
                <span className="relative z-10 drop-shadow-lg">See my Projects</span>
              </m.a>
            </m.div>

            {/* social icons */}
            <m.div variants={containerVariants} className="flex space-x-6 pt-4">
              {socials.map(({ icon: Icon, href, color }, i) => (
                <m.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className={`${color} transition-all duration-300 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg`}
                >
                  <Icon className="text-2xl drop-shadow-lg" />
                </m.a>
              ))}
            </m.div>
          </div>

          {/* ---------- right column ---------- */}
          <m.div variants={imageVariants} className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <m.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.8)] group image-container"
            >
              <div className="absolute inset-0 rotating-border rounded-full" />
              <img src={p3} alt="Devina Yadav" className="w-full h-full object-cover relative z-10" loading="lazy" />
              <div className="absolute inset-0 image-overlay" />
            </m.div>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}

export default React.memo(Hero);

/* ------------------------------------------------------------------ */
/* decorative background elements – zero JS work once mounted         */
function Decorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* floating circles */}
      <span className="dec-circle circle-1" />
      <span className="dec-circle circle-2" />
      <span className="dec-circle circle-3" />

      {/* popping particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className={`dec-particle part-${i}`} />
      ))}

      {/* scanning lines */}
      <span className="dec-line line-1" />
      <span className="dec-line line-2" />
      <span className="dec-line line-3" />
    </div>
  );
}
