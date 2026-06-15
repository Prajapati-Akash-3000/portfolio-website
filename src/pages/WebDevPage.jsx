import { motion } from "framer-motion";

import Navbar from "../components/webdev/Navbar";
import Hero from "../components/webdev/Hero";
import Stats from "../components/webdev/Stats";
import About from "../components/webdev/About";
import Skills from "../components/webdev/Skills";
import Marquee from "../components/webdev/Marquee";
import Projects from "../components/webdev/Projects";
import Experience from "../components/webdev/Experience";
import Cybersecurity from "../components/webdev/Cybersecurity";
import Contact from "../components/webdev/Contact";
import Footer from "../components/webdev/Footer";

function WebDevPage() {
  return (
        <motion.div
          key="webdev-page"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {/* Light Mode Premium Background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-50">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.15),transparent_70%)]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(6,182,212,0.15),rgba(255,255,255,0))]"></div>
          </div>

          <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
            <Navbar />
          </div>
          
          <main className="pt-24">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Marquee />
            <Projects />
            <Experience />
            <Cybersecurity />
            <Contact />
            <Footer />
          </main>
        </motion.div>
  );
}

export default WebDevPage;
