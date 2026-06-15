import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useState } from 'react';

function WebDevContact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "d42f5e4b-0467-4ab9-89e1-dc51859add97");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setFormState('success');
        e.target.reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-indigo-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-5 gap-0">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-2 bg-indigo-900 text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Let's talk about your project</h2>
              <p className="text-indigo-200 mb-10 text-lg">
                Fill out the form and I'll get back to you within 24 hours. Let's create something amazing together.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800/50 rounded-full flex items-center justify-center text-indigo-300">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-300 font-medium mb-1">Email</p>
                    <a href="mailto:akashprj3000@gmail.com" className="text-white hover:text-indigo-200 transition-colors font-medium">akashprj3000@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800/50 rounded-full flex items-center justify-center text-indigo-300">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-300 font-medium mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/akash-prajapati-3a2a8039b/" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200 transition-colors font-medium">Connect with me</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-800/50 rounded-full flex items-center justify-center text-indigo-300">
                    <FaGithub className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-300 font-medium mb-1">GitHub</p>
                    <a href="https://github.com/Prajapati-Akash-3000" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200 transition-colors font-medium">Explore my code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-800/40 p-6 rounded-2xl border border-indigo-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Available For:</h3>
              <ul className="space-y-2 text-indigo-200 text-sm">
                <li className="flex items-center gap-2">✓ Freelance Projects</li>
                <li className="flex items-center gap-2">✓ Web Development</li>
                <li className="flex items-center gap-2">✓ Collaboration & Internships</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 p-10 md:p-14 bg-white/50">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send me a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    minLength={2}
                    maxLength={50}
                    pattern="^[a-zA-Z\s]+$"
                    title="Name should only contain letters and spaces."
                    onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    placeholder="John Doe" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    required 
                    pattern="[0-9]{10}"
                    title="Please enter exactly 10 digits."
                    maxLength={10}
                    minLength={10}
                    onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    placeholder="9876543210" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address."
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                  placeholder="john@example.com" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required 
                  minLength={10}
                  maxLength={1000}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30"
              >
                {formState === 'idle' && <><FaPaperPlane /> Send Message</>}
                {formState === 'submitting' && <span className="flex items-center gap-2"><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</span>}
                {formState === 'success' && <><FaCheckCircle /> Message Sent!</>}
                {formState === 'error' && <><FaExclamationCircle /> Error Sending</>}
              </button>

              {formState === 'success' && (
                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-green-600 text-sm font-medium mt-4">
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
              {formState === 'error' && (
                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-red-500 text-sm font-medium mt-4">
                  Oops! Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WebDevContact;
