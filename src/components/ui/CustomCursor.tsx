import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const ringX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const desktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsDesktop(desktop);
    if (!desktop) return;

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isDesktop) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}>
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-cyan"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-accent/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          background: hovering ? "rgba(124,58,237,0.12)" : "transparent",
          transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease",
        }}
      />
    </div>
  );
}
