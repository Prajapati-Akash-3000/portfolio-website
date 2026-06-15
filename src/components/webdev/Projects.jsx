import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaProjectDiagram, FaTimes, FaServer, FaCode, FaDatabase, FaRocket, FaLock, FaCalendarAlt, FaMoneyBillWave, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const keyFeatures = [
  { category: "Security", features: ["JWT Auth", "Role-Based Access"], icon: <FaLock />, color: "text-orange-400 border-orange-400/20 bg-orange-400/10", shadow: "shadow-orange-500/20" },
  { category: "Events", features: ["Event Creation", "Manager Hiring"], icon: <FaCalendarAlt />, color: "text-blue-400 border-blue-400/20 bg-blue-400/10", shadow: "shadow-blue-500/20" },
  { category: "Business", features: ["Razorpay Integration", "Commission Logic"], icon: <FaMoneyBillWave />, color: "text-green-400 border-green-400/20 bg-green-400/10", shadow: "shadow-green-500/20" },
  { category: "UX", features: ["Digital Invites", "Media Uploads"], icon: <FaPaintBrush />, color: "text-purple-400 border-purple-400/20 bg-purple-400/10", shadow: "shadow-purple-500/20" },
  { category: "Analytics", features: ["Revenue Dashboard", "Manager Reports"], icon: <FaChartLine />, color: "text-pink-400 border-pink-400/20 bg-pink-400/10", shadow: "shadow-pink-500/20" }
];

const utsavoraStack = [
  { name: 'React', color: 'text-cyan-600', dot: 'bg-cyan-500', bg: 'bg-cyan-50 border-cyan-200 hover:shadow-cyan-500/20' },
  { name: 'Django REST', color: 'text-emerald-700', dot: 'bg-emerald-600', bg: 'bg-emerald-50 border-emerald-200 hover:shadow-emerald-500/20' },
  { name: 'PostgreSQL', color: 'text-blue-700', dot: 'bg-blue-600', bg: 'bg-blue-50 border-blue-200 hover:shadow-blue-500/20' },
  { name: 'Tailwind CSS', color: 'text-teal-600', dot: 'bg-teal-500', bg: 'bg-teal-50 border-teal-200 hover:shadow-teal-500/20' },
  { name: 'Razorpay', color: 'text-indigo-600', dot: 'bg-indigo-500', bg: 'bg-indigo-50 border-indigo-200 hover:shadow-indigo-500/20' },
  { name: 'JWT Auth', color: 'text-fuchsia-600', dot: 'bg-fuchsia-500', bg: 'bg-fuchsia-50 border-fuchsia-200 hover:shadow-fuchsia-500/20' },
  { name: 'Framer Motion', color: 'text-pink-600', dot: 'bg-pink-500', bg: 'bg-pink-50 border-pink-200 hover:shadow-pink-500/20' },
  { name: 'Recharts', color: 'text-orange-600', dot: 'bg-orange-500', bg: 'bg-orange-50 border-orange-200 hover:shadow-orange-500/20' }
];

