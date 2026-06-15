import { motion } from 'framer-motion';
import { FaLinux, FaNetworkWired, FaBug, FaShieldAlt, FaServer, FaTerminal } from 'react-icons/fa';

const learningPath = [
  {
    title: "Linux Fundamentals",
    icon: <FaLinux />,
    desc: "Command line, permissions, process management",
    status: "[IN PROGRESS]"
  },
  {
    title: "Networking",
    icon: <FaNetworkWired />,
    desc: "TCP/IP, DNS, HTTP/S, Subnetting",
    status: "[EXPLORING]"
  },
  {
    title: "OWASP Top 10",
    icon: <FaBug />,
    desc: "Identifying and mitigating common vulnerabilities",
    status: "[LEARNING]"
  },
  {
    title: "Burp Suite",
    icon: <FaServer />,
    desc: "Proxying traffic, intercepting, and analyzing requests",
    status: "[PRACTICING]"
  },
  {
    title: "Web App Security",
    icon: <FaShieldAlt />,
    desc: "Secure coding practices, encryption, auth",
    status: "[ACTIVE]"
  }
];

function WebDevCybersecurity() {
  return (
    <section id="cybersecurity" className="relative py-32 bg-[#050B14] overflow-hidden border-t border-emerald-900/30">
      
      {/* Animated Cyber Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]"></div>
         {/* Sweeping Radar Line */}
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10 border-t-emerald-500/50"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-20">
            <motion.div 
              animate={{ boxShadow: ['0 0 0px #10B981', '0 0 20px #10B981', '0 0 0px #10B981'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-emerald-950/50 rounded-[1.5rem] flex items-center justify-center text-emerald-400 text-3xl mb-8 border border-emerald-500/50"
            >
              <FaTerminal />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-center text-white tracking-tight mb-6 flex items-center gap-4">
              <span className="text-emerald-500">{'>'}</span> Currently Learning <span className="animate-pulse text-emerald-500">_</span>
            </h2>
            <p className="text-emerald-100/60 mt-4 text-lg text-center max-w-2xl font-mono">
              // Expanding my knowledge beyond full-stack development to build a solid foundation in cybersecurity and secure engineering.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPath.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#0A1420] border border-emerald-900/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group relative overflow-hidden shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 text-2xl border border-emerald-900/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-shadow duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-500 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-900/50 shadow-inner">
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                <p className="text-emerald-100/50 font-mono text-sm leading-relaxed">{item.desc}</p>
                
                {/* Decorative Tech Lines */}
                <div className="absolute bottom-5 right-5 flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-emerald-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WebDevCybersecurity;
