import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary";
import WebDevPage from "./pages/WebDevPage";
import CyberPage from "./pages/CyberPage";

function App() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div className="relative font-sans antialiased selection:bg-indigo-500/30 overflow-x-hidden min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<WebDevPage />} />
            <Route path="/cyber" element={<CyberPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}

export default App;