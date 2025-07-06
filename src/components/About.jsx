import p1 from "../assets/p1.jpg";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-r from-purple-950 via-black to-purple-950 text-white animate-gradient-x">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
      <div className="container mx-auto px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl shadow-lg p-10 md:p-16 border border-white/10">
        <h2 className="text-4xl font-bold text-center mb-16 relative text-primary-400">
          <span className="text-4xl font-bold text-center mb-16 relative text-primary-400">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-primary-500"></span>
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:w-96 h-auto rounded-xl overflow-hidden shadow-[0_0_20px_#3b82f666] border border-primary-500">
              <img 
                src={p1}
                alt="Working" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12 px-4 text-justify">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am currently in my third year of studying Computer Science at the Indian Institute of Information Technology (IIIT) Kota. I possess a strong enthusiasm for frontend development, with a particular focus on creating seamless and intuitive user experiences. My expertise includes a solid foundation in JavaScript, React, and contemporary CSS, which I utilize to develop elegant and responsive web applications. In addition to my programming skills, I have a keen interest in Data Structures and Algorithms, UI/UX design, and data science. I actively seek opportunities to explore and expand my knowledge in these areas to enhance my technical capabilities. As a committed reader and lifelong learner, I am dedicated to delivering digital solutions that are not only functional but also meaningful and centered around the user.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium mb-4">My Journey</h4>
              <div className="space-y-6">
                {[
                  { year: "2022", text: "Completed 12th standard with PCM from Maharani Gayatri Devi Girls School" },
                  { year: "2023", text: "Started B.Tech in Computer Science at Indian Institute of Information Technology (IIIT) Kota" },
                  { year: "2027", text: "Expected graduation with B.Tech in Computer Science from Indian Institute of Information Technology (IIIT) Kota" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-4 w-4 mt-1 bg-primary-500 border-2 border-white rounded-full mr-4"></div>
                    <p className="text-gray-300">
                      <span className="font-semibold">{item.year}:</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="/DevinaYadav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition">
              Download Resume
            </a>
          </div>
        </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default About;