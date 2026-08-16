import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="Where I've worked"
          title="Experience"
          description="Real-world internships where I turned data into decisions and code into products."
        />

        <div className="relative">
          <div className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-accent via-cyan/50 to-transparent sm:left-8" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                <span className="absolute left-3 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-background sm:left-5">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent to-cyan shadow-glow" />
                </span>

                <Card className="p-7 hover:border-accent/30 hover:shadow-glow sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="heading-font text-xl font-bold sm:text-2xl">{job.role}</h3>
                      <p className="mt-1 font-medium text-cyan">{job.company}</p>
                    </div>
                    <Badge>{job.period}</Badge>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-muted sm:text-base">
                        <FiCheckCircle className="mt-1 shrink-0 text-accent-light" size={16} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
