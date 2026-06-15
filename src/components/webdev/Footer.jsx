import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

function WebDevFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Main CTA & Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
            >
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">extraordinary.</span>
            </motion.h2>
            <p className="text-slate-400 text-lg font-medium max-w-xl">
              Open for opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Prajapati-Akash-3000" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/akash-prajapati-3a2a8039b/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:akashprj3000@gmail.com" className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] transition-all duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12"></div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-medium relative z-20">
          <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
            <span>Built with React & Tailwind</span>
            <FaHeart className="text-red-500 animate-pulse" />
          </div>

          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Akash Prajapati. All Rights Reserved.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:text-white transition-colors group"
          >
            <span className="tracking-wide uppercase text-xs font-bold">Back to top</span>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-500 group-hover:-translate-y-2 transition-all duration-300">
              <FaArrowUp size={14} />
            </div>
          </button>
        </div>

        {/* Massive Background Typography */}
        <div className="absolute bottom-[-5%] left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none z-0">
          <h1 className="text-[12vw] font-black whitespace-nowrap leading-none tracking-tighter">
            AKASH PRAJAPATI
          </h1>
        </div>

      </div>
    </footer>
  );
}

export default WebDevFooter;
