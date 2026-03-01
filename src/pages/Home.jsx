// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import projects from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const skills = [
  { 
    name: 'MongoDB', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    url: 'https://www.mongodb.com/'
  },
  { 
    name: 'Express.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    url: 'https://expressjs.com/'
  },
  { 
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    url: 'https://react.dev/'
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    url: 'https://nodejs.org/'
  },
  { 
    name: 'PHP', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    url: 'https://www.php.net/'
  },
  { 
    name: 'MySQL', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    url: 'https://www.mysql.com/'
  },
  { 
    name: 'Git', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    url: 'https://git-scm.com/'
  }
];

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h2>Jason Cabelo</h2>
      <p>Full-stack developer focused on performance, clean architecture, and reliable web solutions.</p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '1.5rem', 
        marginTop: '2rem' 
      }}>
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem',
              border: '1px solid var(--border-color)',
              borderRadius: '0.75rem',
              backgroundColor: 'var(--nav-bg)',
              color: 'var(--text-color)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              minWidth: '100px',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <img 
              src={skill.logo} 
              alt={skill.name}
              style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            />
            <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
              {skill.name}
            </span>
          </a>
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Featured Projects</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            justifyItems: 'center',
          }}
        >
          {projects.filter(p => p.title !== 'Portfolio Site').slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
