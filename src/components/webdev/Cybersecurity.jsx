import { motion } from 'framer-motion';
import { FaLinux, FaNetworkWired, FaBug, FaShieldAlt, FaServer } from 'react-icons/fa';

const learningPath = [
  {
    title: "Linux Fundamentals",
    icon: <FaLinux />,
    desc: "Command line, permissions, process management"
  },
  {
    title: "Networking",
    icon: <FaNetworkWired />,
    desc: "TCP/IP, DNS, HTTP/S, Subnetting"
  },
  {
    title: "OWASP Top 10",
    icon: <FaBug />,
    desc: "Identifying and mitigating common vulnerabilities"
  },
  {
    title: "Burp Suite",
    icon: <FaServer />,
    desc: "Proxying traffic, intercepting, and analyzing requests"
  },
  {
    title: "Web App Security",
    icon: <FaShieldAlt />,
    desc: "Secure coding practices, encryption, auth"
  }
];

function WebDevCybersecurity() {
  return (
    <section id="cybersecurity" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 text-3xl mb-4 border border-blue-100">
            <FaShieldAlt />
          </div>
          <h2 className="text-4xl font-bold text-center text-gray-900">Currently Learning</h2>
          <p className="text-gray-600 mt-4 text-lg text-center max-w-2xl">
            Expanding my knowledge beyond full-stack development to build a solid foundation in cybersecurity and secure engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPath.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl text-blue-500 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WebDevCybersecurity;
