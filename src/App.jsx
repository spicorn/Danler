import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import BackToTop from './components/layout/BackToTop';
import ScrollProgress from './components/layout/ScrollProgress';

// Page Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Configure ScrollTrigger defaults
      ScrollTrigger.defaults({
        markers: false,
        toggleActions: 'play none none reverse',
      });

      // Add smooth scroll behavior
      gsap.to('html, body', {
        scrollBehavior: 'smooth',
        duration: 0.1,
      });

      // Add parallax effect to sections
      gsap.utils.toArray('section').forEach(section => {
        gsap.to(section, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Toaster position="top-center" />
      <CustomCursor />
      <BackToTop />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
