import { useEffect, useState } from "react";

export function useCounter(target: number, start: boolean, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId: number;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return decimals > 0 ? Number(value.toFixed(decimals)) : Math.floor(value);
}
