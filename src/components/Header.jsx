import { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-950/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-500">DY</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className={`nav-link text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition ${activeSection === section ? 'active-section' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            id="mobile-menu-button" 
            className="md:hidden focus:outline-none mr-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars className="text-xl" />
          </button>
          
          {/* Theme Toggle
          <button 
            id="theme-toggle" 
            className="p-2 rounded-full focus:outline-none"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button> */}
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 py-4 px-6 shadow-lg`}
      >
        <div className="flex flex-col space-y-4">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className={`nav-link text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition ${activeSection === section ? 'active-section' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;