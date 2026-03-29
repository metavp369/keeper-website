import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "components/shared";
import {
  Shield, Eye, Scale, FileText, MapPin, Users, Clock, Bell,
  ArrowRight, Check, Lock, Search, AlertTriangle, Building2, UserCheck
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Property Protection",
    desc: "Comprehensive risk prevention for your Indian real estate. We monitor for encroachment risks, unauthorized access, and property condition deterioration.",
    includes: ["Regular perimeter checks", "Boundary verification", "Unauthorized construction monitoring", "Access control verification", "Risk assessment reports"],
    color: "#10B981",
  },
  {
    icon: Bell,
    title: "Risk Monitoring",
    desc: "24/7 alert system for threats to your property. From tenant payment defaults to suspicious activity in your neighborhood.",
    includes: ["Real-time alerts", "Neighborhood monitoring", "Market risk updates", "Regulatory change notifications", "Early warning systems"],
    color: "#F59E0B",
  },
  {
    icon: Scale,
    title: "Legal Support",
    desc: "Structured legal coordination when you need it. We coordinate with vetted lawyers, manage documentation, and track case progress.",
    includes: ["Lawyer referral and coordination", "Document preparation support", "Case status tracking", "POA management", "Legal notice assistance"],
    color: "#3B82F6",
  },
  {
    icon: Lock,
    title: "Document Management",
    desc: "Secure, organized, accessible. Your property documents in a bank-grade encrypted vault with intelligent organization.",
    includes: ["Document upload and storage", "Title deed verification", "Encumbrance certificate tracking", "Tax receipt organization", "Secure sharing"],
    color: "#10B981",
  },
  {
    icon: Eye,
    title: "Property Inspections",
    desc: "Professional physical inspections on your schedule. Trained agents visit, document conditions with photos, and provide detailed reports.",
    includes: ["Scheduled inspections", "On-demand visits", "Condition documentation", "Maintenance assessments", "Photo/video reports"],
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Tenant/Caretaker Coordination",
    desc: "Professional oversight of occupants and property managers. We verify identities, monitor compliance, and coordinate communication.",
    includes: ["Identity verification", "Rent payment tracking", "Agreement compliance", "Move-in/move-out documentation", "Dispute coordination"],
    color: "#3B82F6",
  },
  {
    icon: Clock,
    title: "Compliance Reminders",
    desc: "Never miss a deadline. Automated tracking for property tax payments, society maintenance, insurance renewals, and regulatory filings.",
    includes: ["Tax deadline alerts", "Maintenance payment tracking", "Renewal reminders", "Filing assistance", "Penalty avoidance"],
    color: "#10B981",
  },
  {
    icon: MapPin,
    title: "Local Response Support",
    desc: "When urgent issues arise, our city teams respond. From leak repairs to security concerns, we coordinate immediate on-ground action.",
    includes: ["Urgent site visits", "Vendor coordination", "Emergency repairs", "Security incident response", "Society liaison"],
    color: "#F59E0B",
  },
];

export default function ServicesPage() {
  return (
    <div data-testid="services-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Our Services</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Complete Property <span className="font-accent italic text-[#F59E0B]">Protection</span> Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Eight integrated service categories designed to keep your Indian property secure, compliant, and well-maintained from anywhere in the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <GlassCard className="p-8 md:p-10 hover:border-white/10 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <service.icon size={26} style={{ color: service.color }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-[#F8FAFC] mb-3">{service.title}</h3>
                      <p className="text-[#64748B] leading-relaxed mb-6">{service.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.includes.map(item => (
                          <div key={item} className="flex items-center gap-2">
                            <Check size={14} className="flex-shrink-0" style={{ color: service.color }} />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <SectionHeading>Need a Custom <span className="text-[#F59E0B]">Solution?</span></SectionHeading>
            <p className="mt-4 text-[#64748B]">Our advisors can create a tailored protection plan for your unique situation.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow"
              data-testid="services-cta"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
