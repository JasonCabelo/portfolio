import ProjectCard from '../components/ProjectCard';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Vite.',
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'A simple weather app using OpenWeatherMap API.',
    link: '#',
  },
  {
    title: 'Task Tracker',
    description: 'A to-do app with localStorage support.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h2>My Projects</h2>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginTop: '2rem',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
