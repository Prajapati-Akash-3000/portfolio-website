import { motion } from "framer-motion";
import CountUpModule from "react-countup";
import { FaLaptopCode, FaBriefcase, FaCogs, FaLayerGroup } from "react-icons/fa";

const CountUp = CountUpModule.default || CountUpModule;

const stats = [
  { prefix: "", end: 1, suffix: "+", label: "Major Project", icon: <FaLaptopCode />, color: "text-blue-500", bg: "bg-blue-50" },
  { prefix: "", end: 2, suffix: " Mos", label: "Experience", icon: <FaBriefcase />, color: "text-purple-500", bg: "bg-purple-50" },
  { prefix: "", end: 20, suffix: "+", label: "Features Built", icon: <FaCogs />, color: "text-emerald-500", bg: "bg-emerald-50" },
  { prefix: "", end: 15, suffix: "+", label: "Technologies", icon: <FaLayerGroup />, color: "text-orange-500", bg: "bg-orange-50" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function WebDevStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 relative z-20 -mt-8">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all"
          >
            <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center text-xl mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight">
              {item.prefix}<CountUp end={item.end} duration={2.5} separator="," />{item.suffix}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WebDevStats;
