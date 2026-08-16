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

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span key={skill.name} data-cursor-hover className="pill">
                      {skill.name}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1, delay: si * 0.06, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                        />
                      </div>
                    </div>
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
