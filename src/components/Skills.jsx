import { useState } from 'react';
import { FaCode, FaProjectDiagram, FaTools, FaHeart, FaTimes } from 'react-icons/fa';
import { FaJava, FaPython, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <FaCode className="text-2xl text-primary-500" />,
      frontContent: 'Programming languages I know',
      skills: [
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'C', icon: <SiC className="text-blue-600" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'SQL', icon: <span className="text-gray-700 dark:text-gray-300">SQL</span> },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: <FaProjectDiagram className="text-2xl text-primary-500" />,
      frontContent: 'Frameworks and libraries I work with',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> }
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <FaTools className="text-2xl text-primary-500" />,
      frontContent: 'Tools I use daily',
      skills: [
        { name: 'Git', icon: <FaGit className="text-orange-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-300" /> },
        { name: 'VS Code', icon: <span className="text-blue-500">VS</span> },
        { name: 'Eclipse', icon: <span className="text-purple-500">EC</span> }
      ]
    },
    {
      id: 'interests',
      title: 'Interests',
      icon: <FaHeart className="text-2xl text-primary-500" />,
      frontContent: 'My professional interests',
      skills: [
        { name: 'Data Structures & Algorithms (100+ problems)', icon: <span className="text-green-500">DSA</span> },
        { name: 'Web Development', icon: <span className="text-blue-500">Web</span> },
        { name: 'Object-Oriented Programming', icon: <span className="text-purple-500">OOP</span> },
        { name: 'UI/UX Design', icon: <span className="text-purple-500">UI</span> }
      ]
    }
  ];

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative text-white">
          <span className="relative inline-block">
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className={`relative bg-gray-800 rounded-xl shadow-lg overflow-hidden h-64 transition-all duration-300 ${activeCard === category.id ? 'ring-2 ring-primary-500' : 'hover:shadow-xl'}`}
              onClick={() => toggleCard(category.id)}
            >
              {/* Front Content */}
              <div className={`skill-content h-full flex flex-col items-center justify-center p-6 transition-all duration-500 ${activeCard === category.id ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-16 h-16 bg-primary-100 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-center">{category.frontContent}</p>
              </div>
              
              {/* Back Content */}
              <div className={`skill-details absolute top-0 left-0 right-0 bottom-0 p-6 transition-all duration-500 ${activeCard === category.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{category.title}</h3>
                <ul className="space-y-3 overflow-y-auto h-4/5">
                  {category.skills.map((skill, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="mr-3 mt-1">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="absolute bottom-4 right-4 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                  }}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;