import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="What I work with"
          title="Skills & Technologies"
          description="A toolkit built for turning raw data into decisions — from ingestion and modeling to polished visual storytelling."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
            >
              <Card className="h-full p-7 hover:border-white/20">
                <h3 className="heading-font text-lg font-semibold text-cyan">{category.title}</h3>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {category.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      data-cursor-hover
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, delay: si * 0.05 }}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-white/10 hover:shadow-glow"
                    >
                      <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                      <span className="text-right text-xs text-cyan">{skill.detail}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
