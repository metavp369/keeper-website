import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "components/shared";
import {
  MapPin, Users, Eye, Scale, Shield, Clock, Building2,
  ArrowRight, Check, Zap, UserCheck, Phone
} from "lucide-react";

const cities = [
  {
    name: "Delhi NCR",
    desc: "Full-service protection across Delhi, New Delhi, and surrounding areas. Our teams understand DDA regulations, mutation processes, and the unique challenges of Delhi property ownership.",
    active: true,
  },
  {
    name: "Mumbai",
    desc: "From South Mumbai to the suburbs, our teams navigate BMC regulations, cooperative society complexities, and Maharashtra's rent control laws.",
    active: true,
  },
  {
    name: "Noida",
    desc: "Specialized expertise in Noida Authority procedures, builder-buyer agreements, and the rapidly developing NCR corridor.",
    active: true,
  },
  {
    name: "Gurgaon",
    desc: "Deep knowledge of Haryana property laws, DLF and other major developer protocols, and the unique commercial-residential mix of the city.",
    active: true,
  },
];

const comingSoon = ["Bengaluru", "Hyderabad", "Chennai", "Pune", "Jaipur"];

const teamProfiles = [
  { icon: Eye, title: "Inspection Agents", desc: "Trained professionals who conduct physical property visits, document conditions, and report findings through our mobile app." },
  { icon: Scale, title: "Legal Coordinators", desc: "Local legal professionals who understand city-specific regulations and can coordinate with lawyers and authorities." },
  { icon: UserCheck, title: "Relationship Managers", desc: "Your single point of contact for each city, ensuring consistent communication and accountability." },
];

const protocols = [
  { label: "Standard Requests", time: "48-72 hours", icon: Clock, color: "#3B82F6" },
  { label: "Urgent Issues", time: "24 hours", icon: Zap, color: "#F59E0B" },
  { label: "Emergencies", time: "Same-day dispatch", icon: Shield, color: "#EF4444" },
];

export default function CityResponsePage() {
  return (
    <div data-testid="city-response-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>City Response Network</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              On-Ground Excellence, <span className="font-accent italic text-[#F59E0B]">City by City</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Your Delhi property is handled by Delhi teams. Your Mumbai asset by Mumbai professionals. Local knowledge matters — and we've built city-specific response networks to prove it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32" data-testid="network-how">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn><SectionLabel>The Network</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">How the Network <span className="text-[#10B981]">Works</span></SectionHeading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-[#64748B] max-w-2xl mx-auto">
                Property laws vary by state, society norms differ by city, and relationships with local authorities require presence. That's why we built dedicated teams in each city.
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamProfiles.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <GlassCard className="p-6 h-full hover:border-[#10B981]/20 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-4 group-hover:bg-[#10B981]/20 transition-colors">
                    <item.icon size={22} className="text-[#10B981]" />
                  </div>
                  <h4 className="text-[#F8FAFC] font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Current Coverage */}
      <section className="py-24 md:py-32 relative" data-testid="city-coverage">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F59E0B]/[0.02] to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn><SectionLabel>Coverage</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">Active <span className="text-[#F59E0B]">Cities</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, i) => (
              <FadeIn key={city.name} delay={i * 0.1}>
                <GlassCard className="p-6 hover:border-[#F59E0B]/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={18} className="text-[#F59E0B]" />
                    <h4 className="text-lg text-[#F8FAFC] font-medium">{city.name}</h4>
                    <span className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{city.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          {/* Coming Soon */}
          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <p className="text-sm text-[#64748B] mb-4">Expansion Roadmap — Coming Soon:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {comingSoon.map(city => (
                  <span key={city} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#64748B]">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Response Protocols */}
      <section className="py-24 md:py-32" data-testid="response-protocols">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn><SectionLabel>Response Protocols</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">When You Need Us, We <span className="text-[#F59E0B]">Respond</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {protocols.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.15}>
                <GlassCard className="p-6 text-center hover:border-white/10 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}15` }}>
                    <p.icon size={24} style={{ color: p.color }} />
                  </div>
                  <h4 className="text-[#F8FAFC] font-medium">{p.label}</h4>
                  <p className="text-2xl font-light mt-2" style={{ color: p.color }}>{p.time}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-16" data-testid="quality-assurance">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeIn>
            <GlassCard className="p-8 md:p-12 border-[#10B981]/10">
              <div className="text-center max-w-2xl mx-auto">
                <Shield size={32} className="text-[#10B981] mx-auto mb-4" />
                <h3 className="text-2xl font-light text-[#F8FAFC] mb-3">Quality Assurance</h3>
                <p className="text-[#64748B] mb-6">Every team member meets our rigorous standards.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Background Verified", "Professionally Trained", "Performance Monitored", "Client Feedback Reviewed"].map(item => (
                    <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/5 border border-[#10B981]/10">
                      <Check size={14} className="text-[#10B981]" />
                      <span className="text-sm text-[#F8FAFC]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <SectionHeading>Your City, <span className="text-[#F59E0B]">Our Team</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Talk to us about local coverage for your property.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow" data-testid="city-cta">
              Get Local Support <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
