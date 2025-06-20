import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import danler from '../../assets/images/Hero/danler.png';
import { isMobile } from '../../utils/isMobile';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const splineParallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified animation that only plays once and ensures text stays visible
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          toggleActions: 'play none none none', // Changed to prevent reverse
          onEnter: () => {
            // Ensure text is visible when entering
            gsap.set(textRef.current.children, { 
              opacity: 1, 
              y: 0,
              visibility: 'visible'
            });
          },
          onLeave: () => {
            // Keep text visible when leaving
            gsap.set(textRef.current.children, { 
              opacity: 1, 
              y: 0,
              visibility: 'visible'
            });
          },
          onEnterBack: () => {
            // Ensure text is visible when scrolling back up
            gsap.set(textRef.current.children, { 
              opacity: 1, 
              y: 0,
              visibility: 'visible'
            });
          },
          onLeaveBack: () => {
            // Keep text visible when scrolling back up
            gsap.set(textRef.current.children, { 
              opacity: 1, 
              y: 0,
              visibility: 'visible'
            });
          },
        },
      });

      // Initial animation - only plays once
      tl.from(textRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      }).set(textRef.current.children, { 
        opacity: 1, 
        y: 0,
        visibility: 'visible'
      });

      // Additional safety: ensure text is always visible
      gsap.set(textRef.current.children, { 
        opacity: 1, 
        y: 0,
        visibility: 'visible'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Parallax effect for Spline background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (splineParallaxRef.current) {
        splineParallaxRef.current.style.transform = `translate(${x * 30}px, ${y * 20}px) scale(1.05)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaWhatsapp, url: 'https://wa.me/+263787828366', label: 'Whatsapp' },
    { icon: FaInstagram, url: 'https://www.instagram.com/danler_tech', label: 'Instagram' },
    { icon: FaFacebook, url: 'https://www.facebook.com/danler_tech', label: 'Facebook' },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      {/* Spline 3D Hero Background Only */}
      <div
        ref={splineParallaxRef}
        className="absolute inset-0 z-0 transition-transform duration-300"
        style={{
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 80px #7f9cf5) blur(0.5px)',
          opacity: 0.92,
        }}
      >
        {!isMobile() && (
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      <div className="container relative z-10">
        <div ref={textRef} className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200"
          >
            DanlerTech
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Crafting exceptional digital experiences through innovative web solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Animated Logo on the Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: 15 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <motion.div
          className="w-30 h-30 rounded-full from-primary-400/20 to-primary-600/20 dark:from-primary-500/20 dark:to-primary-700/20 flex items-center justify-center  backdrop-blur-sm"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          

          <img 
            src={danler}
            alt="DanlerTech Logo" 
            className="w-52 h-52 object-contain"
            loading="lazy"
          />
          
        </motion.div>
        
        {/* Floating elements around the logo */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Animated Logo on the Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <motion.div
          className="w-30 h-30 rounded-full  from-primary-400/20 to-primary-600/20 dark:from-primary-500/20 dark:to-primary-700/20 flex items-center justify-center backdrop-blur-sm"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          
          <img 
            src={danler} 
            alt="DanlerTech Logo" 
            className="w-52 h-52 object-contain"
            loading="lazy"
          />
          
        </motion.div>
        
        {/* Floating elements around the logo */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 