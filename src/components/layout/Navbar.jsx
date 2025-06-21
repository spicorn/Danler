import { useState, useEffect } from "react";
import { content } from "../../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

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
        className="sm:cursor-pointer fixed top-10 left-6 z-[999] rounded-lg bg-gray-800/40 p-2 backdrop-blur-md hover:bg-gray-800/60 transition-colors lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} className="text-white" />
      </div>

      {/* Desktop Navbar Control - Top left for laptop */}
      <motion.button
        className="hidden lg:flex fixed top-10 left-6 z-[999] w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-md items-center justify-center cursor-pointer shadow-lg border border-gray-700/50 hover:bg-gray-800/80 transition-colors"
        onClick={toggleNavbar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: isNavbarVisible ? 0 : -20,
          opacity: isNavbarVisible ? 1 : 0.7
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FiMenu className="w-6 h-6 text-white" />
      </motion.button>

      {/* Desktop Navigation - Bottom of screen */}
      <motion.nav 
        className="hidden lg:flex fixed bottom-10 z-[999] items-center gap-5 bg-gray-800/60 px-6 py-3 backdrop-blur-md rounded-full text-white border border-gray-700/50 shadow-lg"
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
     ${i === active ? "bg-primary-500 text-white shadow-lg" : "hover:bg-gray-700/50"} `}
            title={item.link.replace('#', '').charAt(0).toUpperCase() + item.link.slice(2)}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </motion.nav>

      {/* Mobile Navigation - Bottom of screen */}
      <nav
        className={`lg:hidden fixed z-[999] flex items-center gap-5 bg-gray-800/60 px-6 py-3 backdrop-blur-md rounded-full text-white border border-gray-700/50 shadow-lg duration-300 ${
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
     ${i === active ? "bg-primary-500 text-white shadow-lg" : "hover:bg-gray-700/50"} `}
            title={item.link.replace('#', '').charAt(0).toUpperCase() + item.link.slice(2)}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
