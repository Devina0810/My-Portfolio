import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCode
} from 'react-icons/fa';

/* ------------------------------------------------------------------
   DECORATIVE BACKGROUND  (pure-CSS)
------------------------------------------------------------------ */
function FooterDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3 orbs */}
      <span className="footer-orb orb-f1" />
      <span className="footer-orb orb-f2" />
      <span className="footer-orb orb-f3" />

      {/* 5 particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`footer-particle part-f${i}`} />
      ))}

      {/* 2 lines */}
      <span className="footer-line line-f1" />
      <span className="footer-line line-f2" />
    </div>
  );
}

/* ------------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------------ */
function Footer() {
  const socials = [
    { Icon: FaGithub,   url: 'https://github.com/Devina0810',                      extra: 'hover:bg-gray-700'  },
    { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/devina-yadav-516965295/', extra: 'hover:bg-blue-600' },
    { Icon: FaInstagram,url: 'https://www.instagram.com/devinayadav_8/',           extra: 'hover:bg-pink-600' }
  ];

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <LazyMotion features={domAnimation}>
      <footer className="relative py-16 overflow-hidden footer-section">
        <div className="absolute inset-0 footer-bg-animation" />
        <FooterDecorations />
        <div className="absolute inset-0 bg-black/40" />

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          {/* -------- brand -------- */}
          <m.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="mb-8">
            <h3 className="text-3xl font-bold mb-2 footer-name-gradient">Devina Yadav</h3>
            <m.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-200 font-medium footer-subtitle">
              Frontend Developer &amp; DSA Enthusiast
            </m.p>
          </m.div>

          {/* -------- socials -------- */}
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="flex justify-center mb-8">
            {socials.map(({ Icon, url, extra }, i) => (
              <m.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
                className={`h-14 w-14 mx-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-300 transition-all duration-300 ${extra} hover:text-white hover:border-white/50`}
              >
                <Icon className="text-xl" />
              </m.a>
            ))}
          </m.div>

          {/* -------- nav links -------- */}
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mb-8">
            <ul className="flex flex-wrap justify-center space-x-8">
              {navLinks.map((link, i) => (
                <m.li key={link} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }} viewport={{ once: true }}>
                  <m.a
                    href={`#${link}`}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-200 hover:text-cyan-300 transition-all duration-300 font-medium capitalize relative group footer-nav-link"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <m.span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full" initial={{ width: 0 }} whileHover={{ width: '100%' }} transition={{ duration: 0.3 }} />
                  </m.a>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* divider */}
          <m.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }} className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-8" />

          {/* copyright & extras */}
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="space-y-4">
            <m.p className="text-sm text-gray-300 font-medium footer-made-with">
              Made with&nbsp;
              <m.span animate={{ scale: [1, 1.2, 1], color: ['#ec4899', '#ef4444', '#ec4899'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="mx-2 inline-flex items-center">
                <FaHeart className="relative top-[2px]" />
              </m.span>
              and&nbsp;
              <m.span animate={{ rotate: [0, 360], color: ['#06b6d4', '#a855f7', '#06b6d4'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="mx-2 inline-flex items-center">
                <FaCode className="relative top-[2px]" />
              </m.span>
              by Devina Yadav
            </m.p>
            <p className="text-sm text-gray-400 footer-copyright">© {new Date().getFullYear()} Devina Yadav. All rights reserved.</p>

            {/* back-to-top */}
            <m.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 hover:text-white backdrop-blur-sm transition-all duration-300 font-medium back-to-top-btn"
            >
              Back to Top ↑
            </m.button>
          </m.div>
        </m.div>
      </footer>
    </LazyMotion>
  );
}

export default React.memo(Footer);
