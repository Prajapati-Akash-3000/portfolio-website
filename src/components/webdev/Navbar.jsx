import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from "../ThemeToggle";

function WebDevNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="w-full">
      <div className="backdrop-blur-md border border-gray-200/80 bg-white/70 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center transition-colors duration-300">
        
        <a href="#" className="font-black text-2xl text-gray-900 tracking-tight">
          Akash<span className="text-indigo-500">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-sm text-gray-600">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl py-4 px-6 flex flex-col gap-4 font-semibold text-gray-600 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="hover:text-indigo-600 hover:bg-gray-50 px-4 py-2 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default WebDevNavbar;
