import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function WebDevHero() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 text-sm">
            🔒 Aspiring Cybersecurity Professional
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-6 text-slate-900">
            Akash
            <br />
            Prajapati
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-600 font-semibold">
            Full Stack Developer
            <span className="block mt-2 text-base sm:text-lg text-slate-600 font-medium">
              React • Django • PostgreSQL
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl">
            Building secure, scalable web applications
            using React, Django, and PostgreSQL while
            expanding expertise in cybersecurity.
          </p>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/Prajapati-Akash-3000"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-prajapati-3a2a8039b/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-colors text-center">
              View Projects
            </a>
            <a
              href="/Akash_Prajapati_resume.pdf"
              download="Akash_Prajapati_resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-full border border-gray-300 hover:border-gray-900 text-gray-900 font-bold transition-colors text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end float-anim"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] rounded-full"></div>
            <img
              src="/Profile.png"
              alt="Akash Prajapati"
              className="rounded-full w-full h-full object-cover border-4 border-slate-200 shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WebDevHero;
