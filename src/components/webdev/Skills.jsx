import { motion } from 'framer-motion';
import { FaReact, FaJs, FaPython, FaServer, FaGitAlt, FaGithub, FaLinux, FaShieldAlt, FaDatabase, FaCode, FaLaptopCode, FaServer as FaServerAlt, FaTools } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiFramer, SiDjango, SiJsonwebtokens, SiPostgresql, SiMysql, SiAxios, SiRazorpay } from 'react-icons/si';
import { FaWpforms } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } }
};

function WebDevSkills() {
  const frontendSkills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "MUI", icon: <SiMui className="text-[#007FFF]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-black" /> },
    { name: "React Hook Form", icon: <FaWpforms className="text-[#EC5990]" /> }
  ];

  const backendSkills = [
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango className="text-emerald-500" /> },
    { name: "Django REST", icon: <SiDjango className="text-emerald-400" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-white" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-400" /> }
  ];

  const dbSkills = [
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Oracle", icon: <FaDatabase className="text-[#F80000]" /> }
  ];

  const toolSkills = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Axios", icon: <SiAxios className="text-[#5A29E4]" /> },
    { name: "Razorpay", icon: <SiRazorpay className="text-[#3395FF]" /> },
    { name: "Linux", icon: <FaLinux className="text-white" /> },
    { name: "Cybersecurity", icon: <FaShieldAlt className="text-green-500" /> }
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-slate-50/50">
      {/* Massive Section Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 blur-[120px]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-2xl shadow-xl shadow-cyan-100/50 rotate-3"
          >
            <FaCode className="text-3xl text-cyan-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Arsenal</span>
          </h2>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* ================= FRONTEND (Light, Wide) ================= */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-8 relative bg-white/80 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white overflow-hidden group"
          >
            {/* Animated React Logo Background */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 text-[35rem] text-[#61DAFB] opacity-[0.03] pointer-events-none group-hover:text-cyan-400 group-hover:opacity-[0.05] transition-colors duration-700"
            >
              <FaReact />
            </motion.div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-3xl mb-8 border border-cyan-100 shadow-sm">
                <FaLaptopCode />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 tracking-tight">Frontend Engineering</h3>
              
              <div className="flex flex-wrap gap-4">
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={pillVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all cursor-default"
                  >
                    <span className="text-2xl drop-shadow-sm">{skill.icon}</span>
                    <span className="text-base font-bold text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= BACKEND (Dark, Tall) ================= */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-4 relative bg-[#0B1120] rounded-[3rem] p-10 shadow-2xl border border-slate-800 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="absolute -bottom-10 -right-10 text-[15rem] text-emerald-500 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-700">
              <FaServerAlt />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-3xl mb-8 border border-emerald-500/20 shadow-sm">
                <FaServerAlt />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 tracking-tight">Backend Architecture</h3>
              
              <div className="flex flex-col gap-4 mt-auto">
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={pillVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/5 shadow-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all cursor-default"
                  >
                    <span className="text-2xl drop-shadow-sm">{skill.icon}</span>
                    <span className="text-base font-bold text-slate-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= DATABASE (Light, Tall) ================= */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-4 relative bg-indigo-50/50 backdrop-blur-xl rounded-[3rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-indigo-100 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f111_1px,transparent_1px),linear-gradient(to_bottom,#6366f111_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none"></div>
            
            <div className="absolute -bottom-10 -right-10 text-[15rem] text-indigo-600 opacity-5 pointer-events-none group-hover:opacity-10 group-hover:-translate-y-4 transition-all duration-700">
              <FaDatabase />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-3xl mb-8 border border-indigo-200 shadow-sm">
                <FaDatabase />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-indigo-950 mb-8 tracking-tight">Database Management</h3>
              
              <div className="flex flex-col gap-4 mt-auto">
                {dbSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={pillVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/80 border border-indigo-50 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-default"
                  >
                    <span className="text-2xl drop-shadow-sm">{skill.icon}</span>
                    <span className="text-base font-bold text-gray-800">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= TOOLS & SECURITY (Dark, Wide) ================= */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 lg:col-span-8 relative bg-[#0B1120] rounded-[3rem] p-10 md:p-14 shadow-2xl border border-slate-800 overflow-hidden group"
          >
            {/* Animated Hackery Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-3xl mb-8 border border-rose-500/20 shadow-sm">
                <FaTools />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 tracking-tight">Tools & Security</h3>
              
              <div className="flex flex-wrap gap-4">
                {toolSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={pillVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 hover:border-rose-500/40 transition-all cursor-default"
                  >
                    <span className="text-2xl drop-shadow-sm">{skill.icon}</span>
                    <span className="text-base font-bold text-slate-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default WebDevSkills;
