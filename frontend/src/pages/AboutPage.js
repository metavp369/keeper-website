import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import { Heart, Shield, Eye, Users, Layers, ArrowRight, Check, Target, Lightbulb } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity First", desc: "We do what's right, even when no one is watching." },
  { icon: Eye, title: "Transparency Always", desc: "No hidden actions, no surprise costs." },
  { icon: Target, title: "Professional Excellence", desc: "Trained teams, documented processes, accountability." },
  { icon: Users, title: "Client Empowerment", desc: "You stay in control, we provide the tools and support." },
];

const model = [
  {
    title: "Technology",
    desc: "Secure platforms, real-time monitoring, digital workflows that give you visibility from anywhere.",
    icon: Layers,
    color: "#F59E0B",
  },
  {
    title: "Legal Coordination",
    desc: "Structured support, vetted networks, compliance focus — making legal processes manageable from abroad.",
    icon: Shield,
    color: "#3B82F6",
  },
  {
    title: "On-Ground Execution",
    desc: "Verified teams, professional standards, city expertise — because local knowledge matters.",
    icon: Users,
    color: "#10B981",
  },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>About Us</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Our Mission: Protecting <span className="font-accent italic text-[#F59E0B]">What Matters</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Why KEEPER Exists */}
      <section className="py-24 md:py-32" data-testid="why-exists">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn><SectionLabel>Our Story</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <SectionHeading className="mt-4">Why KEEPER <span className="text-[#F59E0B]">Exists</span></SectionHeading>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-6 space-y-4 text-[#64748B] leading-relaxed">
                  <p>
                    We started KEEPER because we saw people we cared about struggling. Successful NRIs with thriving careers abroad, anxious about their Indian properties. Inheritance disputes that destroyed family relationships. Assets that deteriorated because no one was watching.
                  </p>
                  <p>
                    The property management industry in India was built for transactions, not protection. For brokers, not owners. We believed global Indians deserved better — a service that matched the sophistication of their lives abroad with professional protection for their assets in India.
                  </p>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <GlassCard className="p-8 border-[#F59E0B]/10">
                <Lightbulb size={32} className="text-[#F59E0B] mb-4" />
                <h3 className="text-xl font-light text-[#F8FAFC] mb-3">The Founding Intent</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Over 30 million NRIs own property in India. Collectively, these assets represent hundreds of billions in value. Yet the infrastructure to protect these assets remotely barely existed. Relatives get busy. Brokers move on. Caretakers retire. And the property sits vulnerable. We built KEEPER to fill this gap.
                </p>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Philosophy */}
      <section className="py-24 md:py-32 relative" data-testid="trust-philosophy">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/[0.03] to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn><SectionLabel>Our Philosophy</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">Trust Through <span className="text-[#10B981]">Transparency</span></SectionHeading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
                Trust is built through transparency, not promises. Every action we take is logged. Every recommendation is explained. Every cost is disclosed upfront. You should never wonder what we're doing with your property — you should know, in real-time, with documentation.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Operational Model */}
      <section className="py-24 md:py-32" data-testid="operational-model">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn><SectionLabel>How We Operate</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">The KEEPER <span className="text-[#F59E0B]">Triad</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {model.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <GlassCard className="p-8 h-full hover:border-white/10 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-medium text-[#F8FAFC] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32" data-testid="values-section">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn><SectionLabel>Our Values</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">What We <span className="text-[#10B981]">Stand For</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <GlassCard className="p-6 flex items-start gap-4 hover:border-[#10B981]/20 transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                    <v.icon size={18} className="text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="text-[#F8FAFC] font-medium">{v.title}</h4>
                    <p className="text-sm text-[#64748B] mt-1">{v.desc}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <SectionHeading>Ready to Experience the <span className="text-[#F59E0B]">KEEPER Difference?</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Let us show you how professional property protection works.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow" data-testid="about-cta">
              Book a Consultation <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
