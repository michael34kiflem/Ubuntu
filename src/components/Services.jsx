import { motion } from 'framer-motion';
import '../css/Service.css'

const Services = ({ id, darkMode }) => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions designed to meet your unique business requirements and workflows.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      title: "Cloud Integration",
      description: "Seamless migration and optimization of your infrastructure on leading cloud platforms.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      title: "AI Solutions",
      description: "Leverage artificial intelligence to automate processes and gain valuable insights.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets and sensitive data.",
      icon: "🔒",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      title: "DevOps Consulting",
      description: "Streamline your development and operations for faster, more reliable delivery.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    }
  ];

  return (
    <section id={id} className={`services-section ${darkMode ? 'dark' : ''}`}>
      <div className="services-container">
        <motion.h2 
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className="services-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer a comprehensive suite of technology services designed to address your most pressing challenges and unlock new opportunities.
        </motion.p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className={`service-card ${darkMode ? 'dark' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                  loading="lazy"
                />
                <div className={`service-icon ${darkMode ? 'dark' : ''}`}>{service.icon}</div>
              </div>
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;