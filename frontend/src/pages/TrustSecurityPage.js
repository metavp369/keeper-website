import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import { Link } from "react-router-dom";
import {
  Lock, FileText, Eye, UserCheck, Shield, Zap,
  ArrowRight, Check, Server, Key, Activity
} from "lucide-react";

const sections = [
  {
    icon: Lock,
    title: "Secure Document Handling",
    desc: "Your property documents are stored in bank-grade encrypted vaults with AES-256 encryption. Access is role-based and logged. We never share your documents with third parties without your explicit authorization.",
    color: "#10B981",
  },
  {
    icon: Eye,
    title: "Audit Trails",
    desc: "Every action taken on your property — every inspection, every communication, every approval — is logged with timestamps and user identification. You have a complete history of everything that happened.",
    color: "#F59E0B",
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    desc: "Different users have different permissions. You control who can view documents, approve actions, or receive alerts. Multi-factor authentication protects your account.",
    color: "#3B82F6",
  },
  {
    icon: Key,
    title: "Authorization Records",
    desc: "All approvals and authorizations are digitally recorded and stored. When you approve a legal notice or repair, that authorization is documented and traceable.",
    color: "#10B981",
  },
  {
    icon: Shield,
    title: "Privacy & Compliance",
    desc: "We comply with data protection regulations including GDPR for our European clients. Your personal information is never sold or shared for marketing purposes.",
    color: "#F59E0B",
  },
  {
    icon: Activity,
    title: "Operational Accountability",
    desc: "Defined SLAs for response times. Structured escalation paths for issues. Professional liability insurance. We hold ourselves accountable to professional standards.",
    color: "#3B82F6",
  },
];

const infrastructure = [
  "AES-256 bit encryption at rest",
  "TLS 1.3 encryption in transit",
  "Daily encrypted backups",
  "Multi-region redundancy",
  "Regular penetration testing",
  "ISO 27001 aligned processes",
];

export default function TrustSecurityPage() {
  return (
    <div data-testid="trust-security-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Trust & Security</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Security <span className="font-accent italic text-[#F59E0B]">by Design</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Your trust is our foundation. Every aspect of KEEPER is built with security, transparency, and accountability as first principles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Security Sections */}
      <section className="py-24 md:py-32" data-testid="security-sections">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <GlassCard className="p-6 h-full hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${s.color}15` }}>
                      <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <h3 className="text-lg text-[#F8FAFC] font-medium">{s.title}</h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 md:py-32" data-testid="infrastructure">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <GlassCard className="p-8 md:p-12 border-[#10B981]/10">
              <div className="text-center mb-8">
                <Server size={32} className="text-[#10B981] mx-auto mb-4" />
                <h3 className="text-2xl font-light text-[#F8FAFC]">Infrastructure Security</h3>
                <p className="text-[#64748B] mt-2">Enterprise-grade protection for your data.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {infrastructure.map(item => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-[#10B981]/5 border border-[#10B981]/10">
                    <Check size={16} className="text-[#10B981] flex-shrink-0" />
                    <span className="text-sm text-[#F8FAFC]">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <SectionHeading>Questions About <span className="text-[#F59E0B]">Security?</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Our team is happy to walk you through our security practices in detail.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow" data-testid="trust-cta">
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
