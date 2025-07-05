import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'react-feather';
import '../css/Contact.css'

const Contact = ({ id }) => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "contact@ubuntutech.com",
      action: "mailto:contact@ubuntutech.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      description: "Our headquarters",
      value: "123 Tech Park, San Francisco, CA",
      action: "https://maps.google.com"
    }
  ];

  return (
    <section id={id} className="contact-section" style={{ minHeight: '100vh', scrollMarginTop: '80px' }}>
      <div className="contact-container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="contact-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in <span className="highlight">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind or want to learn more about our services? Reach out to our team.
          </motion.p>
          
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">
                  {method.icon}
                </div>
                <h3 className="contact-method-title">{method.title}</h3>
                <p className="contact-method-description">{method.description}</p>
                <a 
                  href={method.action} 
                  className="contact-method-value"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {method.value}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your.email@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;