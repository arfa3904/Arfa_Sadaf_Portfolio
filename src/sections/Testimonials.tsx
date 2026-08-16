import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { BsQuote } from "react-icons/bs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Kind words"
          title="Testimonials"
          description="Feedback from mentors and collaborators I've worked alongside."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative flex h-full flex-col p-7 hover:border-accent/30 hover:shadow-glow">
                <BsQuote className="text-3xl text-accent/40" />
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-slate-300 sm:text-base">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-cyan/30 text-foreground">
                    <FiUser size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
