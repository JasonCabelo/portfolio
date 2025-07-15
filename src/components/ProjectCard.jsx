import { motion } from 'framer-motion';

const ProjectCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 10px var(--accent)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        minWidth: '200px',
        cursor: 'pointer',
      }}
      className="project-card"
    >
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
export default ProjectCard;