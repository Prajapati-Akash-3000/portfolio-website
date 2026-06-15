import { motion } from "framer-motion";

function WebDevAbout() {
  const cards = [
    { title: "BCA Graduate", icon: "🎓" },
    { title: "Python & Django Internship", icon: "💼" },
    { title: "Built Utsavora", icon: "🚀" },
    { title: "Learning Cybersecurity", icon: "🔒" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-10 md:mb-16 text-center text-gray-900">
          About <span className="text-indigo-600">Me</span>
        </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I am a dedicated developer focused on building secure, scalable web applications. With a strong foundation in modern web technologies, I am constantly learning and exploring new domains like cybersecurity to build robust solutions.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gray-100 border border-gray-200 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors ${index % 2 === 0 ? 'float-anim' : 'float-anim-delay'}`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WebDevAbout;
