import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaProjectDiagram, FaTimes } from 'react-icons/fa';

const keyFeatures = [
  {
    category: "Authentication & Security",
    features: ["JWT Authentication", "Email OTP Verification", "Password Reset", "Role-Based Access Control", "Audit Logging"]
  },
  {
    category: "Event Management",
    features: ["Event Creation", "Public/Private Events", "Manager Hiring", "Availability Management", "Booking Lifecycle"]
  },
  {
    category: "Business Features",
    features: ["Razorpay Payments", "Manager Payouts", "Platform Commission", "Financial Reports"]
  },
  {
    category: "User Experience",
    features: ["Digital Invitations", "Image Generation", "Email Notifications", "Reviews & Ratings", "Media Uploads"]
  },
  {
    category: "Analytics",
    features: ["Bookings Dashboard", "Revenue Analytics", "Event Insights", "Manager Reports"]
  }
];

function WebDevProjects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Projects</h2>
        
        <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-xl">
          <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-6">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">⭐ Utsavora <span className="text-xl md:text-2xl font-normal text-gray-500 block mt-2">SaaS-Style Event Management Platform</span></h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href="https://github.com/Prajapati-Akash-3000/Utsavora/tree/master/utsavora" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
                  <FaGithub /> GitHub
                </a>
                <button onClick={() => setActiveModal('detailed')} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100 text-indigo-700 font-medium border border-indigo-200 hover:bg-indigo-200 transition-colors shadow-sm">
                  <FaProjectDiagram /> View Detailed Architecture
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">Project Overview</h4>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>Utsavora is a SaaS-style event management platform designed to connect users with verified event managers through a secure booking ecosystem.</p>
                  <p>The platform enables event creation, manager hiring, digital invitation generation, payment processing, analytics tracking, and administrative management through dedicated role-based dashboards.</p>
                  <p>Built using React, Django REST Framework, and PostgreSQL, Utsavora focuses on scalability, security, and a streamlined event planning experience.</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS', 'Razorpay', 'JWT', 'Framer Motion', 'Recharts'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold mb-6 text-indigo-600">Impact & Scale</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['3 User Roles', '18 Invitation Templates', '20+ Platform Features', 'JWT Authentication', 'Payment Integration', 'Analytics Dashboard'].map(metric => (
                  <div key={metric} className="p-4 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-sm font-bold text-gray-800">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 space-y-24">
            <section>
              <h4 className="text-3xl font-bold mb-10 text-center">Key Features</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyFeatures.map((group) => (
                  <div key={group.category} className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 shadow-sm">
                    <h5 className="text-lg font-bold mb-4 text-indigo-600">{group.category}</h5>
                    <ul className="space-y-3">
                      {group.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        
        {/* PasteApp Card */}
        <div className="mt-8 border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
          <div className="p-8 md:p-10 lg:p-12">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">🚀 PasteApp <span className="text-lg md:text-xl font-normal text-gray-500 block mt-2">React-Based Paste Sharing Application</span></h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://paste-app-ochre-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition-colors">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href="https://github.com/Prajapati-Akash-3000/PasteApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  A lightweight paste-sharing application built with React.js, allowing users to create, edit, organize, and manage text snippets through a modern and responsive interface.
                </p>
                <h4 className="text-lg font-semibold mb-3 text-indigo-600">Highlights</h4>
                <ul className="space-y-2">
                  {['Create, edit, and view pastes with exact dates', 'One-click copy and seamless sharing', 'Fast client-side navigation', 'Persistent local storage', 'Responsive UI'].map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Local Storage', 'React Router', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {activeModal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 left-0 w-full h-[100dvh] z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-200 shadow-2xl">
              <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-500"><FaTimes /></button>
              <h4 className="text-4xl font-bold mb-12 text-center text-gray-900">System Architecture</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Frontend */}
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎨</span> Frontend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind CSS'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span> Backend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['Django REST', 'JWT Auth'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🗄️</span> Database
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

export default WebDevProjects;
