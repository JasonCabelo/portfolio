// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{
        padding: '2rem',
        background: 'var(--bg-color)',
        color: 'var(--text-color)',
        textAlign: 'center',
        marginTop: '2rem',
        borderTop: '1px solid #ccc',
      }}
    >
      <h3>Contact Me</h3>
      <p> Email: jasoncabelo01@gmail.com
</p>
      <p>LinkedIn: https://www.linkedin.com/in/jasoncabelo</p>


        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>

      <motion.div
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.02 }}
>
    <a href="https://github.com/JasonCabelo" target="_blank" rel="noopener noreferrer">
        <button className="btn-accent">GitHub</button>
    </a>
    </motion.div>
    <motion.div
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.02 }}
>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn-accent">Resume</button>
    </a>
    </motion.div>
    </div>

      <p>© {new Date().getFullYear()} Jason Cabelo<span className="blinking-cursor">|</span></p>

    </motion.footer>
  );
};

export default Footer;
