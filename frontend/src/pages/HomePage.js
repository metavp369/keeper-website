import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import {
  Shield, Eye, Scale, FileText, MapPin, Users, Clock, BarChart3,
  AlertTriangle, Search, ChevronRight, Check, Star, ArrowRight,
  Building2, Globe, Lock, UserCheck, Bell, FileCheck, Zap, Phone
} from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/3789c7cc-db36-4cd7-85b8-1438aea538da/images/d05d47c301d19c79c6d29317a6452532730c1919f4e012d10fdd2445a8e234cb.png";
const COVERAGE_MAP = "https://static.prod-images.emergentagent.com/jobs/3789c7cc-db36-4cd7-85b8-1438aea538da/images/00aa251c08766e3127b05e9f54fe7f410ca4b93aa43c266d61965311d9ae3a66.png";
const PREMIUM_PROPERTY = "https://static.prod-images.emergentagent.com/jobs/3789c7cc-db36-4cd7-85b8-1438aea538da/images/1e18efceff2f5db2214febb115de92c4d6c31ab077b8ec1fd5ca13b7f4c10498.png";

const countries = [
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇦🇺", name: "Australia" },
];

const painPoints = [
  { icon: Search, title: "No Visibility", desc: "You don't know what's happening until it's a crisis" },
  { icon: Users, title: "Dependence on Intermediaries", desc: "Relatives, brokers, caretakers with conflicting priorities" },
  { icon: Scale, title: "Legal Complexity", desc: "Navigating Indian property law from thousands of miles away" },
  { icon: AlertTriangle, title: "Encroachment Risk", desc: "Vacant properties attract unauthorized occupation" },
  { icon: BarChart3, title: "Asset Deterioration", desc: "Lack of maintenance erodes property value" },
];

const steps = [
  { num: "01", title: "Add Your Property", desc: "Upload documents, verify ownership, establish your digital property record.", icon: FileText },
  { num: "02", title: "Activate Protection", desc: "Choose your plan and authorize KEEPER to act on your behalf.", icon: Shield },
  { num: "03", title: "Local Team Assignment", desc: "City-specific response team with legal and operational expertise.", icon: MapPin },
  { num: "04", title: "Continuous Monitoring", desc: "Regular inspections, tenant check-ins, and compliance tracking.", icon: Eye },
  { num: "05", title: "Remote Control", desc: "Receive alerts, approve actions, review reports from your dashboard.", icon: Zap },
];

const features = [
  { icon: BarChart3, title: "Property Dashboard", desc: "Unified view of all properties with health scores and pending actions.", size: "lg" },
  { icon: Bell, title: "Risk Alerts", desc: "Real-time notifications for encroachment, tenant issues, and compliance deadlines.", size: "sm" },
  { icon: Scale, title: "Legal Support", desc: "Coordinated legal assistance for disputes, documentation, and case management.", size: "sm" },
  { icon: Eye, title: "Scheduled Inspections", desc: "Regular physical inspections with photo documentation and condition reports.", size: "sm" },
  { icon: Lock, title: "Document Vault", desc: "Secure, encrypted storage for all property documents with organized access.", size: "sm" },
  { icon: MapPin, title: "City Action Teams", desc: "Verified local teams in Delhi NCR, Mumbai, Noida, and Gurgaon.", size: "lg" },
  { icon: UserCheck, title: "Remote Authorization", desc: "Digital approval workflows for legal actions, repairs, and tenant decisions.", size: "sm" },
  { icon: FileCheck, title: "Monthly Reports", desc: "Comprehensive activity summaries, financial tracking, and recommendations.", size: "sm" },
];

const trustPillars = [
  { icon: FileCheck, title: "Audit Trails", desc: "Every action logged, timestamped, and accessible." },
  { icon: Check, title: "Verified Workflows", desc: "Multi-step verification for all legal and financial actions." },
  { icon: UserCheck, title: "Local Team Vetting", desc: "Rigorous background checks and professional training." },
  { icon: Scale, title: "Legal Network", desc: "Vetted lawyers in each city with proven track records." },
  { icon: Lock, title: "Data Security", desc: "Bank-grade encryption for documents and communications." },
  { icon: Zap, title: "Structured Escalation", desc: "Clear protocols with defined response times." },
];