const pasteAppStack = [
  { name: 'React.js', color: 'text-cyan-400', dot: 'bg-cyan-400', style: 'border-cyan-400/30 hover:bg-cyan-400/10 hover:shadow-cyan-400/20 hover:border-cyan-400/60' },
  { name: 'Local Storage', color: 'text-amber-400', dot: 'bg-amber-400', style: 'border-amber-400/30 hover:bg-amber-400/10 hover:shadow-amber-400/20 hover:border-amber-400/60' },
  { name: 'React Router', color: 'text-rose-400', dot: 'bg-rose-400', style: 'border-rose-400/30 hover:bg-rose-400/10 hover:shadow-rose-400/20 hover:border-rose-400/60' },
  { name: 'Tailwind CSS', color: 'text-teal-400', dot: 'bg-teal-400', style: 'border-teal-400/30 hover:bg-teal-400/10 hover:shadow-teal-400/20 hover:border-teal-400/60' },
  { name: 'Vite', color: 'text-purple-400', dot: 'bg-purple-400', style: 'border-purple-400/30 hover:bg-purple-400/10 hover:shadow-purple-400/20 hover:border-purple-400/60' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

function WebDevProjects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-32 relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Modern Dot/Grid Matrix */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        
        {/* Massive Ambient Glow Meshes */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-10%] w-[800px] h-[800px] bg-indigo-400/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[-10%] w-[900px] h-[900px] bg-purple-400/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px]"
        />

        {/* Floating Ambient Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * -200 - 100],
              x: [0, (Math.random() - 0.5) * 150],
              opacity: [0, 0.8, 0],
              scale: [0, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-cyan-400' : i % 2 === 0 ? 'bg-purple-400' : 'bg-indigo-400'} blur-[1px]`}
            style={{
              width: Math.random() * 8 + 3 + "px",
              height: Math.random() * 8 + 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: 0.4
            }}
          />
        ))}
      </div>

      <div className="text-center mb-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-2xl shadow-xl shadow-indigo-100/50 rotate-3 hover:rotate-6 transition-transform"
        >
          <FaRocket className="text-3xl text-indigo-500" />
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight relative z-10">Featured Projects</h2>
      </div>
      
      {/* ================= PROJECT 1: UTSAVORA (BENTO GRID) ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Main Hero Tile with Animated Dashboard Mockup */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-8 relative bg-white rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem] p-10 md:p-14 shadow-xl border border-indigo-50 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-bl-[10rem] -z-10 group-hover:scale-[1.02] transition-transform duration-700 ease-out"></div>
            
            {/* Animated Abstract Dashboard UI (Desktop Only) */}
            <div className="hidden lg:flex absolute right-[-5%] bottom-[-10%] w-[55%] h-[80%] bg-white/70 backdrop-blur-xl border border-white/80 rounded-t-[2rem] rounded-l-[2rem] shadow-2xl flex-col p-5 transform rotate-[-4deg] group-hover:rotate-[-1deg] group-hover:-translate-y-4 transition-all duration-700 pointer-events-none z-0">
              <div className="flex gap-1.5 pb-4 border-b border-gray-100">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex gap-4 h-full mt-4">
                 {/* Sidebar Mockup */}
                 <div className="w-1/3 h-full bg-gray-50 rounded-xl space-y-3 p-3 border border-gray-100">
                    <motion.div animate={{ width: ['40%', '80%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-2 bg-indigo-200 rounded-full"></motion.div>
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-gray-200 rounded-full mt-8"></div>
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                 </div>
                 {/* Main Content Mockup */}
                 <div className="flex-1 flex flex-col gap-4">
                    <div className="h-8 w-1/2 bg-indigo-50 rounded-lg"></div>
                    {/* Animated Chart Area */}
                    <div className="flex-1 bg-gradient-to-t from-indigo-50 to-white rounded-xl flex items-end p-4 gap-2 border border-indigo-100">
                       {[30, 60, 45, 80, 55, 90].map((h, i) => (
                         <motion.div 
                           key={i} 
                           animate={{ height: [`${h}%`, `${h+15}%`, `${h}%`] }} 
                           transition={{ duration: 2.5, repeat: Infinity, delay: i*0.15, ease: "easeInOut" }} 
                           className="flex-1 bg-indigo-400 rounded-t-sm shadow-sm"
                         ></motion.div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>

            <div className="relative z-10 lg:w-[60%]">
              <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 font-bold text-sm rounded-xl mb-6 shadow-sm border border-indigo-100">
                SaaS Platform
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">Utsavora</h3>
              <p className="text-xl text-gray-500 mb-8 font-medium">Comprehensive Event Management Ecosystem</p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                A full-stack ecosystem that seamlessly connects users with verified event managers. Features include real-time event creation, manager hiring, digital invitation generation, and robust role-based administrative dashboards.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Prajapati-Akash-3000/Utsavora/tree/master/utsavora" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-[1.2rem] bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/20 active:translate-y-0">
                  <FaGithub className="text-xl" /> View Source
                </a>
                <button onClick={() => setActiveModal('detailed')} className="flex items-center gap-2 px-6 py-3.5 rounded-[1.2rem] bg-white text-indigo-600 font-bold border-2 border-indigo-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/10 active:translate-y-0">
                  <FaProjectDiagram className="text-xl" /> Architecture
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats Tile */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-4 bg-indigo-600 text-white rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] p-10 flex flex-col justify-center shadow-xl shadow-indigo-600/20 relative overflow-hidden group"
          >
            {/* Animated Background Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -right-20 w-64 h-64 border-[40px] border-indigo-500/30 rounded-full"
            ></motion.div>

            <div className="absolute -bottom-10 -right-10 text-[10rem] opacity-10 group-hover:scale-110 transition-transform duration-500"><FaProjectDiagram /></div>
            <h4 className="text-indigo-200 font-bold tracking-widest text-sm uppercase mb-8 relative z-10">Scale & Impact</h4>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 relative z-10">
              <motion.div whileHover={{ scale: 1.1 }} className="origin-left">
                <div className="text-4xl font-black mb-1">3</div>
                <div className="text-indigo-200 text-sm font-medium">User Roles</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="origin-left">
                <div className="text-4xl font-black mb-1">18</div>
                <div className="text-indigo-200 text-sm font-medium">Templates</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="origin-left">
                <div className="text-4xl font-black mb-1">20+</div>
                <div className="text-indigo-200 text-sm font-medium">Core Features</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="origin-left">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-indigo-200 text-sm font-medium">Secure Auth</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Stack Tile */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-4 bg-[#0A0F1C] rounded-[2rem] p-10 shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group"
          >
            {/* Premium Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-700 pointer-events-none"></div>
            
            {/* Large faint background icon */}
            <div className="absolute -bottom-10 -left-10 text-[15rem] text-cyan-500 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-700">
              <FaCode />
            </div>

            <h4 className="text-slate-500 font-bold tracking-widest text-sm uppercase mb-8 relative z-10 flex items-center gap-2">
              <FaCode className="text-cyan-500" /> Technology Stack
            </h4>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {utsavoraStack.map((tech, i) => (
                <motion.div 
                  key={tech.name} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 shadow-lg rounded-xl cursor-pointer transition-colors duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${tech.dot} shadow-[0_0_8px_currentColor]`}></div>
                  <span className={`text-sm font-bold tracking-wide text-slate-200`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-indigo-950 via-[#0f0c29] to-[#0A0F1C] rounded-[2rem] p-10 shadow-2xl border border-white/10 relative overflow-hidden group"
          >
            {/* Premium Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f111_1px,transparent_1px),linear-gradient(to_bottom,#6366f111_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            {/* Background Texture/Glow */}
            <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
            
            {/* Large faint background icon */}
            <div className="absolute -bottom-10 -right-10 text-[15rem] text-indigo-500 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-700">
              <FaProjectDiagram />
            </div>

            <h4 className="text-indigo-400 font-bold tracking-widest text-sm uppercase mb-8 relative z-10 flex items-center gap-2">
              <FaProjectDiagram className="text-indigo-500" /> Core Modules
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
              {keyFeatures.map((group) => (
                <motion.div 
                  key={group.category} 
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-5 ${group.color} ${group.shadow} shadow-lg`}>
                    {group.icon}
                  </div>
                  <h5 className="text-lg font-bold text-white mb-4">{group.category}</h5>
                  <ul className="space-y-3 mt-auto">
                    {group.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium">
                        <FaCheckCircle className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================= PROJECT 2: PASTEAPP (BENTO GRID) ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-7 relative bg-white rounded-[2rem] rounded-tl-[5rem] rounded-br-[5rem] p-10 md:p-14 shadow-xl border border-blue-50 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/50 to-cyan-50/50 rounded-bl-[10rem] -z-10 group-hover:scale-[1.02] transition-transform duration-700 ease-out"></div>
            
            {/* Animated Code Mockup (Desktop Only) */}
            <div className="hidden lg:flex absolute right-[-5%] top-[-10%] w-[50%] h-[70%] bg-slate-900 rounded-[2rem] shadow-2xl flex-col overflow-hidden transform rotate-[3deg] group-hover:rotate-[0deg] group-hover:translate-y-4 transition-all duration-700 pointer-events-none z-0 border border-slate-700">
               <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-auto text-xs font-mono text-slate-500">snippet.js</span>
               </div>
               <div className="p-5 font-mono text-xs md:text-sm text-slate-300 leading-loose">
                  <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    <span className="text-pink-400">import</span> {'{'} useState {'}'} <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;
                  </motion.div>
                  <div className="mt-2">
                    <span className="text-blue-400">const</span> <span className="text-yellow-200">PasteApp</span> = () =&gt; {'{'}
                  </div>
                  <div className="ml-4 mt-1">
                    <span className="text-blue-400">const</span> [text, setText] = <span className="text-cyan-300">useState</span>(<span className="text-green-300">''</span>);
                  </div>
                  <div className="ml-4 mt-2 text-slate-500">// Auto-saves to LocalStorage</div>
                  <div className="mt-2">{'}'}</div>
                  
                  {/* Blinking Cursor */}
                  <div className="w-2 h-4 bg-blue-400 mt-2 animate-pulse"></div>
               </div>
            </div>

            <div className="relative z-10 lg:w-[65%]">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 font-bold text-sm rounded-xl mb-6 shadow-sm border border-blue-100">
                Frontend Utility
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">PasteApp</h3>
              <p className="text-xl text-gray-500 mb-8 font-medium">React-Based Paste Sharing Application</p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                A lightning-fast, client-side paste-sharing utility built to securely create, edit, organize, and manage text snippets. Utilizes persistent local storage and dynamic routing for a seamless user experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://paste-app-ochre-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-[1.2rem] bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 active:translate-y-0">
                  <FaExternalLinkAlt className="text-lg" /> Live Demo
                </a>
                <a href="https://github.com/Prajapati-Akash-3000/PasteApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-[1.2rem] bg-white text-gray-700 font-bold border-2 border-gray-200 hover:border-gray-400 transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0">
                  <FaGithub className="text-xl" /> Source
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-[2rem] p-10 shadow-xl relative overflow-hidden group"
          >
            {/* Animated Code Symbol */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 text-[12rem] opacity-5 text-blue-500 group-hover:text-blue-400 transition-colors pointer-events-none"
            >
              <FaCode />
            </motion.div>
            
            <h4 className="text-slate-400 font-bold tracking-widest text-sm uppercase mb-8 relative z-10">Tech Stack & Highlights</h4>
            
            <ul className="space-y-4 mb-10 relative z-10">
              {['One-click copy and sharing', 'Fast client-side navigation', 'Persistent local storage architecture'].map(feature => (
                <motion.li key={feature} whileHover={{ x: 5 }} className="flex items-center gap-3 text-slate-300 cursor-default transition-transform">
                  <FaCheckCircle className="text-blue-400 flex-shrink-0" size={18} />
                  <span className="font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
              {pasteAppStack.map((tech, i) => (
                <motion.div 
                  key={tech.name} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  className={`flex items-center gap-2.5 px-4 py-2 bg-slate-800/80 border shadow-sm rounded-2xl cursor-pointer transition-all duration-300 ${tech.style}`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${tech.dot} shadow-[0_0_8px_currentColor]`}></div>
                  <span className={`text-sm font-bold tracking-wide ${tech.color}`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================= ARCHITECTURE MODAL ================= */}
      {createPortal(
        <AnimatePresence>
          {activeModal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 left-0 w-full h-[100dvh] z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md" onClick={() => setActiveModal(null)}>
              <motion.div initial={{ scale: 0.9, opacity: 0, rotateX: 15 }} animate={{ scale: 1, opacity: 1, rotateX: 0 }} exit={{ scale: 0.9, opacity: 0, rotateX: -15 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-[3rem] p-8 md:p-14 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-100 shadow-2xl hide-scrollbar" style={{ perspective: '1000px' }}>
                <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-4 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-gray-400 outline-none"><FaTimes size={20} /></button>
                
                <div className="text-center mb-16">
                  <h4 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">System Architecture</h4>
                  <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded-full mb-4"></div>
                  <p className="text-gray-500 text-lg font-medium">Structural Overview of Utsavora</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {/* Frontend */}
                  <div className="p-8 bg-indigo-50/50 border border-indigo-100 rounded-[2rem] rounded-tr-[4rem] group hover:bg-indigo-50 transition-colors">
                    <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600 shadow-sm"><FaCode /></div>
                      Frontend
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Tailwind CSS', 'Framer Motion', 'Axios'].map(tech => (
                        <span key={tech} className="px-4 py-2 bg-white border border-indigo-100 rounded-xl text-sm text-indigo-900 font-bold shadow-sm">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="p-8 bg-purple-50/50 border border-purple-100 rounded-[2rem] rounded-tl-[4rem] group hover:bg-purple-50 transition-colors">
                    <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-3 bg-purple-100 rounded-2xl text-purple-600 shadow-sm"><FaServer /></div>
                      Backend
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Django', 'DRF', 'JWT Auth', 'Razorpay API'].map(tech => (
                        <span key={tech} className="px-4 py-2 bg-white border border-purple-100 rounded-xl text-sm text-purple-900 font-bold shadow-sm">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div className="p-8 bg-pink-50/50 border border-pink-100 rounded-[2rem] rounded-bl-[4rem] group hover:bg-pink-50 transition-colors">
                    <h5 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-3 bg-pink-100 rounded-2xl text-pink-600 shadow-sm"><FaDatabase /></div>
                      Database
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['PostgreSQL', 'Redis (Cache)', 'AWS S3 (Media)'].map(tech => (
                        <span key={tech} className="px-4 py-2 bg-white border border-pink-100 rounded-xl text-sm text-pink-900 font-bold shadow-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-[2rem] text-center border border-gray-100">
                  <p className="text-gray-600 font-medium text-lg">The platform utilizes a decoupled architecture where the React frontend communicates securely with the Django backend via RESTful APIs and JWT tokens.</p>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      
      {/* Hide scrollbar styles embedded for horizontal scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}

export default WebDevProjects;
