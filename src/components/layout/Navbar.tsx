import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personal } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 transition-all duration-500",
            scrolled ? "glass-strong py-2 shadow-premium" : "bg-transparent py-1"
          )}
        >
          <a
            href="#home"
            data-cursor-hover
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="heading-font text-lg font-bold tracking-wide"
          >
            <span className="gradient-text">AS</span>
            <span className="text-foreground">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  active === link.href.slice(1) ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-accent to-cyan"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              size="sm"
              variant="outline"
              data-cursor-hover
              onClick={() => window.open(personal.resume, "_blank")}
            >
              Resume
            </Button>
          </div>

          <button
            data-cursor-hover
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass-strong lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="heading-font text-3xl font-semibold text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button className="mt-4" onClick={() => window.open(personal.resume, "_blank")}>
                Download Resume
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
