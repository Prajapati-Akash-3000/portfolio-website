import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Try to determine initial state from route, fallback to localStorage
  const isInitialCyberRoute = location.pathname === '/cyber';
  const isInitialDarkTheme = localStorage.getItem("theme") === "dark";
  const initialMode = isInitialCyberRoute || isInitialDarkTheme;
  
  // What CSS theme is active on the HTML body
  const [cssMode, setCssMode] = useState(initialMode ? "dark" : "light");
  
  // What components are currently rendering ("webdev", "cyber", or "none")
  const [renderMode, setRenderMode] = useState(initialMode ? "cyber" : "webdev");
  
  // Prevent clicks during transition
  const [isLocked, setIsLocked] = useState(false);

  const toggleTheme = () => {
    if (isLocked) return;
    setIsLocked(true);
    
    const isGoingDark = cssMode === "light";
    
    if (isGoingDark) {
      // ----------------------------------------------------
      // LIGHT TO DARK (HARD & CONTEXT / HACKING MODE)
      // ----------------------------------------------------
      // Step 1: Instantly hide current elements (page goes blank in current color)
      setRenderMode("none");
      
      // Step 2: After 300ms, switch the background/CSS theme and change URL
      setTimeout(() => {
        setCssMode("dark");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        navigate('/cyber');
        
        // Step 3: After another 300ms, start rendering the new elements
        setTimeout(() => {
          setRenderMode("cyber");
          setIsLocked(false);
        }, 300);
        
      }, 300);
    } else {
      // ----------------------------------------------------
      // DARK TO LIGHT (SIMPLE & SMOOTH)
      // ----------------------------------------------------
      // We change both states and route immediately.
      // The page transitions will fade smoothly.
      setCssMode("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setRenderMode("webdev");
      navigate('/');
      
      // Unlock after the transition is roughly complete
      setTimeout(() => {
        setIsLocked(false);
      }, 800);
    }
  };

  useEffect(() => {
    if (initialMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Sync route with initial mode if user directly visited URL
    if (initialMode && location.pathname !== '/cyber') {
        navigate('/cyber', { replace: true });
    } else if (!initialMode && location.pathname === '/cyber') {
        navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ 
      darkMode: cssMode === "dark", 
      renderMode,
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);