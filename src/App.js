import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'technologies', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionBottom = offsetTop + offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar 
        activeSection={activeSection} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main>
        <Hero id="home" darkMode={darkMode} />
        <About id="about" />
        <Services id="services" />
        <Technologies id="technologies" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;