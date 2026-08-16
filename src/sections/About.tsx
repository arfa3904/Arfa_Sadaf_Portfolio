import { motion } from "framer-motion";
import { FiAward, FiMapPin, FiBookOpen, FiBriefcase, FiBarChart2, FiCpu } from "react-icons/fi";
import type { IconType } from "react-icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { aboutCards, personal } from "@/lib/data";

const iconMap: Record<string, IconType> = {
  GraduationCap: FiBookOpen,
  Briefcase: FiBriefcase,
  BarChart3: FiBarChart2,
  Bot: FiCpu,
};

export function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Get to know me"
          title="About Me"
          description="A closer look at my background, education, and what drives me as a data professional."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="glow-border p-8 sm:p-10">
              <div className="flex items-center gap-2 text-cyan">
                <FiMapPin />
                <span className="text-sm">{personal.location}</span>
              </div>
              <h3 className="heading-font mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                BE in Artificial Intelligence & Data Science
              </h3>
              <p className="mt-2 text-muted">Navkis College of Engineering, Karnataka, India</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
                  <FiAward className="text-accent-light" />
                  <span className="text-sm font-semibold">CGPA 7.71</span>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-muted">
                I'm driven by a passion for solving real business problems using data. From
                cleaning messy transactional records to shipping interactive dashboards that
                stakeholders actually use, I enjoy every step of the analytics lifecycle —
                translating ambiguous questions into rigorous, data-backed answers.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutCards.map((card, i) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="group h-full p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-cyan/20 text-accent-light transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <h4 className="heading-font mt-4 text-lg font-semibold">{card.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
