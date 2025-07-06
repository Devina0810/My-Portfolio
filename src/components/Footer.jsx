import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <footer className="relative py-12 text-gray-300 bg-gradient-to-r from-purple-950 via-black to-purple-950 overflow-hidden animate-gradient-x">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center"
      >
        <div className="flex justify-center mb-6">
          {[
            { icon: <FaGithub />, url: "https://github.com/Devina0810" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/devina-yadav-516965295/" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/devinayadav_8/" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-12 w-12 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 mx-2 hover:scale-110 hover:bg-primary-500/30 transition-transform duration-300 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="hover:text-primary-500 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <p className="text-sm mt-6 text-gray-400">&copy; {new Date().getFullYear()} Devina Yadav. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;