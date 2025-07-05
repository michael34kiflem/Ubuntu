import { motion } from 'framer-motion';
import '../css/Technologies.css'
const Technologies = ({ id }) => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vue", "Angular", "TypeScript"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "💻"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "Ruby on Rails", "Go"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "⚙️"
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "☁️"
    },
    {
      category: "Data & AI",
      technologies: ["TensorFlow", "PyTorch", "Pandas", "Spark", "Hadoop"],
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "🧠"
    }
  ];

  return (
    <section id={id} className="technologies-section">
      <div className="technologies-container">
        <motion.h2 
          className="technologies-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technologies We Master
        </motion.h2>
        
        <motion.p 
          className="technologies-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our team is proficient in the latest technologies across the entire development stack.
        </motion.p>
        
        <div className="technologies-grid">
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={category.category}
              className="tech-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="tech-image-container">
                <img 
                  src={category.image} 
                  alt={category.category} 
                  className="tech-image"
                  loading="lazy"
                />
                <div className="tech-icon">{category.icon}</div>
              </div>
              <div className="tech-content">
                <h3 className="tech-category-title">{category.category}</h3>
                <div className="tech-items">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      className="tech-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;