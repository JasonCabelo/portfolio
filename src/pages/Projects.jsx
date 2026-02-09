// src/pages/Projects.jsx
import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <main style={{ padding: "2rem 1rem", color: "var(--text-color)" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Projects</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
