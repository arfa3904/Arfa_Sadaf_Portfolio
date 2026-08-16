import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-white/5">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-accent via-fuchsia-500 to-cyan"
        style={{ boxShadow: "0 0 10px rgba(34,211,238,0.6)" }}
      />
    </div>
  );
}
