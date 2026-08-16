import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/lib/data";

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const count = useCounter(stat.value, inView, 2200, stat.decimals ?? 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group relative overflow-hidden p-7 text-center transition-all duration-300 hover:border-cyan/40 hover:shadow-glow-cyan">
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <p className="heading-font text-4xl font-extrabold gradient-text sm:text-5xl">
          {stat.prefix ?? ""}
          {stat.decimals ? count.toFixed(stat.decimals) : count.toLocaleString()}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted">{stat.label}</p>
      </Card>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="kicker">By the numbers</span>
          <h2 className="heading-font mt-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Impact &amp; Scale</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
