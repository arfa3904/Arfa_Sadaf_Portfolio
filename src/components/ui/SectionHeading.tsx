import { motion } from "framer-motion";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({ kicker, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-16 flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="kicker">{kicker}</span>
      <h2 className="heading-font text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className={`max-w-2xl text-base text-muted sm:text-lg ${align === "center" ? "" : "text-left"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
