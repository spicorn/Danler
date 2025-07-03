import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMonitor, FiTrendingUp, FiSearch, FiImage, FiCode } from 'react-icons/fi';
import Spline from '@splinetool/react-spline';
import { isMobile } from '../../utils/isMobile';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FiMonitor,
    title: 'Website Design',
    description: 'Beautiful, responsive websites that captivate your audience and drive conversions with modern design principles and user experience optimization.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including social media, email campaigns, and PPC advertising to grow your online presence and reach.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiSearch,
    title: 'SEO Optimization',
    description: 'Search engine optimization services to improve your website\'s visibility, drive organic traffic, and achieve higher search engine rankings.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiImage,
    title: 'Graphic Design & Branding',
    description: 'Creative graphic design and branding solutions including logos, brand identity, marketing materials, and visual content that represents your business.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FiCode,
    title: 'WebApp Development',
    description: 'Custom web applications and software solutions built with cutting-edge technologies to streamline your business processes and enhance productivity.',
    color: 'from-yellow-500 to-yellow-600',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const splineParallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only keep the parallax effect for the background
      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
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
        splineParallaxRef.current.style.transform = `translate(${x * 20}px, ${y * 15}px) scale(1.03)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-10 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        backgroundSize: '100% 100%',
      }}
    >
      {/* Motion Graphics Background */}
      <div className="absolute inset-0">
        {/* Spline 3D Services Background with Parallax and Glow */}
        <div
          ref={splineParallaxRef}
          className="absolute inset-0 z-0 transition-transform duration-300"
          style={{
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 60px #7f9cf5) blur(0.5px)',
            opacity: 0.90,
          }}
        >
            <Spline scene="https://prod.spline.design/LEvjG3OETYd2GsRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 border border-primary-300/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-20 h-20 border border-primary-400/20 rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary-500/20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 border border-primary-300/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-14 h-14 border border-primary-400/20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Additional floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`element-${i}`}
            className="absolute w-1 h-1 bg-primary-300/40 rounded-full"
            style={{
              left: `${60 + i * 8}%`,
              top: `${70 + (i % 2) * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-transparent dark:from-primary-900/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-primary-50/15 dark:to-primary-900/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Motion Graphics inside each service card */}
                <div className="absolute inset-0">
                  {/* Rotating border */}
                  <motion.div
                    className="absolute inset-0 border border-primary-300/20 rounded-2xl"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Floating dots */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
                      style={{
                        left: `${15 + i * 25}%`,
                        top: `${25 + (i % 2) * 35}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 2.5 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {/* Pulsing background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 relative`}>
                    {/* Animated icon background */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 