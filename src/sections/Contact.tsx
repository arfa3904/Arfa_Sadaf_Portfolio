import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

const contactMethods = [
  { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FiPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, "")}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "arfa-sadaf", href: personal.linkedin },
  { icon: FiGithub, label: "GitHub", value: "arfa3904", href: personal.github },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setStatus("success");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 4000);
  }

  const fields: { name: keyof FormState; label: string; type: string; placeholder: string }[] = [
    { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "Let's talk about..." },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Get in touch" title="Contact" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="heading-font text-3xl font-bold leading-tight sm:text-4xl">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              I'm actively looking for Data Analyst and AI/ML opportunities where I can turn
              complex datasets into products people rely on. Whether you have a role in mind, a
              question about my work, or just want to connect — my inbox is open.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor-hover
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow-cyan"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-cyan transition-colors group-hover:bg-cyan/20">
                    <m.icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <p className="text-xs text-muted">{m.label}</p>
                    <p className="truncate text-sm font-medium text-foreground">{m.value}</p>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="glow-border p-7 sm:p-9">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {fields.slice(0, 2).map((f) => (
                    <div key={f.name}>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={form[f.name]}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                        placeholder={f.placeholder}
                        className={cn(
                          "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-slate-500 outline-none transition-colors focus:border-cyan/60 focus:bg-white/10",
                          errors[f.name] ? "border-red-500/60" : "border-white/10"
                        )}
                      />
                      {errors[f.name] && <p className="mt-1.5 text-xs text-red-400">{errors[f.name]}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Let's talk about..."
                    className={cn(
                      "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-slate-500 outline-none transition-colors focus:border-cyan/60 focus:bg-white/10",
                      errors.subject ? "border-red-500/60" : "border-white/10"
                    )}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about the opportunity or project..."
                    className={cn(
                      "w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-slate-500 outline-none transition-colors focus:border-cyan/60 focus:bg-white/10",
                      errors.message ? "border-red-500/60" : "border-white/10"
                    )}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full sm:w-auto" data-cursor-hover>
                  {status === "success" ? (
                    <>
                      <FiCheckCircle /> Message Sent
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p className="text-sm text-emerald-400">
                    Opening your email client — thanks for reaching out!
                  </p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
