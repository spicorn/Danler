import { useState, useEffect } from "react";
import { content } from "../../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="w-full flex justify-center">
      {/* Mobile Menu Button - Top left for mobile */}
      <div
        className="sm:cursor-pointer fixed top-10 left-6 z-[999] rounded-lg bg-white/40 dark:bg-gray-800/40 p-2 backdrop-blur-md hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} className="text-gray-800 dark:text-white" />
      </div>

      {/* Desktop Navbar Control - Top left for laptop */}
      <motion.button
        className="hidden lg:flex fixed top-10 left-6 z-[999] w-12 h-12 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md items-center justify-center cursor-pointer shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
        onClick={toggleNavbar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: isNavbarVisible ? 0 : -20,
          opacity: isNavbarVisible ? 1 : 0.7
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
      </motion.button>

      {/* Desktop Navigation - Bottom of screen */}
      <motion.nav 
        className="hidden lg:flex fixed bottom-10 z-[999] items-center gap-5 bg-white/60 dark:bg-gray-800/60 px-6 py-3 backdrop-blur-md rounded-full text-gray-800 dark:text-white border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
        animate={{ 
          y: isNavbarVisible ? 0 : 100,
          opacity: isNavbarVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              setActive(i);
              scrollToSection(item.link);
            }}
            className={`text-xl p-2.5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110
     ${i === active ? "bg-primary-500 text-white shadow-lg" : "hover:bg-gray-300/50 dark:hover:bg-gray-700/50"} `}
            title={item.link.replace('#', '').charAt(0).toUpperCase() + item.link.slice(2)}
          >
            {createElement(item.icon)}
          </a>
        ))}
        
        {/* Theme Switcher */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'light' ? (
              <FiMoon className="w-5 h-5 text-gray-800 dark:text-white" />
            ) : (
              <FiSun className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Mobile Navigation - Bottom of screen */}
      <nav
        className={`lg:hidden fixed z-[999] flex items-center gap-5 bg-white/60 dark:bg-gray-800/60 px-6 py-3 backdrop-blur-md rounded-full text-gray-800 dark:text-white border border-gray-200/50 dark:border-gray-700/50 shadow-lg duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              setActive(i);
              scrollToSection(item.link);
            }}
            className={`text-xl p-2.5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110
     ${i === active ? "bg-primary-500 text-white shadow-lg" : "hover:bg-gray-300/50 dark:hover:bg-gray-700/50"} `}
            title={item.link.replace('#', '').charAt(0).toUpperCase() + item.link.slice(2)}
          >
            {createElement(item.icon)}
          </a>
        ))}
        
        {/* Theme Switcher for Mobile */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'light' ? (
              <FiMoon className="w-5 h-5 text-gray-800 dark:text-white" />
            ) : (
              <FiSun className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </motion.div>
        </motion.button>
      </nav>
    </div>
  );
};

export default Navbar;
