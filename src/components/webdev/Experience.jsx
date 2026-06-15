import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCertificate, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiSqlite, SiPython } from 'react-icons/si';

function WebDevExperience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-gray-900">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute left-4 sm:left-24 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="absolute left-0 sm:left-20 top-8 w-8 h-8 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center z-10 shadow-sm">
              <FaBriefcase className="text-indigo-600 text-xs" />
            </div>
            
            <div className="hidden sm:block absolute left-0 top-9 w-16 text-right text-sm font-bold text-gray-400">
              2026
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 bg-white shadow-xl hover:border-gray-300 transition-colors">
              <div className="sm:hidden flex items-center gap-2 text-sm font-semibold text-indigo-600 mb-3">
                <FaCalendarAlt /> Jan - Mar 2026
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Python & Django Intern</h3>
                  <div className="text-lg md:text-xl font-medium text-indigo-500">Patel Web Solutions</div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 w-fit">
                    <FaCalendarAlt className="text-gray-500" /> 2 Months
                  </span>
                  {/* <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-sm font-medium border border-emerald-200 hover:bg-emerald-200 transition-colors w-fit">
                    <FaCertificate /> 
                  </a> */}
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Completed a 2-month internship focused on Python, Object-Oriented Programming (OOP), Django fundamentals, and REST API concepts. Developed a small furniture website and gained practical experience in web application development.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Outcomes:</h4>
                  <ul className="space-y-3">
                    {[
                      'Learned Python fundamentals and OOP concepts', 
                      'Built a furniture website using Django', 
                      'Gained understanding of REST API concepts', 
                      'Worked with Django models and databases',
                      'Strengthened problem-solving and development skills'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium">
                      <SiPython className="text-[#3776AB] text-lg" /> Python
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium">
                      <SiDjango className="text-[#092E20] text-lg" /> Django
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium">
                      <span className="font-bold text-gray-500">{"{ }"}</span> REST API
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium">
                      <SiSqlite className="text-[#003B57] text-lg" /> SQLite
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium">
                      <FaHtml5 className="text-[#E34F26] text-lg" /> HTML/CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WebDevExperience;
