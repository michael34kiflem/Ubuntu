import { motion } from 'framer-motion';
import '../css/About.css'

const About = ({ id }) => {
  const aboutItems = [
    {
      title: "Our Mission",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency.",
      icon: "🚀"
    },
    {
      title: "Our Vision",
      description: "A world where technology seamlessly integrates with business to create limitless possibilities.",
      icon: "🌍"
    },
    {
      title: "Our Values",
      description: "Innovation, Integrity, Collaboration, and Excellence guide everything we do.",
      icon: "💎"
    }
  ];

  return (
    <section id={id} className="about-section">
      <div className="about-container">
        <div className="about-content-wrapper">
          {/* Image Section */}
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Team collaborating at Ubuntu Tech"
              className="about-image"
            />
          </motion.div>

          {/* Content Section */}
          <div className="about-content">
            <motion.h2 
              className="about-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About <span className="about-title-highlight">Ubuntu Tech</span>
            </motion.h2>
            
            <motion.p 
              className="about-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Founded in 2015, Ubuntu Tech has been at the forefront of digital transformation, helping businesses of all sizes leverage technology to solve complex challenges and achieve their strategic goals.
            </motion.p>
            
            <div className="about-grid">
              {aboutItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="about-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="about-card-content">
                    <div className="about-icon">{item.icon}</div>
                    <h3 className="about-card-title">{item.title}</h3>
                    <p className="about-card-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;