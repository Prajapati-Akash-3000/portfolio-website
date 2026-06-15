import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const CyberBackground = () => {
  const canvasRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    // Only run animation in dark mode to save resources
    if (!darkMode) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Matrix characters - katakana + latin + numerals
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const charsArray = matrixChars.split("");

    const fontSize = 16;
    // Calculate columns based on width
    const initDrops = () => {
      const columns = Math.floor(canvas.width / fontSize);
      const newDrops = [];
      for (let x = 0; x < columns; x++) {
        newDrops[x] = Math.random() * -100; // random negative start so they don't all fall at once
      }
      return newDrops;
    };
    
    let drops = initDrops();

    // Re-init drops on significant resize to prevent gaps
    let resizeTimeout;
    const handleResize = () => {
      resizeCanvas();
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        drops = initDrops();
      }, 200);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let lastDrawTime = 0;
    const fps = 60; // Increased to 60fps for smoother visuals

    const draw = (timestamp) => {
      if (timestamp - lastDrawTime < 1000 / fps) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastDrawTime = timestamp;

      // Translucent black background to create trail effect
      ctx.fillStyle = "rgba(9, 9, 11, 0.1)"; // matches slate-950
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        const text = charsArray[Math.floor(Math.random() * charsArray.length)];
        
        // Occasional bright text for the "head" of the drop
        if (Math.random() > 0.95) {
            ctx.fillStyle = "#a7f3d0"; // emerald-200
        } else {
            ctx.fillStyle = "#22c55e"; // green-500
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-1000 ${
        darkMode ? 'opacity-30' : 'opacity-0'
      }`}
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    />
  );
};

export default CyberBackground;
