import { motion } from "framer-motion";
import { FaGraduationCap, FaPython, FaRocket, FaShieldAlt, FaEnvelope, FaUserAstronaut, FaCodeBranch } from "react-icons/fa";

function WebDevAbout() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 relative">
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3 mb-6 bg-indigo-50 rounded-2xl shadow-inner rotate-[-3deg]"
        >
          <span className="text-3xl">👋</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Journey</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 relative overflow-hidden group">
            {/* Decorative background blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-[80px] -z-10 group-hover:bg-indigo-200 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-100 transition-colors duration-700"></div>
            
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-indigo-500/30">
              <FaUserAstronaut />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
              Architecting Digital Experiences
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Hello! I'm <span className="text-indigo-600 font-bold">Akash Prajapati</span>, a passionate developer dedicated to building secure, scalable, and visually stunning web applications. 
              </p>
              <p>
                My journey spans across the entire stack. From crafting premium user interfaces with React and Tailwind CSS, to architecting robust backend infrastructures using Python, Django, and PostgreSQL.
              </p>
              <p>
                Beyond standard development, I have a deep and growing interest in <span className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded-lg border border-cyan-100 font-bold">Cybersecurity</span>. I believe that true engineering doesn't just look good—it must be fortified, resilient, and built to withstand the demands of the modern web.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6 justify-between">
               <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center text-indigo-500 shadow-sm"><FaCodeBranch /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-50 flex items-center justify-center text-purple-500 shadow-sm"><FaShieldAlt /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-cyan-50 flex items-center justify-center text-cyan-500 shadow-sm"><FaRocket /></div>
               </div>
               <a 
                 href="#contact" 
                 className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-indigo-600 transition-colors font-bold shadow-lg shadow-gray-900/20"
               >
                 <FaEnvelope /> Let's Connect
               </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Journey Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Card 1 */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-transform duration-300 flex items-start gap-6 group">
            <div className="w-14 h-14 shrink-0 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">BCA Graduate</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Built a strong foundation in computer science, algorithms, and software engineering principles.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-transform duration-300 flex items-start gap-6 group">
            <div className="w-14 h-14 shrink-0 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <FaPython />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Backend Intern</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Gained real-world experience developing robust Python & Django REST architectures.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 md:p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-500/20 hover:-translate-y-2 transition-transform duration-300 flex items-start gap-6 group relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-7xl text-white opacity-10 group-hover:scale-125 transition-transform duration-500"><FaRocket /></div>
            <div className="w-14 h-14 shrink-0 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform relative z-10">
              <FaRocket />
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Built Utsavora</h3>
              <p className="text-indigo-100 font-medium leading-relaxed">Architected and deployed a massive full-stack event management ecosystem.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0B1120] p-6 md:p-8 rounded-[2rem] text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-start gap-6 group border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
            <div className="w-14 h-14 shrink-0 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-2xl text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all relative z-10">
              <FaShieldAlt />
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2 text-white">Cybersecurity</h3>
              <p className="text-slate-400 font-medium leading-relaxed">Actively expanding expertise in identifying vulnerabilities and securing web infrastructures.</p>
            </div>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}

export default WebDevAbout;
