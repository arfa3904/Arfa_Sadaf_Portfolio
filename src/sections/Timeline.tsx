import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { timeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [lineRef.current, lineMobileRef.current].forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          }
        );
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" className="section-padding relative z-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="The journey"
          title="Milestones"
          description="Key moments from starting my degree to shipping production-grade analytics platforms."
        />

        <div ref={trackRef} className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block">
            <div ref={lineRef} className="h-full w-full origin-top bg-gradient-to-b from-accent via-cyan to-accent" />
          </div>
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:hidden">
            <div ref={lineMobileRef} className="h-full w-full origin-top bg-gradient-to-b from-accent via-cyan to-accent" />
          </div>

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center pl-12 md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span
                    className="absolute left-2.5 top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-accent to-cyan shadow-glow md:left-1/2 md:-translate-x-1/2"
                  />

                  <div className={`w-full md:w-[46%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <Card className="p-6 hover:border-cyan/30 hover:shadow-glow-cyan">
                      <span className="kicker">{item.year}</span>
                      <h4 className="heading-font mt-2 text-lg font-semibold">{item.title}</h4>
                      <p className="mt-1.5 text-sm text-muted">{item.description}</p>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