const plans = [
  {
    name: "Basic",
    subtitle: "Essential Protection",
    price: "2,999",
    features: ["Dashboard access", "Document vault", "Risk alerts", "Annual property review", "Email support"],
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Enhanced Monitoring",
    price: "7,999",
    features: ["Everything in Basic", "Quarterly inspections", "Enhanced legal coordination", "Tax & compliance reminders", "City response access", "Priority support"],
    popular: true,
  },
  {
    name: "Elite",
    subtitle: "Comprehensive Management",
    price: "14,999",
    features: ["Everything in Premium", "Dedicated relationship manager", "Priority issue resolution", "Urgent field support", "Advanced reporting", "Custom workflows"],
    popular: false,
  },
];

/* ============ HERO ============ */
function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-[#0A192F]/80 to-[#0A192F]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-8">
                <Shield size={14} className="text-[#F59E0B]" />
                <span className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest">NRI Property Protection</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-light text-[#F8FAFC] leading-[1.1]">
                Your Property in India.{" "}
                <span className="font-accent italic text-[#F59E0B]">Protected</span> From Anywhere.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
                Monitor, secure, and manage your Indian real estate remotely through one integrated dashboard — backed by legal coordination and on-ground city teams.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow inline-flex items-center gap-2"
                  data-testid="hero-cta-primary"
                >
                  Protect My Property <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                  data-testid="hero-cta-secondary"
                >
                  Book a Consultation
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-12 flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#112240] border-2 border-[#0A192F] flex items-center justify-center text-xs text-[#F59E0B] font-bold">
                        {String.fromCharCode(64+i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-[#64748B]">500+ NRIs trust KEEPER</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                  <span className="text-sm text-[#64748B] ml-1">4.9/5</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} className="hidden lg:block">
            <DashboardMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative" data-testid="dashboard-mockup">
      <div className="glass-card p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="ml-3 text-xs text-[#64748B]">KEEPER Dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Properties", value: "3", color: "text-[#F59E0B]" },
            { label: "Protected", value: "100%", color: "text-[#10B981]" },
            { label: "Alerts", value: "0", color: "text-[#10B981]" },
          ].map(item => (
            <div key={item.label} className="bg-[#0A192F]/50 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] text-[#64748B] uppercase tracking-wider">{item.label}</p>
              <p className={`text-2xl font-light ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { city: "Delhi NCR", type: "Apartment", status: "Protected", color: "bg-[#10B981]" },
            { city: "Mumbai", type: "Villa", status: "Protected", color: "bg-[#10B981]" },
            { city: "Noida", type: "Plot", status: "Attention", color: "bg-[#F59E0B]" },
          ].map(prop => (
            <div key={prop.city} className="flex items-center justify-between p-3 bg-[#0A192F]/30 rounded-lg border border-white/5">
              <div className="flex items-center gap-3">
                <Building2 size={16} className="text-[#64748B]" />
                <div>
                  <p className="text-sm text-[#F8FAFC]">{prop.city}</p>
                  <p className="text-[10px] text-[#64748B]">{prop.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${prop.color}`} />
                <span className="text-xs text-[#64748B]">{prop.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-3xl" />
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#10B981]/10 rounded-full blur-3xl" />
    </div>
  );
}

/* ============ LOGO BAR ============ */
function LogoBar() {
  return (
    <section data-testid="logo-bar" className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-center text-sm text-[#64748B] uppercase tracking-widest mb-8">Trusted by NRIs across</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {countries.map(c => (
              <div key={c.name} className="flex items-center gap-2 text-[#F8FAFC]/60">
                <span className="text-2xl">{c.flag}</span>
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============ PROBLEM ============ */
function ProblemSection() {
  return (
    <section data-testid="problem-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <SectionLabel>The Challenge</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">
                Owning Property From Abroad Shouldn't Mean <span className="text-[#F59E0B]">Losing Control</span>
              </SectionHeading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
                For global Indians, property ownership in India is both an emotional anchor and a financial asset. Yet distance creates vulnerability. Without regular oversight, properties become targets.
              </p>
            </FadeIn>
          </div>
          <div className="space-y-4">
            {painPoints.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <GlassCard className="p-5 flex items-start gap-4 hover:border-[#EF4444]/20 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF4444]/20 transition-colors">
                    <item.icon size={18} className="text-[#EF4444]" />
                  </div>
                  <div>
                    <h4 className="text-[#F8FAFC] font-medium">{item.title}</h4>
                    <p className="text-sm text-[#64748B] mt-1">{item.desc}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SOLUTION ============ */
function SolutionSection() {
  const pillars = [
    {
      title: "Technology",
      icon: BarChart3,
      items: ["Real-time monitoring dashboard", "Document vault with secure access", "Digital authorization workflows", "Automated compliance reminders"],
    },
    {
      title: "Legal Coordination",
      icon: Scale,
      items: ["Structured legal support workflows", "Vetted lawyer network across cities", "Notice drafting and case tracking", "POA management and verification"],
    },
    {
      title: "On-Ground Execution",
      icon: MapPin,
      items: ["City-based inspection teams", "Society and tenant coordination", "Urgent site visit capability", "Professional escalation protocols"],
    },
  ];

  return (
    <section data-testid="solution-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/[0.03] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn><SectionLabel>The Solution</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">
              One Platform. <span className="text-[#10B981]">Complete Protection.</span>
            </SectionHeading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B]">
              KEEPER combines technology, legal coordination, and on-ground city teams into a single protection platform.
            </p>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.15}>
              <GlassCard className="p-8 h-full hover:border-[#10B981]/20 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:bg-[#10B981]/20 transition-colors">
                  <pillar.icon size={22} className="text-[#10B981]" />
                </div>
                <h3 className="text-xl font-medium text-[#F8FAFC] mb-4">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#64748B]">
                      <Check size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ HOW IT WORKS SNAPSHOT ============ */
function HowItWorksPreview() {
  return (
    <section data-testid="how-it-works-preview" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn><SectionLabel>How It Works</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">Protection in <span className="text-[#F59E0B]">Five Steps</span></SectionHeading>
          </FadeIn>
        </div>
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <div className="relative text-center group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#112240] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#F59E0B]/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-500 relative z-10">
                    <step.icon size={24} className="text-[#F59E0B]" />
                  </div>
                  <span className="text-xs text-[#F59E0B] font-bold tracking-widest">{step.num}</span>
                  <h4 className="text-sm font-semibold text-[#F8FAFC] mt-2">{step.title}</h4>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#F59E0B] hover:underline font-medium text-sm" data-testid="how-it-works-link">
              View the full journey <ChevronRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============ FEATURES GRID ============ */
function FeaturesGrid() {
  return (
    <section data-testid="features-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F59E0B]/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn><SectionLabel>Capabilities</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">Everything You Need to <span className="text-[#F59E0B]">Protect</span> Your Investment</SectionHeading>
          </FadeIn>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08} className={f.size === "lg" ? "md:col-span-2" : ""}>
              <GlassCard className="p-6 h-full hover:border-[#F59E0B]/20 transition-all duration-500 group">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center mb-4 group-hover:bg-[#F59E0B]/20 transition-colors">
                  <f.icon size={20} className="text-[#F59E0B]" />
                </div>
                <h4 className="text-[#F8FAFC] font-medium mb-2">{f.title}</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TRUST ============ */
function TrustSection() {
  return (
    <section data-testid="trust-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn><SectionLabel>Trust & Security</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">Built for Trust. Designed for <span className="text-[#10B981]">Peace of Mind.</span></SectionHeading>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {trustPillars.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <GlassCard className="p-6 hover:border-[#10B981]/20 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                    <item.icon size={18} className="text-[#10B981]" />
                  </div>
                  <h4 className="text-[#F8FAFC] font-medium">{item.title}</h4>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY KEEPER ============ */
function WhyKeeperSection() {
  const comparisons = [
    { label: "Focus", broker: "Transactions", portal: "Marketing", keeper: "Protection" },
    { label: "Revenue", broker: "Commission-driven", portal: "Lead-generation", keeper: "Subscription-based" },
    { label: "Relationship", broker: "Intermittent", portal: "None", keeper: "Continuous monitoring" },
    { label: "Legal Support", broker: "Limited", portal: "None", keeper: "Integrated coordination" },
    { label: "Ground Teams", broker: "None", portal: "None", keeper: "Dedicated city teams" },
  ];

  return (
    <section data-testid="why-keeper-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#112240]/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn><SectionLabel>Why KEEPER</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">
              We're Not a Broker. We're Not a Portal.{" "}
              <span className="text-[#F59E0B]">We're Your Protection Partner.</span>
            </SectionHeading>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full" data-testid="comparison-table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm text-[#64748B] font-medium"></th>
                  <th className="text-center py-4 px-4 text-sm text-[#64748B] font-medium">Traditional Brokers</th>
                  <th className="text-center py-4 px-4 text-sm text-[#64748B] font-medium">Listing Sites</th>
                  <th className="text-center py-4 px-4 text-sm text-[#F59E0B] font-semibold">KEEPER</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(row => (
                  <tr key={row.label} className="border-b border-white/5">
                    <td className="py-4 px-4 text-sm text-[#F8FAFC] font-medium">{row.label}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#64748B]">{row.broker}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#64748B]">{row.portal}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#10B981] font-medium">{row.keeper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-center text-[#64748B] mt-8 max-w-2xl mx-auto">
            We don't help you buy or sell. We help you <span className="text-[#F8FAFC] font-medium">keep what's yours.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============ COVERAGE ============ */
function CoverageSection() {
  const activeCities = ["Delhi NCR", "Mumbai", "Noida", "Gurgaon"];
  const comingSoon = ["Bengaluru", "Hyderabad", "Chennai", "Pune", "Jaipur"];

  return (
    <section data-testid="coverage-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn><SectionLabel>Coverage</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">Active in India's Key <span className="text-[#10B981]">Property Markets</span></SectionHeading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 space-y-3">
                {activeCities.map(city => (
                  <div key={city} className="flex items-center gap-3 p-3 rounded-lg bg-[#10B981]/5 border border-[#10B981]/10">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[#F8FAFC] font-medium">{city}</span>
                    <span className="text-xs text-[#10B981] ml-auto">Full service</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-6">
                <p className="text-sm text-[#64748B] mb-3">Coming Soon:</p>
                <div className="flex flex-wrap gap-2">
                  {comingSoon.map(city => (
                    <span key={city} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#64748B]">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="relative">
            <img src={COVERAGE_MAP} alt="KEEPER Coverage" className="w-full rounded-2xl opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent rounded-2xl" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ============ PRICING PREVIEW ============ */
function PricingPreview() {
  return (
    <section data-testid="pricing-preview" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F59E0B]/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn><SectionLabel>Plans</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading className="mt-4">Transparent <span className="text-[#F59E0B]">Protection Plans</span></SectionHeading>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <GlassCard className={`p-8 h-full relative ${plan.popular ? "border-[#F59E0B]/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]" : ""}`} data-testid={`pricing-card-${plan.name.toLowerCase()}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F59E0B] text-[#0A192F] text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-[#F8FAFC]">{plan.name}</h3>
                <p className="text-sm text-[#64748B] mt-1">{plan.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-light text-[#F8FAFC]">&#8377;{plan.price}</span>
                  <span className="text-sm text-[#64748B]">/month</span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">per property</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <Check size={14} className="text-[#10B981] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className={`mt-8 block text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] gold-glow"
                      : "bg-white/5 border border-white/10 text-[#F8FAFC] hover:bg-white/10"
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-[#F59E0B] hover:underline font-medium text-sm">
              View Full Pricing Details <ChevronRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============ TESTIMONIAL ============ */
function TestimonialSection() {
  return (
    <section data-testid="testimonial-section" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <FadeIn>
          <SectionLabel>Client Stories</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.15}>
          <blockquote className="mt-8">
            <p className="font-accent italic text-2xl md:text-3xl text-[#F8FAFC]/90 leading-relaxed">
              "I used to worry about my Mumbai apartment constantly from Dubai. Now I check my KEEPER dashboard weekly, and I know exactly what's happening. When my tenant had an issue, the local team handled it within 24 hours."
            </p>
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="mt-8">
            <p className="text-[#F8FAFC] font-medium">Rajesh M.</p>
            <p className="text-sm text-[#64748B] mt-1">Property Owner, Mumbai | Resident of Dubai, UAE</p>
            <p className="text-xs text-[#F59E0B] mt-1">2 properties under KEEPER protection</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCTA() {
  return (
    <section data-testid="final-cta" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#112240]/50 to-[#0A192F]" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center">
        <FadeIn>
          <SectionHeading>Ready to Protect Your Property <span className="text-[#F59E0B]">Remotely?</span></SectionHeading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-[#64748B]">
            Schedule a confidential consultation with our NRI property advisors. We'll assess your situation and recommend the right protection plan.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow inline-flex items-center gap-2"
              data-testid="final-cta-primary"
            >
              Book a Confidential Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              data-testid="final-cta-secondary"
            >
              Request a Protection Assessment
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#64748B]">
            <Lock size={14} className="text-[#10B981]" />
            Your information is confidential. No obligation. No pressure.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============ HOME PAGE ============ */
export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksPreview />
      <FeaturesGrid />
      <TrustSection />
      <WhyKeeperSection />
      <CoverageSection />
      <PricingPreview />
      <TestimonialSection />
      <FinalCTA />
    </div>
  );
}
