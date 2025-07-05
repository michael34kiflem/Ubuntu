import { motion } from 'framer-motion';
import { MessageCircle } from 'react-feather';

import '../css/Testemonial.css'
const Testimonials = ({ id }) => {
  const testimonials = [
    {
      quote: "Ubuntu Tech transformed our digital infrastructure, resulting in a 40% increase in operational efficiency.",
      author: "Sarah Johnson",
      position: "CTO, TechForward Inc.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      background: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      quote: "Their AI solution helped us uncover insights that drove a 25% increase in customer retention.",
      author: "Michael Chen",
      position: "CEO, DataSphere",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      background: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    },
    {
      quote: "The team's expertise in cloud migration saved us thousands in operational costs.",
      author: "Emma Rodriguez",
      position: "Director of IT, Global Retail Corp",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      background: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
    }
  ];

  return (
    <section id={id} className="testimonials-section">
      <div className="testimonials-container">
        <motion.h2 
          className="testimonials-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="testimonial-image-container">
                <img 
                  src={testimonial.background} 
                  alt="" 
                  className="testimonial-bg-image"
                  loading="lazy"
                />
                <div className="testimonial-overlay"></div>
                <MessageCircle className="quote-icon" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;