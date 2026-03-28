import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import {
  Globe, Shield, AlertTriangle, MapPin, Check, ArrowRight,
  Home, Users, FileText, Clock, Plane
} from "lucide-react";

const scenarios = [
  {
    title: "The Tenant Who Won't Leave",
    desc: "Your lease expired. The tenant stopped paying. They're ignoring calls. And you're wondering how to start eviction proceedings from 4,000 miles away.",
    icon: Users,
  },
  {
    title: "The Encroaching Neighbor",
    desc: "Your plot has been in the family for decades. Now a neighbor built a wall onto your land. By the time you discover it, adverse possession laws may work against you.",
    icon: AlertTriangle,
  },
  {
    title: "The Missing Documents",
    desc: "Your father never organized the property papers. Now you need to sell, but can't find the original sale deed. And you're trying to navigate Indian bureaucracy remotely.",
    icon: FileText,
  },
  {
    title: "The Inherited Property Problem",
    desc: "You and your siblings inherited ancestral property. One cousin moved in 'temporarily' five years ago. Now they claim ownership. Distance makes it worse.",
    icon: Home,
  },
];

const countries = [
  {
    flag: "🇦🇪",
    name: "UAE",
    desc: "Protect your Delhi, Mumbai, and Noida investments while you build your career in Dubai or Abu Dhabi.",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    desc: "Manage inherited properties and ancestral homes without the 10-hour flight for every signature.",
  },
  {
    flag: "🇺🇸",
    name: "United States",
    desc: "Sleep soundly knowing your Indian assets are monitored while you're in New York, California, or Texas.",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    desc: "From Toronto to Vancouver, stay connected to your Indian property portfolio.",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    desc: "Protect your investments while building your future in Asia's financial hub.",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    desc: "Melbourne, Sydney, or Perth — your Indian property stays secure.",
  },
];

const benefits = [
  { icon: Plane, text: "No More Surprise Trips — Handle everything remotely" },
  { icon: Shield, text: "Professional Oversight — Trained teams, not relatives" },
  { icon: FileText, text: "Legal Readiness — Documentation organized, legal support on standby" },
  { icon: Globe, text: "Real-Time Visibility — Know what's happening, when it happens" },
  { icon: Check, text: "Authorized Action — We act within your defined parameters" },
];

export default function ForNRIsPage() {
  return (
    <div data-testid="for-nris-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>For NRIs</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Built for <span className="font-accent italic text-[#F59E0B]">Global Indians</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              You left India, but India didn't leave you. Your property represents roots, heritage, and financial security. KEEPER protects it while you're away.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-24 md:py-32" data-testid="nri-reality">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn><SectionLabel>The NRI Reality</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <SectionHeading className="mt-4">Distance Creates <span className="text-[#EF4444]">Vulnerability</span></SectionHeading>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-6 space-y-4 text-[#64748B] leading-relaxed">
                  <p>Over 60% of NRIs face serious property challenges — encroachment, tenant disputes, document fraud, or simply not knowing what's happening with their asset.</p>
                  <p>The legal recovery process can take 1-3 years. And every trip to India to "sort out property matters" costs thousands of dollars and weeks of your life.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#EF4444]/5 border border-[#EF4444]/10">
                    <p className="text-3xl font-light text-[#EF4444]">60%+</p>
                    <p className="text-xs text-[#64748B] mt-1">NRIs face property challenges</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/10">
                    <p className="text-3xl font-light text-[#F59E0B]">1-3 yrs</p>
                    <p className="text-xs text-[#64748B] mt-1">Legal recovery timeline</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#3B82F6]/5 border border-[#3B82F6]/10">
                    <p className="text-3xl font-light text-[#3B82F6]">$14-15B</p>
                    <p className="text-xs text-[#64748B] mt-1">NRI investments in 2024</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#10B981]/5 border border-[#10B981]/10">
                    <p className="text-3xl font-light text-[#10B981]">18-20%</p>
                    <p className="text-xs text-[#64748B] mt-1">Luxury market share</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="space-y-4">
              {scenarios.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <GlassCard className="p-5 hover:border-[#F59E0B]/20 transition-all duration-500 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F59E0B]/20 transition-colors">
                        <s.icon size={18} className="text-[#F59E0B]" />
                      </div>
                      <div>
                        <h4 className="text-[#F8FAFC] font-medium">{s.title}</h4>
                        <p className="text-sm text-[#64748B] mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How KEEPER Changes Everything */}
      <section className="py-24 md:py-32 relative" data-testid="keeper-benefits">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/[0.03] to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>The KEEPER Difference</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">How KEEPER Changes <span className="text-[#10B981]">Everything</span></SectionHeading>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {benefits.map((b, i) => (
              <FadeIn key={b.text} delay={i * 0.1}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#10B981]/5 border border-[#10B981]/10">
                  <b.icon size={18} className="text-[#10B981] flex-shrink-0" />
                  <span className="text-sm text-[#F8FAFC]">{b.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* By Country */}
      <section className="py-24 md:py-32" data-testid="countries-section">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn><SectionLabel>Global Reach</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">For NRIs <span className="text-[#F59E0B]">Worldwide</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.1}>
                <GlassCard className="p-6 hover:border-[#F59E0B]/20 transition-all duration-500">
                  <span className="text-4xl">{c.flag}</span>
                  <h4 className="text-[#F8FAFC] font-medium mt-3">{c.name}</h4>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{c.desc}</p>
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
            <SectionHeading>Protect Your <span className="text-[#F59E0B]">Heritage</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Your property in India deserves the same level of professional care you experience abroad.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow"
              data-testid="nris-cta"
            >
              Start Protecting Today <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
