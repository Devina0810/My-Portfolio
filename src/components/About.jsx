import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import p1 from '../assets/p1.jpg';

/* --------------------------------------------- */
function About() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="relative py-20 overflow-hidden about-section">
        {/* colour-shift backdrop */}
        <div className="absolute inset-0 about-bg-animation" />

        {/* decorative orbs / particles / lines (pure-CSS) */}
        <AboutDecorations />

        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ---------------- main card ---------------- */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="px-4 md:container md:mx-auto md:px-6">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-16 border border-cyan-400/20 relative overflow-hidden about-card"
            >
              {/* subtle radial pulse */}
              <div className="absolute inset-0 card-bg-animation" />

              {/* ----------- title ----------- */}
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-8 relative"
              >
                <span className="about-title-gradient font-extrabold">About&nbsp;Me</span>
                <m.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
                />
              </m.h2>

              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* ------------- image ------------- */}
                <m.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
                >
                  <m.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="w-full max-w-xs sm:max-w-sm md:w-96 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50 relative group image-container"
                  >
                    <div className="absolute inset-0 rotating-border-about rounded-2xl" />
                    <img src={p1} alt="Working" className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 image-overlay-about" />

                    {/* tiny orbiting dots – CSS only */}
                    <span className="img-particle ip-1" />
                    <span className="img-particle ip-2" />
                    <span className="img-particle ip-3" />
                  </m.div>
                </m.div>

                {/* ------------- text ------------- */}
                <m.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="md:w-2/3 md:pl-12 px-4 text-justify"
                >
                  <m.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300 who-i-am-title"
                  >
                    Who&nbsp;I&nbsp;Am
                  </m.h3>

                  <m.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-100 mb-6 leading-relaxed font-medium about-description"
                  >
                    I am currently in my third year of studying Computer Science at the Indian Institute of
                    Information Technology&nbsp;(IIIT) Kota …
                  </m.p>

                  {/* ----------- timeline ----------- */}
                  <Timeline />

                  {/* ----------- resume button ------- */}
                  <m.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    viewport={{ once: true }}
                    href="/DevinaYadav_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 border-2 border-cyan-400 text-white bg-cyan-500/20 backdrop-blur-sm rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg font-semibold relative overflow-hidden resume-button"
                  >
                    <span className="relative z-10 drop-shadow-lg">Download Resume</span>
                  </m.a>
                </m.div>
              </div>
            </m.div>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
export default React.memo(About);

/* ----------------- tiny helper components ----------------- */
function AboutDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* orbs */}
      <span className="about-orb orb-1" />
      <span className="about-orb orb-2" />
      <span className="about-orb orb-3" />

      {/* particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className={`about-particle part-${i}`} />
      ))}

      {/* grid / scan lines */}
      <span className="about-line line-a" />
      <span className="about-line line-b" />
    </div>
  );
}

function Timeline() {
  const items = [
    { year: '2022', text: 'Completed 12th standard with PCM from Maharani Gayatri Devi Girls School' },
    { year: '2023', text: 'Started B.Tech in Computer Science at Indian Institute of Information Technology (IIIT) Kota' },
    { year: '2027', text: 'Expected graduation with B.Tech in Computer Science from IIIT Kota' }
  ];
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h4 className="text-xl md:text-2xl font-medium mb-6 text-purple-300 journey-title">My Journey</h4>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <m.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 + idx * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start group"
          >
            <m.span whileHover={{ scale: 1.2 }} className="flex-shrink-0 h-4 w-4 mt-1 bg-gradient-to-r from-cyan-400 to-purple-500 border-2 border-white rounded-full mr-4 shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/80 transition-all duration-300" />
            <p className="text-gray-100 font-medium journey-text">
              <span className="font-bold text-cyan-300">{item.year}:</span> {item.text}
            </p>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}
