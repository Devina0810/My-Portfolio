import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import p3 from "../assets/p3.jpg";




const roles = ["Frontend Developer", "DSA Enthusiast", "Student"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Cycle roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 pt-8 pb-20 flex flex-col md:flex-row items-center md:pr-12">
        <div className="md:w-1/2 flex flex-col space-y-8">
          <p className="text-2xl font-semibold text-gray-200">Hello, I'm</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-gray-100"
          >
            Devina Yadav
          </motion.h1>

          {/* Multiple roles with fade animation */}
          <div className="relative h-12 md:h-16">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8 }}
                className="absolute text-2xl md:text-4xl font-medium text-gray-400"
              >
                {roles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            I transform ideas into seamless digital journeys, blending pixel-perfect design with elegant, maintainable code. Always eager to collaborate on projects that challenge and inspire.
          </p>

          <div className="flex space-x-4">
            <motion.a
              href="#projects"
              whileHover={{ y: -4 }}
              className="px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition shadow-lg"
            >
              See my Projects
            </motion.a>
          </div>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/Devina0810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/devina-yadav-516965295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:devinayadav8@gmail.com" 
              className="text-gray-300 hover:text-primary-500 transition"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
            <img
              src={p3}
              alt="Devina Yadav"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="block w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"
        ></a>
      </motion.div>
    </section>
  );
};

export default Hero;
