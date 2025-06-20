import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import danler from '../../assets/images/Hero/danler.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'FaWhatsapp',
      icon: FaWhatsapp,
      url: 'https://wa.me/+263787828366',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/danler_tech',
    },

    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/danler_tech',
    },

    {
      name: 'Phone',
      icon: FiPhone,        
      url: 'tel:078 782 8366 / 077 703 3766',
    },      
    
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:danlertechnologies@gmail.com',
    },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Website Design', href: '#services' },
        { name: 'Digital Marketing', href: '#services' },
        { name: 'SEO Optimization', href: '#services' },
        { name: 'Graphic Design & Branding', href: '#services' },
        { name: 'WebApp Development', href: '#services' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        {/* Primary animated shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-primary-500/10 rounded-full"
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
          className="absolute top-20 right-20 w-24 h-24 border border-primary-400/10 rounded-lg"
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
          className="absolute bottom-20 left-1/4 w-20 h-20 border border-primary-300/10"
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
          className="absolute bottom-10 right-10 w-16 h-16 border border-primary-500/10 rounded-full"
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

        {/* Additional animated shapes */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-12 h-12 border border-primary-400/10"
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
        <motion.div
          className="absolute top-2/3 right-1/4 w-14 h-14 border border-primary-300/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-10 h-10 border border-primary-500/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-8 h-8 border border-primary-400/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Enhanced floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Additional floating elements with different patterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`element-${i}`}
            className="absolute w-1 h-1 bg-primary-300/40 rounded-full"
            style={{
              left: `${70 + i * 4}%`,
              top: `${60 + (i % 3) * 12}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Diagonal floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`diagonal-${i}`}
            className="absolute w-1.5 h-1.5 bg-primary-500/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${80 + (i % 2) * 8}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 12, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Pulsing circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute border border-primary-400/20 rounded-full"
            style={{
              left: `${40 + i * 20}%`,
              top: `${30 + i * 15}%`,
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-900/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary-800/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-full  flex items-center justify-center ">
                
                <img 
                  src={danler}
                  alt="DanlerTech Logo" 
                  className="w-15 h-15 object-contain"
                  loading="lazy"
                />
                
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold text-white"
              >
                Danler Tech
              </motion.h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm"
            >
              Transforming ideas into digital reality. We create innovative solutions
              that drive business growth and success.
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    color: '#6366f1',
                    rotate: 360,
                  }}
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 + linkIndex * 0.05 }}
                    whileHover={{ 
                      x: 5,
                      color: '#6366f1',
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Customer-Attracting Quote/Animation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            {/* Smiling Emoji at the Top */}
            <div className="w-12 h-12 mb-2 flex items-center justify-center text-3xl">
              <span role="img" aria-label="smile">😊</span>
            </div>
            <motion.p
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="text-lg font-semibold text-primary-400 mb-2"
            >
              "Let's build something amazing together. Your vision, our expertise."
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            © {currentYear} Danler Tech. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 