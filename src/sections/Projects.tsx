import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Selected work"
          title="Featured Projects"
          description="A curated set of analytics, machine learning, and full-stack builds — from raw data to shipped product."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, delay: (i % 2) * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <Card className="group shimmer-border glow-border flex h-full flex-col overflow-hidden p-0 transition-shadow duration-300 hover:shadow-glow">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full origin-center scale-100 object-cover transition-transform duration-300 ease-out group-hover:scale-[1.08]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan backdrop-blur-md">
                      {project.category}
                    </span>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        aria-label="View source on GitHub"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-accent"
                      >
                        <FiGithub size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="heading-font text-xl font-bold transition-colors group-hover:text-cyan sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-5">
                      <div>
                        <p className="heading-font text-lg font-bold gradient-text">
                          {project.metrics[0].value}
                        </p>
                        <p className="text-xs text-muted">{project.metrics[0].label}</p>
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-white/10 hover:text-cyan hover:shadow-glow"
                      >
                        <FiGithub size={15} /> View on GitHub
                      </a>
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
