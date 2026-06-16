import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import { SiReact, SiDjango, SiPostgresql } from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "React.js Specialist",
  "Cybersecurity Learner",
  "UI/UX Enthusiast"
];

function WebDevHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-4 pb-10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {/* Subtle dot matrix background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-cyan-300/30 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -60, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-indigo-400/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-indigo-200 bg-white/50 backdrop-blur-sm text-indigo-700 text-sm font-semibold shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.1] mb-6 text-slate-900 tracking-tight">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600">
              Akash Prajapati
            </span>
          </h1>

          <div className="h-12 sm:h-14 mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-3xl md:text-4xl text-slate-700 font-bold"
              >
                {roles[currentRoleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
          >
            I architect secure, scalable web applications with modern tech stacks, merging beautiful frontend experiences with robust backend engineering.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Akash_Prajapati_resume.pdf"
              download="Akash_Prajapati_resume.pdf"
              target="_blank"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md transition-all hover:-translate-y-1"
            >
              Resume
              <FaDownload className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-6 mt-12 text-2xl"
          >
            <a href="https://github.com/Prajapati-Akash-3000" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm hover:shadow-md">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/akash-prajapati-3a2a8039b/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm hover:shadow-md">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
            {/* Rotating glowing border effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-[4rem] blur-xl opacity-30 animate-[spin_8s_linear_infinite]"></div>
            
            {/* The Squircle Profile Image */}
            <div className="w-full h-full p-2 bg-white rounded-[3rem] shadow-2xl relative z-10">
              <img
                src="/Profile.png"
                alt="Akash Prajapati"
                className="w-full h-full object-cover rounded-[2.5rem] bg-slate-100"
              />
            </div>

            {/* Floating Tech Badge 1 (React) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-right-10 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center gap-1"
            >
              <SiReact className="text-4xl text-cyan-500" />
              <span className="text-xs font-bold text-slate-700">React.js</span>
            </motion.div>

            {/* Floating Tech Badge 2 (Django) */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 md:-left-12 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center gap-1"
            >
              <SiDjango className="text-4xl text-emerald-600" />
              <span className="text-xs font-bold text-slate-700">Django</span>
            </motion.div>

            {/* Floating Tech Badge 3 (PostgreSQL) */}
            <motion.div 
              animate={{ y: [-8, 12, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 right-10 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center gap-1"
            >
              <SiPostgresql className="text-4xl text-blue-500" />
              <span className="text-xs font-bold text-slate-700">Postgres</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WebDevHero;
