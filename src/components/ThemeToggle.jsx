import { FaTerminal, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hidden p-3 rounded-lg border border-gray-200 dark:border-green-500/50 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-green-500/20 transition-all text-indigo-600 dark:text-green-400 shadow-sm hover:shadow-md hover:scale-105"
      title={darkMode ? "Switch to Developer Mode" : "Switch to Cyber Mode"}
    >
      {darkMode ? <FaCode size={20} /> : <FaTerminal size={20} />}
    </button>
  );
}

export default ThemeToggle;