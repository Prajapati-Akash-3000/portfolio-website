import { motion } from "framer-motion";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default || CountUpModule;

const stats = [
  { prefix: "", end: 1, suffix: "+", label: "Major Project" },
  { prefix: "", end: 2, suffix: " Months", label: "Industry Experience" },
  { prefix: "", end: 20, suffix: "+", label: "Features Built" },
  { prefix: "", end: 15, suffix: "+", label: "Technologies Used" },
];

function WebDevStats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-200 p-6 text-center bg-white shadow-sm hover:shadow-md float-anim"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-3xl font-bold text-cyan-600">
              {item.prefix}<CountUp end={item.end} duration={2} />{item.suffix}
            </h3>
            <p className="mt-2 text-slate-600 font-medium">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WebDevStats;
