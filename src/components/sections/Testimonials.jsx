import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import Spline from '@splinetool/react-spline';
import avatar1 from '/images/avatar1.png';
import avatar2 from '/images/avatar2.png';
import avatar3 from '/images/avatar3.png';
import { isMobile } from '../../utils/isMobile';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Solar Flair Zimbabwe',    
    image: avatar1,
    content: 'DanlerTech transformed our business with their innovative marketing skills. The team delivered exceptional results that exceeded our expectations. Highly recommended!',
    rating: 4,
    project: 'Digital Marketing',
  },
  {
    id: 2,
    name: 'Associated Foods Zimbabwe',        
    image: avatar2,
    content: 'Working with DanlerTech was a game-changer for our company. Their expertise in website development helped us scale rapidly.',
    rating: 5,
    project: 'Website',
  },
  {
    id: 3,
    name: 'Ronald Mhizha',
    image: avatar3,
    content: 'The team at DanlerTech is incredibly professional and talented. They do delivere well on advertising and handling their customers with care.The quality of work is outstanding.',
    rating: 5,
    project: 'Happy Customer',
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const splineParallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the background
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

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (newDirection > 0) {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-10 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spline 3D Testimonials Background with Parallax and Glow */}
        <div
          ref={splineParallaxRef}
          className="absolute inset-0 z-0 transition-transform duration-300"
          style={{
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 60px #7f9cf5) blur(0.5px)',
            opacity: 0.90,
          }}
        >
            <Spline scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our clients have to say about working with DanlerTech.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 sm:h-96 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center"
                    >
                      <FiMessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                    </motion.div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 text-center mb-6 sm:mb-8 flex-grow leading-relaxed"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
                    />
                    <div className="text-center sm:text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-1 sm:space-x-2 items-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              100%
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              5
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              5.0
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 