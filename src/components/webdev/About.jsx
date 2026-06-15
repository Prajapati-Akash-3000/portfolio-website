import { motion } from "framer-motion";
import { FaGraduationCap, FaPython, FaRocket, FaShieldAlt, FaEnvelope } from "react-icons/fa";

function WebDevAbout() {
  const codeString = `const developer = {
  name: 'Akash Prajapati',
  focus: 'Secure & Scalable Applications',
  skills: ['React', 'Django', 'PostgreSQL'],
  passions: [
    'Building modern architectures',
    'Exploring cybersecurity',
    'Crafting premium UI/UX'
  ],
  sayHello: function() {
    return 'akashprj3000@gmail.com';
  }
};`;

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
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Code</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Hacker Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="flex-1 bg-[#1E1E1E] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden flex flex-col relative group">
            {/* Ambient Terminal Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Mac Window Header */}
            <div className="bg-[#2D2D2D] px-6 py-4 flex items-center gap-2 border-b border-gray-800 relative z-10">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-inner"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-inner"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-inner"></div>
              </div>
              <div className="mx-auto text-gray-400 text-xs font-mono tracking-widest font-bold">akash.js</div>
            </div>

            {/* Code Body */}
            <div className="p-8 md:p-10 font-mono text-sm md:text-base leading-loose relative z-10">
              <div className="text-pink-400 font-bold mb-2">// Initialize Developer Profile</div>
              <div className="whitespace-pre overflow-x-auto text-gray-300">
                <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-cyan-400">=</span> {'{\n'}
                {'  '}name: <span className="text-orange-300">'Akash Prajapati'</span>,{'\n'}
                {'  '}focus: <span className="text-orange-300">'Secure & Scalable Applications'</span>,{'\n'}
                {'  '}skills: [<span className="text-orange-300">'React'</span>, <span className="text-orange-300">'Django'</span>, <span className="text-orange-300">'PostgreSQL'</span>],{'\n'}
                {'  '}passions: [{'\n'}
                {'    '}<span className="text-orange-300">'Building modern architectures'</span>,{'\n'}
                {'    '}<span className="text-orange-300">'Exploring cybersecurity'</span>,{'\n'}
                {'    '}<span className="text-orange-300">'Crafting premium UI/UX'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="text-blue-300">sayHello</span>: <span className="text-blue-400">function</span>() {'{\n'}
                {'    '}<span className="text-purple-400">return</span> <span className="text-orange-300">'akashprj3000@gmail.com'</span>;{'\n'}
                {'  '}{'}\n'}
                {'}'};
              </div>
              
              {/* Blinking Cursor */}
              <div className="mt-4 flex items-center text-green-400">
                <span>$ developer.sayHello()</span>
                <span className="w-2.5 h-5 bg-gray-400 ml-1 animate-pulse"></span>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-gray-400 border-t border-gray-800 pt-6">
                <span className="text-xs tracking-widest uppercase font-bold text-gray-600">Contact Output</span>
                <a 
                  href="mailto:akashprj3000@gmail.com" 
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 rounded-xl transition-colors font-sans font-bold"
                >
                  <FaEnvelope /> Connect Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bento Journey Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 grid grid-cols-2 gap-4 auto-rows-fr"
        >
          {/* Card 1 */}
          <div className="col-span-2 sm:col-span-1 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
              <FaGraduationCap />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">BCA Graduate</h3>
            <p className="text-sm text-gray-500 font-medium">Strong foundation in computer science and algorithms.</p>
          </div>

          {/* Card 2 */}
          <div className="col-span-2 sm:col-span-1 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
              <FaPython />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Backend Intern</h3>
            <p className="text-sm text-gray-500 font-medium">Real-world experience with Python & Django architectures.</p>
          </div>

          {/* Card 3 (Wide) */}
          <div className="col-span-2 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-500/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-9xl text-white opacity-10 group-hover:scale-110 transition-transform duration-500"><FaRocket /></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-inner">
                <FaRocket />
              </div>
              <h3 className="font-bold text-2xl mb-2 tracking-tight">Built Utsavora</h3>
              <p className="text-indigo-100 font-medium max-w-sm">Architected and deployed a full-stack event management ecosystem from the ground up.</p>
            </div>
          </div>

          {/* Card 4 (Wide) */}
          <div className="col-span-2 bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group border border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/40 transition-colors duration-500"></div>
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 tracking-tight text-white">Cybersecurity</h3>
                <p className="text-sm text-slate-400 font-medium">Actively expanding expertise in securing web infrastructures and systems.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default WebDevAbout;
