import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 text-center">
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
              className="h-12 w-12 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 mx-2 hover:bg-primary-500/30 transition"
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
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Devina Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;