import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { Home } from "@/pages/Home";
import { useLenis } from "@/hooks/useLenis";

function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AuroraBackground />
      <FloatingParticles count={30} />
      <CustomCursor />
      <ScrollProgressBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>

      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
