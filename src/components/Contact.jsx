import { useState } from 'react';
import { contactInfo, socialLinks } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent:', result.text);
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Submission failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const defaultContactInfo = [
    { icon: 'fas fa-envelope', title: 'Email', value: 'devinayadav8@gmail.com' },
    { icon: 'fas fa-phone', title: 'Phone', value: '+91 XXXXXXXXXX' },
    { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Kota, Rajasthan, India' },
  ];

  const defaultSocialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Devina0810', color: 'hover:bg-gray-800' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/devina-yadav-516965295/', color: 'hover:bg-blue-600' },
    { icon: 'fas fa-envelope', url: 'mailto:devinayadav8@gmail.com', color: 'hover:bg-red-500' },
  ];

  const contactData = contactInfo || defaultContactInfo;
  const socialData = socialLinks || defaultSocialLinks;

  return (
    <section id="contact" className="relative py-20 overflow-hidden contact-section">
      <ToastContainer position="bottom-right" theme="dark" autoClose={5000} />

      <div className="absolute inset-0 contact-bg-animation" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="contact-title-gradient font-extrabold">Get In Touch</span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
          />
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-cyan-400/20"
          >
            <h3 className="text-2xl text-cyan-300 font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-6 font-medium">
              Feel free to reach out to me for any questions or opportunities.
            </p>

            <div className="space-y-6">
              {contactData.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
                    <i className={`${info.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-200">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex space-x-4">
              {socialData.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-purple-400/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Your Name', type: 'text' },
                { id: 'email', label: 'Email Address', type: 'email' },
                { id: 'subject', label: 'Subject', type: 'text' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-white font-semibold mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={form[field.id]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 bg-black/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg font-semibold flex justify-center items-center relative overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 text-white mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </motion.svg>
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          transform: translateZ(0);
          will-change: transform;
        }
        .contact-bg-animation {
          background: linear-gradient(45deg, #1e1b4b, #0f172a, #581c87);
          background-size: 400% 400%;
          animation: contactBgShift 16s ease infinite;
        }
        @keyframes contactBgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .contact-title-gradient {
          background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: contactTitleGradient 6s ease infinite;
        }
        @keyframes contactTitleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
