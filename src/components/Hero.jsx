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
    ? "https://res.cloudinary.com/dqwttbkqo/image/upload/v1751971057/r5se2z2u_dqbc3p.png" // Dark: Developer working on multiple screens
    : "https://res.cloudinary.com/dqwttbkqo/image/upload/v1751970731/j4r24fag_jbpryy.png"; // Light: Web and mobile interfaces

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