import { motion } from 'framer-motion';
import { Linkedin, Twitter, GitHub, Mail } from 'react-feather';
import '../css/Footer.css'
const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Case Studies", "Whitepapers"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ubuntu Tech</h3>
            <p>Innovating tomorrow's technology today.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="GitHub"><GitHub /></a>
              <a href="#" aria-label="Email"><Mail /></a>
            </div>
          </motion.div>
          
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <motion.div 
                key={section.title}
                className="link-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Ubuntu Tech. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;