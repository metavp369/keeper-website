import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="text-sm uppercase tracking-widest text-[#F59E0B] font-semibold">
      {children}
    </span>
  );
}

export function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-4xl md:text-5xl tracking-tight font-light text-[#F8FAFC] ${className}`}>
      {children}
    </h2>
  );
}

export function GlassCard({ children, className = "", ...props }) {
  return (
    <div className={`bg-[#112240]/70 backdrop-blur-xl border border-white/5 rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  );
}
