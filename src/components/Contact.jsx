import React, { useState, useCallback } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { contactInfo as extContactInfo, socialLinks as extSocialLinks } from '../constants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

/* ------------------------------------------------------------------
   fallback data (only used if you haven’t supplied your own)
------------------------------------------------------------------ */
const fallbackContact = [
  { Icon: FaEnvelope,     title: 'Email',    value: 'devinayadav8@gmail.com' },
  { Icon: FaPhone,        title: 'Phone',    value: '+91 XXXXXXXXXX'        },
  { Icon: FaMapMarkerAlt, title: 'Location', value: 'Kota, Rajasthan, India'}
];
const fallbackSocial = [
  { Icon: FaGithub,   url: 'https://github.com/Devina0810' },
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/devina-yadav-516965295/' },
  { Icon: FaEnvelope, url: 'mailto:devinayadav8@gmail.com' }
];

/* ------------------------------------------------------------------
   component
------------------------------------------------------------------ */
function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' });

  const contactData = extContactInfo?.length ? extContactInfo : fallbackContact;
  const socialData  = extSocialLinks?.length ? extSocialLinks : fallbackSocial;

  /* ----------------- handlers ----------------- */
  const handleChange = useCallback(e => {
    setForm(f => ({ ...f, [e.target.id]: e.target.value }));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const { VITE_EMAILJS_SERVICE_ID: svc,
            VITE_EMAILJS_TEMPLATE_ID: tpl,
            VITE_EMAILJS_PUBLIC_KEY: pub } = import.meta.env;

    try {
      await emailjs.send(svc, tpl, { ...form }, pub);
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Submission failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  /* ----------------- UI ----------------- */
  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="relative py-20 overflow-hidden contact-section">
        <ToastContainer position="bottom-right" theme="dark" autoClose={5000} />

        <div className="absolute inset-0 contact-bg-animation" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-6 relative z-10">
          {/* -------- heading -------- */}
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
          >
            <span className="contact-title-gradient font-extrabold">Get In Touch</span>
            <m.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: .8, delay: .3 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
            />
          </m.h2>

          <div className="flex flex-col md:flex-row gap-12">
            {/* ------------- info card ------------- */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .2 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-cyan-400/20"
            >
              <h3 className="text-2xl text-cyan-300 font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-6 font-medium">Feel free to reach out for any questions or opportunities.</p>

              <div className="space-y-6">
                {contactData.map((c, i) => (
                  <div key={i} className="flex items-center">
                    <div className="h-12 w-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
                      {c.Icon ? <c.Icon /> : <i className={`${c.icon} text-lg`} />}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{c.title}</h4>
                      <p className="text-gray-200">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex space-x-4">
                {socialData.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
                  >
                    {s.Icon ? <s.Icon /> : <i className={`${s.icon} text-lg`} />}
                  </a>
                ))}
              </div>
            </m.div>

            {/* ------------- form card ------------- */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .3 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-purple-400/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name',    label: 'Your Name',      type: 'text'  },
                  { id: 'email',   label: 'Email Address',  type: 'email' },
                  { id: 'subject', label: 'Subject',        type: 'text'  }
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-white font-semibold mb-2">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      value={form[f.id]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    id="message" rows="6" required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  />
                </div>

                {/* send button */}
                <m.button
                  disabled={loading}
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg font-semibold flex justify-center items-center relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <m.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center"
                      >
                        <m.svg
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                          <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75"/>
                        </m.svg>
                        Sending…
                      </m.div>
                    ) : (
                      <m.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center"
                      >
                        <FaPaperPlane className="mr-2" /> Send Message
                      </m.span>
                    )}
                  </AnimatePresence>
                </m.button>
              </form>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default React.memo(Contact);
