import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

function WebDevContact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 sm:p-8 md:p-16 border border-indigo-200 shadow-2xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_60%)] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_60%)] rounded-full"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-6">Let's Build Something Together</h2>
          <p className="text-lg text-indigo-700 mb-10 max-w-2xl mx-auto">
            Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
            <div className="text-left bg-white/50 p-6 rounded-2xl border border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-950 mb-4">Available For</h3>
              <ul className="space-y-3 text-indigo-700">
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Freelance Projects</li>
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Web Development</li>
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Collaboration</li>
                <li className="flex items-center gap-3"><span className="text-indigo-500">✓</span> Internship Opportunities</li>
              </ul>
            </div>

            <a 
              href="mailto:akashprj3000@gmail.com" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors"
            >
              <FaPaperPlane /> Send Message
            </a>
          </div>

          <div className="flex justify-center gap-8 border-t border-indigo-500/20 pt-8">
            <a href="mailto:akashprj3000@gmail.com" className="flex flex-col items-center gap-2 text-indigo-600 hover:text-indigo-900 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <FaEnvelope />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a href="https://github.com/Prajapati-Akash-3000" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-indigo-600 hover:text-indigo-900 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl group-hover:bg-gray-800 group-hover:text-white transition-colors">
                <FaGithub />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/akash-prajapati-3a2a8039b/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-indigo-600 hover:text-indigo-900 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaLinkedin />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WebDevContact;
