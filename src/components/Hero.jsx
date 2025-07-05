import { motion } from 'framer-motion';
import { ArrowRight } from 'react-feather';
import '../css/Hero.css';

const Hero = ({ id, darkMode }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Images showing web and mobile app development
  const techImage = darkMode 
    ? "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Dark: Developer working on multiple screens
    : "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"; // Light: Web and mobile interfaces

  return (
    <section id={id} className={`hero-section ${darkMode ? 'dark' : ''}`}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            variants={variants}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            Building <span className="highlight">Digital Experiences</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={variants}
            transition={{ delay: 0.4 }}
          >
            Ubuntu Tech crafts beautiful websites and powerful mobile apps that drive business growth.
          </motion.p>
          
          <motion.div
            variants={variants}
            transition={{ delay: 0.6 }}
            className="hero-actions"
          >
            <a href="#services" className={`btn primary-btn ${darkMode ? 'dark' : ''}`}>
              Our Services
            </a>
            <a href="#contact" className={`btn outline-btn ${darkMode ? 'dark' : ''}`}>
              View Portfolio <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <img 
            src={techImage} 
            alt="Web and mobile app development by Ubuntu Tech" 
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;