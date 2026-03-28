import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import {
  FileText, Shield, MapPin, Eye, Zap, UserCheck, Clock,
  ChevronRight, Check, ArrowRight, Lock, BarChart3, Calendar
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Onboard & Verify",
    icon: UserCheck,
    desc: "Create your KEEPER account and complete our KYC process. We verify your identity and establish secure communication channels.",
    detail: "This takes less than 10 minutes.",
    color: "#F59E0B",
  },
  {
    num: "02",
    title: "Add Your Property",
    icon: FileText,
    desc: "Upload property documents through our secure vault. Our team verifies ownership records, checks for existing encumbrances, and creates your digital property profile.",
    detail: "Document verification within 48 hours.",
    color: "#10B981",
  },
  {
    num: "03",
    title: "Activate Protection",
    icon: Shield,
    desc: "Select your protection plan and define your authorization preferences. You control what actions KEEPER can take automatically and what requires your explicit approval.",
    detail: "Full customization of approval levels.",
    color: "#3B82F6",
  },
  {
    num: "04",
    title: "Local Team Assignment",
    icon: MapPin,
    desc: "Based on your property location, we assign verified local teams — inspection agents, legal coordinators, and relationship managers who understand your specific market.",
    detail: "City-specific expertise, always.",
    color: "#F59E0B",
  },
  {
    num: "05",
    title: "Continuous Protection Begins",
    icon: Eye,
    desc: "Regular inspections commence. Compliance tracking activates. Your dashboard populates with real-time status updates. You're now protected.",
    detail: "24/7 monitoring starts immediately.",
    color: "#10B981",
  },
];

const reportCycles = [
  { period: "Weekly", desc: "Activity summaries for any actions taken", icon: Clock },
  { period: "Monthly", desc: "Comprehensive property health reports", icon: BarChart3 },
  { period: "Quarterly", desc: "Strategic reviews and recommendations", icon: Calendar },
  { period: "Annually", desc: "Complete asset valuation and protection assessment", icon: FileText },
];

export default function HowItWorksPage() {
  return (
    <div data-testid="how-it-works-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <SectionLabel>The Process</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              How KEEPER <span className="font-accent italic text-[#F59E0B]">Protects</span> Your Property
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              From onboarding to continuous protection, here's the complete journey of securing your Indian real estate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24" data-testid="steps-section">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <GlassCard className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <step.icon size={28} style={{ color: step.color }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.num}</span>
                        <h3 className="text-2xl font-light text-[#F8FAFC]">{step.title}</h3>
                      </div>
                      <p className="text-[#64748B] leading-relaxed">{step.desc}</p>
                      <p className="text-sm mt-3 font-medium" style={{ color: step.color }}>{step.detail}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Approval Model */}
      <section className="py-24 md:py-32 relative" data-testid="approval-model">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/[0.03] to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn><SectionLabel>Remote Approval Model</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <SectionHeading className="mt-4">You Stay in <span className="text-[#10B981]">Control</span></SectionHeading>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-[#64748B] leading-relaxed">
                  Every significant action — legal notices, major repairs, tenant decisions — flows through your dashboard for approval. Review documents, ask questions, approve or decline. All from your phone or laptop.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 space-y-3">
                  {["Review documents before filing", "Ask questions in real-time", "Approve or decline from anywhere", "Complete authorization audit trail"].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <Check size={16} className="text-[#10B981]" />
                      <span className="text-sm text-[#F8FAFC]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <GlassCard className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#0A192F]/50 rounded-lg border border-white/5">
                    <div>
                      <p className="text-sm text-[#F8FAFC]">Legal Notice — Tenant Eviction</p>
                      <p className="text-xs text-[#64748B]">Mumbai · Submitted 2h ago</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-medium">Pending</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#0A192F]/50 rounded-lg border border-white/5">
                    <div>
                      <p className="text-sm text-[#F8FAFC]">Plumbing Repair — ₹15,000</p>
                      <p className="text-xs text-[#64748B]">Delhi NCR · Submitted 1d ago</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-medium">Approved</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#0A192F]/50 rounded-lg border border-white/5">
                    <div>
                      <p className="text-sm text-[#F8FAFC]">Quarterly Inspection Report</p>
                      <p className="text-xs text-[#64748B]">Noida · Completed today</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium">Review</span>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reporting Cycle */}
      <section className="py-24 md:py-32" data-testid="reporting-cycle">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center">
            <FadeIn><SectionLabel>Reporting Cycle</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">Stay Informed, <span className="text-[#F59E0B]">Always</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {reportCycles.map((item, i) => (
              <FadeIn key={item.period} delay={i * 0.1}>
                <GlassCard className="p-6 text-center hover:border-[#F59E0B]/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-[#F59E0B]" />
                  </div>
                  <h4 className="text-[#F8FAFC] font-medium">{item.period}</h4>
                  <p className="text-sm text-[#64748B] mt-2">{item.desc}</p>
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
            <SectionHeading>Ready to Get <span className="text-[#F59E0B]">Started?</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Onboarding takes less than 10 minutes. Protection begins immediately.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow"
              data-testid="hiw-cta"
            >
              Start Your Protection Journey <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
