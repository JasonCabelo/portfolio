// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h2>Welcome to My Portfolio</h2>
      <p>This is where I showcase my work and experience.</p>
    </motion.section>
  );
};

export default Home;
