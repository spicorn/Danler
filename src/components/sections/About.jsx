import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiUsers, FiAward, FiCode, FiCoffee } from 'react-icons/fi';
import Spline from '@splinetool/react-spline';
import { isMobile } from '../../utils/isMobile';


gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: FiUsers,
    value: '100+',
    label: 'Happy Clients',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiAward,
    value: '5+',
    label: 'Projects Completed',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiCode,
    value: '1k+',
    label: 'Quality Lines of Code',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiCoffee,
    value: '50+',
    label: 'Customer Satisifactory',
    color: 'from-red-500 to-red-600',
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const splineParallaxRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const statVariants = {
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
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-10 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        backgroundSize: '100% 100%',
      }}
    >
      {/* Motion Graphics Background */}
      <div className="absolute inset-0">
        {/* Spline 3D About Background with Parallax and Glow */}
        <div
          ref={splineParallaxRef}
          className="absolute inset-0 z-0 transition-transform duration-300"
          style={{
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 60px #7f9cf5) blur(0.5px)',
            opacity: 0.90,
          }}
        >
          {!isMobile() && (
            <Spline scene="https://prod.spline.design/LEvjG3OETYd2GsRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 border border-primary-300/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
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
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-16 h-16 border border-primary-500/20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 22,
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
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-400/30 rounded-full"
            style={{
              left: `${15 + i * 14}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/15 via-transparent to-transparent dark:from-primary-900/8" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-primary-50/10 dark:to-primary-900/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
              About DanlerTech
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating
              exceptional digital experiences. Our mission is to help businesses thrive
              in the digital age through innovative solutions and cutting-edge technology.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With years of experience in web development, mobile apps, and cloud
              solutions, we bring your ideas to life with precision and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Motion Graphics inside each stat card */}
                  <div className="absolute inset-0">
                    {/* Rotating border */}
                    <motion.div
                      className="absolute inset-0 border border-primary-300/20 rounded-2xl"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Floating dots */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}

                    {/* Pulsing background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 relative`}>
                      {/* Animated icon background */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <stat.icon className="w-6 h-6 text-white relative z-10" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 