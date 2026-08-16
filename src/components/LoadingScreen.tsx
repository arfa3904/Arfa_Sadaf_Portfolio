import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 350);
          setTimeout(onComplete, 1000);
          return 100;
        }
        const increment = p < 70 ? Math.random() * 12 + 4 : Math.random() * 4 + 1;
        return Math.min(p + increment, 100);
      });
    }, 140);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <div className="pointer-events-none absolute -inset-32 rounded-full bg-accent/20 blur-[100px]" />

            <div className="heading-font relative flex flex-col items-center leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="gradient-text-animated text-6xl font-bold sm:text-8xl"
              >
                ARFA
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="gradient-text-animated text-6xl font-bold sm:text-8xl"
              >
                SADAF
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 220 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mt-10 h-[3px] overflow-hidden rounded-full bg-white/10 sm:w-[280px]"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 font-mono text-xs tracking-[0.3em] text-muted"
            >
              {Math.round(progress).toString().padStart(3, "0")}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
