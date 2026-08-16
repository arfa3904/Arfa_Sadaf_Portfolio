import { motion } from "framer-motion";
import { FiArrowDown, FiDatabase, FiDownload, FiSend } from "react-icons/fi";
import { ParticleField } from "@/components/three/ParticleField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { buttonVariants } from "@/components/ui/Button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useMousePosition } from "@/hooks/useMousePosition";
import { personal } from "@/lib/data";

export function Hero() {
  const typed = useTypingEffect(personal.roles, 70, 1500);
  const { x, y } = useMousePosition();

  const parallaxX = typeof window !== "undefined" ? (x / window.innerWidth - 0.5) * 20 : 0;
  const parallaxY = typeof window !== "undefined" ? (y / window.innerHeight - 0.5) * 20 : 0;

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32 sm:pt-24">
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>

      <div className="section-padding relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 py-0 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="pill"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Opportunities
          </motion.span>

          <h1 className="heading-font text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="gradient-text-animated">{personal.firstName}</span>
            <br />
            <span className="text-foreground">{personal.lastName}</span>
          </h1>

          <div className="flex h-8 items-center text-lg font-medium text-cyan sm:text-xl">
            {typed}
            <span className="ml-1 h-6 w-[2px] animate-blink bg-cyan" />
          </div>

          <p className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href={personal.resume}
              className={buttonVariants({ variant: "primary" })}
            >
              <FiDownload /> Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#projects"
              className={buttonVariants({ variant: "outline" })}
            >
              <FiSend /> View Projects
            </MagneticButton>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
            {[
              { label: "Projects", value: "6+" },
              { label: "Records Analyzed", value: "13M+" },
              { label: "CGPA", value: "7.71" },
            ].map((item) => (
              <div key={item.label}>
                <p className="heading-font text-2xl font-bold gradient-text">{item.value}</p>
                <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto flex items-center justify-center"
        >
          <div
            className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96"
            style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
          >
            <div className="absolute -inset-6 animate-spin-slow rounded-full border border-dashed border-accent/30" />
            <div className="absolute -inset-12 animate-spin-reverse rounded-full border border-dashed border-cyan/20" />

            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent via-fuchsia-500 to-cyan opacity-40 blur-2xl animate-pulse-glow" />

            <div className="glass glow-border relative h-full w-full overflow-hidden rounded-full p-2 shadow-glow">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="h-full w-full rounded-full object-cover"
                loading="eager"
              />
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-6 top-6 rounded-2xl px-4 py-2 text-xs font-semibold shadow-premium sm:-left-10"
            >
              🐍 Python
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute -right-4 top-1/3 rounded-2xl px-4 py-2 text-xs font-semibold shadow-premium sm:-right-10"
            >
              📊 Power BI
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute -bottom-4 left-4 rounded-2xl px-4 py-2 text-xs font-semibold shadow-premium sm:left-0"
            >
              🤖 ML
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="glass absolute -bottom-4 right-4 flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-semibold shadow-glow-cyan sm:-right-8"
            >
              <FiDatabase className="text-cyan" size={13} /> SQL
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
