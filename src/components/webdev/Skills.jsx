import { motion } from 'framer-motion';
import { FaReact, FaJs, FaPython, FaServer, FaGitAlt, FaGithub, FaLinux, FaShieldAlt, FaDatabase, FaNetworkWired, FaBug, FaLock, FaTerminal } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiFramer, SiDjango, SiJsonwebtokens, SiPostgresql, SiMysql, SiAxios, SiGmail, SiRazorpay, SiWireshark, SiKalilinux } from 'react-icons/si';
import { FaWpforms } from 'react-icons/fa';

function WebDevSkills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "MUI", icon: <SiMui className="text-[#007FFF]" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-black" /> },
        { name: "React Hook Form", icon: <FaWpforms className="text-[#EC5990]" /> }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "Django REST Framework", icon: <SiDjango className="text-[#A30000]" /> },
        { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-[#000000]" /> },
        { name: "REST APIs", icon: <FaServer className="text-gray-500" /> }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Oracle", icon: <FaDatabase className="text-[#F80000]" /> }
      ]
    },
    {
      category: "Tools & Security",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-black" /> },
        { name: "Axios", icon: <SiAxios className="text-[#5A29E4]" /> },
        { name: "Gmail SMTP", icon: <SiGmail className="text-[#EA4335]" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-[#02042B]" /> },
        { name: "Linux (learning)", icon: <FaLinux className="text-black" /> },
        { name: "Cybersecurity (learning)", icon: <FaShieldAlt className="text-green-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors cursor-default border border-gray-200"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WebDevSkills;
