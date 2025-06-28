import p1 from "../assets/p1.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-96 h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={p1}
                alt="Working" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am currently in my third year of studying Computer Science at the Indian Institute of Information Technology (IIIT) Kota. I possess a strong enthusiasm for frontend development, with a particular focus on creating seamless and intuitive user experiences. My expertise includes a solid foundation in JavaScript, React, and contemporary CSS, which I utilize to develop elegant and responsive web applications. In addition to my programming skills, I have a keen interest in Data Structures and Algorithms, UI/UX design, and data science. I actively seek opportunities to explore and expand my knowledge in these areas to enhance my technical capabilities. As a committed reader and lifelong learner, I am dedicated to delivering digital solutions that are not only functional but also meaningful and centered around the user.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium mb-4">My Journey</h4>
              <div className="space-y-4">
                {[
                  { year: "2022", text: "Completed 12th standard with PCM from Maharani Gayatri Devi Girls School" },
                  { year: "2023", text: "Started B.Tech in Computer Science at Indian Institute of Information Technology (IIIT) Kota" },
                  { year: "2027", text: "Expected graduation with B.Tech in Computer Science from Indian Institute of Information Technology (IIIT) Kota" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 bg-primary-500 rounded-full mr-4"></div>
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
    </section>
  );
};

export default About;