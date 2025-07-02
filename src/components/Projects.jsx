import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce App",
    description: "A fully functional e-commerce platform with product listings, cart functionality, and user authentication.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "https://github.com/Devina0810/E-Commerce-Site"
  },
  {
    title: "Weather Application",
    description: "Real-time weather forecast app with location detection and 5-day weather predictions using API integration.",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "API Integration", "Geolocation"],
    githubLink: "https://github.com/Devina0810/Weather-App"
  },
  {
    title: "Image Search App",
    description: "An application that searches and displays images using an external API with filtering and sorting capabilities.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "API Integration"],
    githubLink: "https://github.com/Devina0810/Image-Search-App"
  },
  {
    title: "Todo List App",
    description: "A productivity application for managing daily tasks with features like categorization and priority setting.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Local Storage", "Context API"],
    githubLink: "https://github.com/Devina0810/Task-trackr"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="project-card rounded-xl overflow-hidden shadow-lg bg-gray-700 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative h-48 flex-shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <div className="flex justify-between w-full items-end">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-primary-500/20 text-primary-800 dark:text-primary-200 rounded backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
                aria-label="GitHub repository"
              >
                <FaGithub className="text-white text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="mt-auto">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
          >
            View on GitHub
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 relative text-white">
          <span className="relative inline-block">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="https://github.com/Devina0810" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition shadow-lg"
          >
            View All Projects on GitHub
            <FaGithub className="ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;