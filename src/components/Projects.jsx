import React, { useMemo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

/* ------------------------------------------------------------------
   STATIC DATA
------------------------------------------------------------------ */
const projects = [
  {
    title: 'Linkora',
    description: 'A real-time language exchange platform with video calls and authentication.',
    image: '/linkora.jpg',
    tags: ['MERN', 'WebRTC', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com/Devina0810/Linkora',
    liveLink: 'https://linkora-xyyp.onrender.com/'
  },
  {
    title: 'Maison Belle',
    description: 'Full e-commerce site with cart, auth and Razorpay payments.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Zustand', 'JWT', 'Razorpay'],
    githubLink: 'https://github.com/Devina0810/Maison-Belle',
    liveLink: 'https://maison-belle.onrender.com/'
  },
  {
    title: 'Todo List App',
    description: 'Task manager with categorisation and priorities.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'MongoDB', 'Context API'],
    githubLink: 'https://github.com/Devina0810/Task-trackr',
    liveLink: 'https://task-trackr-bga4.onrender.com/'
  },
  {
    title: 'Movie-Time',
    description: 'Movie search app using TMDB; surfaces top-trending picks.',
    image: '/movie.jpg',
    tags: ['React', 'OpenAI API', 'Tailwind'],
    githubLink: 'https://github.com/Devina0810/Movie-Time',
    liveLink: 'https://movie-time-eight-phi.vercel.app/'
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather with geolocation & 5-day forecast.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg',
    tags: ['React', 'API Integration', 'Geolocation'],
    githubLink: 'https://github.com/Devina0810/Weather-App',
    liveLink: 'https://weather-app-beta-three-89.vercel.app/'
  },
  {
    title: 'SnapSeek',
    description: 'Image search with filtering & sorting.',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'API Integration'],
    githubLink: 'https://github.com/Devina0810/Image-Search-App',
    liveLink: 'https://image-search-app-lilac-rho.vercel.app/'
  }
];

/* ------------------------------------------------------------------
   CARD COMPONENT
------------------------------------------------------------------ */
function ProjectCard({ project, idx }) {
  /* tiny stagger memo to avoid re-building the object every render */
  const tagDelay = useMemo(() => 0.3, []);
  return (
    <m.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02 }}
      className={`project-card relative rounded-2xl overflow-hidden shadow-2xl bg-black/70 backdrop-blur-xl border border-cyan-400/20 flex flex-col group h-full card-border-${idx % 4}`}
    >
      {/* ---- image ---- */}
      <div className="relative h-48 flex-shrink-0 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />

        {/* dark gradient & tags & GH badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
          <div className="flex justify-between w-full items-end">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <m.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tagDelay + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-3 py-1 bg-cyan-500/30 text-cyan-100 border border-cyan-400/40 rounded-full font-medium backdrop-blur-sm project-tag"
                >
                  {t}
                </m.span>
              ))}
            </div>

            {project.githubLink && (
              <m.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 border border-cyan-400/30 transition-all duration-300"
                aria-label="GitHub repository"
              >
                <FaGithub className="text-cyan-300 text-lg" />
              </m.a>
            )}
          </div>
        </div>
      </div>

      {/* ---- text ---- */}
      <div className="p-6 flex flex-col flex-grow">
        <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl font-bold mb-3 text-white project-title">
          {project.title}
        </m.h3>

        <m.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-100 flex-grow mb-6 leading-relaxed font-medium project-description">
          {project.description}
        </m.p>

        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-auto flex flex-wrap gap-4">
          {project.githubLink && (
            <m.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold"
            >
              <FaGithub className="mr-2" /> GitHub <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </m.a>
          )}
          {project.liveLink && (
            <m.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-sm text-green-300 hover:text-green-200 transition-all duration-300 font-semibold"
            >
              <FaEye className="mr-2" /> Live Demo <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </m.a>
          )}
        </m.div>
      </div>
    </m.div>
  );
}

/* ------------------------------------------------------------------
   DECORATIVE BACKGROUND ELEMENTS  (pure-CSS)
------------------------------------------------------------------ */
function ProjectsDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 4 floating ORBS */}
      <span className="projects-orb orb-p1" />
      <span className="projects-orb orb-p2" />
      <span className="projects-orb orb-p3" />
      <span className="projects-orb orb-p4" />

      {/* 8 small PARTICLES */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className={`projects-particle part-p${i}`} />
      ))}

      {/* 3 scanning LINES */}
      <span className="projects-line line-p1" />
      <span className="projects-line line-p2" />
      <span className="projects-line line-p3" />
    </div>
  );
}

/* ------------------------------------------------------------------
   MAIN SECTION
------------------------------------------------------------------ */
function Projects() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="relative py-20 overflow-hidden projects-section">
        <div className="absolute inset-0 projects-bg-animation" />
        <ProjectsDecorations />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Heading */}
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
          >
            <span className="projects-title-gradient font-extrabold">My Projects</span>
            <m.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
            />
          </m.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} idx={i} />
            ))}
          </div>

          {/* GitHub CTA */}
          <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="text-center mt-16">
            <m.a
              href="https://github.com/Devina0810"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg font-semibold relative overflow-hidden github-button"
            >
              <span className="relative z-10 mr-3">View All Projects on GitHub</span>
              <m.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <FaGithub className="text-xl" />
              </m.div>
            </m.a>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
export default React.memo(Projects);
