import { motion } from "framer-motion";

const technologies = [
  "React", "Django", "PostgreSQL", "JWT Auth", 
  "Razorpay", "Tailwind CSS", "Framer Motion", "REST APIs",
  "React", "Django", "PostgreSQL", "JWT Auth", 
  "Razorpay", "Tailwind CSS", "Framer Motion", "REST APIs"
];

function WebDevMarquee() {
  return (
    <div className="relative py-20 overflow-hidden flex flex-col items-center justify-center -my-10 z-0">
      
      {/* Background ambient glow behind the marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* The Tilted Marquee Container */}
      <div className="w-[110vw] -rotate-2 transform-gpu">
        <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 py-6 flex items-center shadow-2xl border-y border-white/20">
          
          <motion.div
            className="flex whitespace-nowrap gap-10 pr-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            style={{ width: "max-content" }}
          >
            {technologies.map((tech, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider drop-shadow-md">
                  {tech}
                </span>
                <span className="text-3xl text-cyan-200 opacity-70">✦</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>

      {/* Secondary Opposite Marquee (Outlined Text) */}
      <div className="w-[110vw] rotate-1 transform-gpu mt-4">
        <div className="w-full py-4 flex items-center">
          
          <motion.div
            className="flex whitespace-nowrap gap-10 pr-10"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            style={{ width: "max-content" }}
          >
            {technologies.map((tech, i) => (
              <div key={i} className="flex items-center gap-10">
                <span 
                  className="text-4xl md:text-5xl font-black uppercase tracking-wider text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(156, 163, 175, 0.4)" }}
                >
                  {tech}
                </span>
                <span className="text-3xl text-gray-300 opacity-30">✦</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
      
    </div>
  );
}

export default WebDevMarquee;
