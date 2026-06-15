function WebDevFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Akash Prajapati</h3>
          <p className="text-gray-500 font-medium text-sm">
            Full Stack Developer <span className="mx-2">•</span> Aspiring Cybersecurity Professional
          </p>
        </div>

        <div className="flex gap-6 text-gray-600">
          <a href="https://github.com/Prajapati-Akash-3000" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/akash-prajapati-3a2a8039b/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:akashprj3000@gmail.com" className="hover:text-indigo-500 transition-colors">
            Email
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-500 text-sm">
        <p>Built with React + Tailwind CSS + Framer Motion</p>
        <p>Designed & Developed by Akash Prajapati</p>
        <p className="mt-2 text-gray-400">&copy; 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default WebDevFooter;
