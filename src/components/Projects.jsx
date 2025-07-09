import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const projects = [
  {
    title: "Linkora",
    description: "A real-time language exchange and video calling with user authentication and real-time communication.",
    image: "/linkora.jpg",
    tags: ["MERN", "WebRTC", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/Devina0810/Linkora",
    liveLink: "https://linkora-xyyp.onrender.com/"
  },
  {
    title: "E-Commerce App",
    description: "A fully functional e-commerce platform with product listings, cart functionality, and user authentication.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    githubLink: "https://github.com/Devina0810/E-Commerce-Site",
    liveLink: "https://ecommerce-devina.vercel.app"
  },
  {
    title: "Todo List App",
    description: "A productivity application for managing daily tasks with features like categorization and priority setting.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Local Storage", "Context API"],
    githubLink: "https://github.com/Devina0810/Task-trackr",
    liveLink: "https://todo-devina.vercel.app"
  },
  {
    title: "Movie-Time",
    description: "A web app that lets users search for movies using the TMDB API. It features a dynamic movie search interface and highlights the top 5 trending movies based on user search history.",
    image: "/movie.jpg",
    tags: ["React", "OpenAI API", "Tailwind"],
    githubLink: "https://github.com/Devina0810/Movie-Time",
    liveLink: "https://movie-time-eight-phi.vercel.app/"
  },
  {
    title: "Weather Application",
    description: "Real-time weather forecast app with location detection and 5-day weather predictions using API integration.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg",
    tags: ["React", "API Integration", "Geolocation"],
    githubLink: "https://github.com/Devina0810/Weather-App",
    liveLink: "https://weather-app-beta-three-89.vercel.app/"
  },
  {
    title: "SnapSeek",
    description: "An image search application that searches and displays images using an external API with filtering and sorting capabilities.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "API Integration"],
    githubLink: "https://github.com/Devina0810/Image-Search-App",
    liveLink: "https://image-search-app-lilac-rho.vercel.app/"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      
      transition={{ duration: 0.04, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        scale: 1.02
      }}
      className="project-card rounded-2xl overflow-hidden shadow-2xl bg-black/70 backdrop-blur-xl border border-cyan-400/20 transition-all duration-500 h-full flex flex-col group relative"
    >
      {/* Simplified border effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 project-border-${index % 4}`} />

      <div className="relative h-48 flex-shrink-0 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          whileHover={{ filter: "brightness(1.1)" }}
        />
        
        {/* Enhanced overlay with better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
          <div className="flex justify-between w-full items-end">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <motion.span 
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + tagIndex * 0.1 }}
                  whileHover={{ 
                    scale: 1.1
                  }}
                  className="text-xs px-3 py-1 bg-cyan-500/30 text-cyan-100 border border-cyan-400/40 rounded-full font-medium backdrop-blur-sm project-tag"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            {project.githubLink && (
              <motion.a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 15
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-400/30"
                aria-label="GitHub repository"
              >
                <FaGithub className="text-cyan-300 text-lg" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold mb-3 text-white project-title"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-100 mb-6 flex-grow leading-relaxed font-medium project-description"
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-auto flex flex-wrap gap-4"
        >
          {project.githubLink && (
            <motion.a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05
              }}
              className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold"
            >
              <FaGithub className="mr-2" />
              GitHub
              <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </motion.a>
          )}
          {project.liveLink && (
            <motion.a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05
              }}
              className="inline-flex items-center text-sm text-green-300 hover:text-green-200 transition-all duration-300 font-semibold"
            >
              <FaEye className="mr-2" />
              Live Demo
              <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden projects-section">
      {/* Simplified background with CSS animation */}
      <div className="absolute inset-0 projects-bg-animation" />

      {/* Reduced background elements for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced floating orbs from 12 to 4 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#ec4899' : '#10b981'
              }, transparent)`,
              left: `${10 + i * 25}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              x: [0, 100 - i * 20],
              y: [0, 80 - i * 15],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Reduced particles from 40 to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#ec4899' : '#10b981',
              left: `${12 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              x: [0, 60 - i * 8],
              y: [0, 50 - i * 6],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Reduced grid lines from 8 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              width: `${500 + i * 200}px`,
              left: `${15 + i * 30}%`,
              top: `${25 + i * 25}%`,
              transform: `rotate(${i * 60}deg)`
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 9 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="projects-title-gradient font-extrabold">My Projects</span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a 
            href="https://github.com/Devina0810" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              y: -6,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg font-semibold relative overflow-hidden group github-button"
          >
            <span className="relative z-10 mr-3">View All Projects on GitHub</span>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub className="text-xl" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* CSS Styles for better performance */}
      <style jsx>{`
        .projects-section {
          transform: translateZ(0);
          will-change: transform;
        }

        .projects-bg-animation {
          background: linear-gradient(45deg, #1e1b4b, #0f172a, #581c87);
          background-size: 400% 400%;
          animation: projectsBgShift 20s ease infinite;
        }

        @keyframes projectsBgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .projects-title-gradient {
          background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: projectsTitleGradient 6s ease infinite;
        }

        @keyframes projectsTitleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .project-card {
          transform: translateZ(0);
          will-change: transform;
        }

        .project-title {
          text-shadow: 0 0 20px rgba(255,255,255,0.3);
        }

        .project-description {
          text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }

        .project-tag {
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }

        .project-border-0 {
          background: linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.3), transparent);
          animation: projectBorder0 6s ease infinite;
        }

        .project-border-1 {
          background: linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.3), transparent);
          animation: projectBorder1 6s ease infinite 1.5s;
        }

        .project-border-2 {
          background: linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.3), transparent);
          animation: projectBorder2 6s ease infinite 3s;
        }

        .project-border-3 {
          background: linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.3), transparent);
          animation: projectBorder3 6s ease infinite 4.5s;
        }

        @keyframes projectBorder0 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }

        @keyframes projectBorder1 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-180deg); }
        }

        @keyframes projectBorder2 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }

        @keyframes projectBorder3 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-180deg); }
        }

        .github-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .github-button:hover::before {
          left: 100%;
        }

        /* Reduce motion for performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
