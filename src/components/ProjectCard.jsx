// src/components/ProjectCard.jsx
import {motion} from "framer-motion";
const ProjectCard = ({ title, description, image, demoLink, repoLink }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      style={{
        backgroundColor: "var(--nav-bg)",
        borderRadius: "12px",
        boxShadow: "0 0 12px rgba(0,0,0,0.1)",
        padding: "1rem",
        maxWidth: "350px",
        textAlign: "center",
        transition: "0.3s ease",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "80px", // 👈 smaller icon
          height: "80px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ marginTop: "1rem" }}>
        <a
          className="btn-accent"
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          className="btn-accent"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "0.5rem" }}
        >
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
