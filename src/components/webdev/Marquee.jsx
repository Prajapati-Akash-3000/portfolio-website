import { motion } from "framer-motion";

const technologies = [
  "React", "Django", "PostgreSQL", "JWT", 
  "Razorpay", "Tailwind CSS", "DRF", "Framer Motion"
];

function WebDevMarquee() {
  return (
    <div className="w-full bg-indigo-900/10 border-y border-indigo-500/20 py-6 overflow-hidden relative flex items-center">
      {/* Gradient masks for smooth fading at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
      
      <motion.div
        className="flex whitespace-nowrap gap-8 pr-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        style={{ width: "fit-content", willChange: "transform", transform: "translateZ(0)" }}
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-2xl font-bold text-gray-700 uppercase tracking-widest">{tech}</span>
            <span className="text-indigo-500 text-xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default WebDevMarquee;
