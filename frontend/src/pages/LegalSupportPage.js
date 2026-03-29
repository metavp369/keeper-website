import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "components/shared";
import {
  Scale, FileText, Shield, Eye, UserCheck, AlertTriangle,
  ArrowRight, Check, Clock, Search, BookOpen
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Property Dispute Coordination",
    desc: "When disputes arise — whether with tenants, neighbors, or family members — we coordinate the response.",
    what_we_do: ["Connect you with specialized property lawyers", "Organize case documents", "Track hearing dates", "Provide status reports", "Coordinate your participation remotely"],
    color: "#3B82F6",
  },
  {
    icon: FileText,
    title: "Notice Drafting Support",
    desc: "Proper legal notices are often the first step in resolving property issues. We assist with drafting and sending legally sound notices.",
    what_we_do: ["Eviction notices", "Boundary dispute notices", "Rent default notices", "Lawyer-coordinated drafting", "Proper dispatch and documentation"],
    color: "#F59E0B",
  },
  {
    icon: BookOpen,
    title: "Documentation Assistance",
    desc: "From organizing scattered paperwork to verifying title deeds, we ensure your legal documentation is complete and accessible.",
    what_we_do: ["Title deed verification", "Encumbrance certificate review", "Document digitization", "Secure vault storage", "Version control and access logs"],
    color: "#10B981",
  },
  {
    icon: UserCheck,
    title: "POA Support Workflows",
    desc: "Power of Attorney documents are essential for remote management but risky if improperly executed. We help structure POAs with appropriate limitations.",
    what_we_do: ["POA document preparation", "Appropriate limitation structuring", "Registration coordination", "Usage oversight", "Revocation support when needed"],
    color: "#3B82F6",
  },
  {
    icon: Shield,
    title: "Title & Possession Issues",
    desc: "For inherited properties or purchases with documentation gaps, we coordinate title verification, mutation processes, and possession protection.",
    what_we_do: ["Title verification coordination", "Mutation process support", "Possession protection", "Ownership record establishment", "Encumbrance resolution"],
    color: "#F59E0B",
  },
  {
    icon: Eye,
    title: "Case Status Visibility",
    desc: "Legal cases in India can span years. We provide ongoing case tracking, hearing updates, and progress reports so you're never in the dark.",
    what_we_do: ["Real-time case tracking", "Hearing date alerts", "Progress reports", "Document access", "Lawyer communication facilitation"],
    color: "#10B981",
  },
];

const disclaimers = [
  "KEEPER is not a law firm and does not provide legal advice",
  "Legal outcomes depend on facts, law, and judicial processes beyond our control",
  "We coordinate with independent lawyers; we don't employ them",
  "All legal actions require your explicit authorization",
  "We recommend consulting independent legal counsel for complex matters",
];

export default function LegalSupportPage() {
  return (
    <div data-testid="legal-support-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Legal Support</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Structured Legal <span className="font-accent italic text-[#F59E0B]">Coordination</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              We provide structured legal coordination — not litigation guarantees. We connect you with vetted legal professionals, organize your documentation, and ensure complete visibility.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16" data-testid="legal-philosophy">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeIn>
            <GlassCard className="p-8 md:p-12 border-[#3B82F6]/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Scale size={36} className="text-[#3B82F6] mb-4" />
                  <h3 className="text-2xl font-light text-[#F8FAFC] mb-3">Our Legal Philosophy</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    We believe in early intervention, clear communication, and professional accountability. Our role is to make legal processes manageable from abroad — not to promise specific legal outcomes. Prevention is always better than cure.
                  </p>
                </div>
                <div className="space-y-3">
                  {["Early intervention benefits", "Structured documentation", "Vetted professional network", "Complete transparency", "Client-authorized actions only"].map(item => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-[#3B82F6]/5 border border-[#3B82F6]/10">
                      <Check size={14} className="text-[#3B82F6]" />
                      <span className="text-sm text-[#F8FAFC]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32" data-testid="legal-services">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-8">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.08}>
              <GlassCard className="p-8 hover:border-white/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${svc.color}15` }}>
                      <svc.icon size={24} style={{ color: svc.color }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-[#F8FAFC] mb-2">{svc.title}</h3>
                    <p className="text-[#64748B] leading-relaxed mb-4">{svc.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.what_we_do.map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <Check size={14} className="flex-shrink-0" style={{ color: svc.color }} />
                          <span className="text-sm text-[#F8FAFC]/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-24 md:py-32" data-testid="legal-disclaimers">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <GlassCard className="p-8 border-[#F59E0B]/10">
              <AlertTriangle size={24} className="text-[#F59E0B] mb-4" />
              <h3 className="text-xl font-light text-[#F8FAFC] mb-4">Important Disclaimers</h3>
              <ul className="space-y-3">
                {disclaimers.map(d => (
                  <li key={d} className="flex items-start gap-3 text-sm text-[#64748B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <SectionHeading>Need Legal <span className="text-[#F59E0B]">Coordination?</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Early intervention is always better. Let's discuss your situation.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow" data-testid="legal-cta">
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
