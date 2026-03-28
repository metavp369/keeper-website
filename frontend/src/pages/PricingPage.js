import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import { Check, ArrowRight, Zap, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  {
    name: "Basic",
    subtitle: "Essential Protection",
    price: "2,999",
    features: [
      "Secure dashboard access",
      "Document vault with 10GB storage",
      "Automated risk alerts",
      "Annual property review and report",
      "Email support (48-hour response)",
      "Basic compliance reminders",
      "Monthly activity newsletter",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Premium",
    subtitle: "Enhanced Monitoring",
    price: "7,999",
    features: [
      "Everything in Basic, plus:",
      "Quarterly physical inspections with photo reports",
      "Enhanced legal coordination (up to 2 matters/year)",
      "Tax and compliance deadline tracking",
      "City response team access (standard priority)",
      "Priority email and chat support (24-hour response)",
      "Tenant/caretaker coordination",
      "Bi-annual strategy consultation",
    ],
    popular: true,
    cta: "Choose Premium",
  },
  {
    name: "Elite",
    subtitle: "Comprehensive Management",
    price: "14,999",
    features: [
      "Everything in Premium, plus:",
      "Dedicated relationship manager",
      "Priority issue resolution (urgent response)",
      "Monthly physical inspections",
      "Unlimited legal coordination",
      "Urgent field support (same-day when possible)",
      "Advanced reporting and analytics",
      "Custom protection workflows",
      "Family office capabilities",
      "24/7 priority phone support",
    ],
    popular: false,
    cta: "Choose Elite",
  },
];

const oneTimeServices = [
  { name: "Document Verification", price: "4,999", desc: "Complete verification of property documents, title check, and encumbrance certificate review." },
  { name: "Emergency Site Visit", price: "9,999", desc: "Urgent physical inspection within 24 hours for crisis situations." },
  { name: "Legal Notice Assistance", price: "3,999", desc: "Drafting and dispatch of legal notices with lawyer coordination." },
  { name: "POA Setup", price: "5,999", desc: "Power of Attorney document preparation, review, and registration coordination." },
];

const faqs = [
  { q: "Are there any long-term contracts?", a: "No. All plans are month-to-month. You can cancel anytime with no cancellation fees." },
  { q: "Can I switch between plans?", a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle." },
  { q: "Is there a money-back guarantee?", a: "Yes. We offer a 30-day money-back guarantee on all subscription plans." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards, bank transfers, and international payment methods including Stripe for seamless global payments." },
  { q: "Can I add multiple properties?", a: "Yes. Each property is billed separately. Volume discounts are available for 3+ properties." },
];

export default function PricingPage() {
  return (
    <div data-testid="pricing-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Plans & Pricing</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Transparent <span className="font-accent italic text-[#F59E0B]">Protection</span> Plans
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Choose the level of protection that fits your needs. All plans include secure dashboard access and no long-term contracts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-24" data-testid="plans-section">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.15}>
                <GlassCard
                  className={`p-8 h-full relative flex flex-col ${
                    plan.popular ? "border-[#F59E0B]/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]" : ""
                  }`}
                  data-testid={`plan-card-${plan.name.toLowerCase()}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F59E0B] text-[#0A192F] text-xs font-bold rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-light text-[#F8FAFC]">{plan.name}</h3>
                  <p className="text-sm text-[#64748B] mt-1">{plan.subtitle}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-light text-[#F8FAFC]">&#8377;{plan.price}</span>
                    <span className="text-[#64748B]">/month</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">per property</p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#F8FAFC]/80">
                        <Check size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 block text-center py-3.5 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] gold-glow"
                        : "bg-white/5 border border-white/10 text-[#F8FAFC] hover:bg-white/10"
                    }`}
                    data-testid={`plan-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </Link>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="py-24 md:py-32" data-testid="one-time-services">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center">
            <FadeIn><SectionLabel>A La Carte</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">One-Time <span className="text-[#F59E0B]">Services</span></SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {oneTimeServices.map((svc, i) => (
              <FadeIn key={svc.name} delay={i * 0.1}>
                <GlassCard className="p-6 hover:border-[#F59E0B]/20 transition-all duration-500">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#F8FAFC] font-medium">{svc.name}</h4>
                    <span className="text-[#F59E0B] font-semibold whitespace-nowrap">&#8377;{svc.price}</span>
                  </div>
                  <p className="text-sm text-[#64748B]">{svc.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-16" data-testid="enterprise-section">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeIn>
            <GlassCard className="p-8 md:p-12 text-center border-[#F59E0B]/10">
              <Zap size={32} className="text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-2xl font-light text-[#F8FAFC]">Enterprise & Family Office</h3>
              <p className="text-[#64748B] mt-3 max-w-lg mx-auto">
                Custom solutions for multiple properties, family offices, and institutional clients. Tailored pricing based on your portfolio.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-3 rounded-lg transition-all duration-300 gold-glow"
                data-testid="enterprise-cta"
              >
                Contact for Custom Pricing <ArrowRight size={18} />
              </Link>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* All plans include */}
      <section className="py-24" data-testid="plans-include">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <SectionHeading>All Plans <span className="text-[#10B981]">Include</span></SectionHeading>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {["No long-term contracts", "30-day money-back guarantee", "Secure data handling", "Professional liability coverage"].map(item => (
                <div key={item} className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#10B981]/5 border border-[#10B981]/10">
                  <Check size={16} className="text-[#10B981]" />
                  <span className="text-sm text-[#F8FAFC]">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" data-testid="pricing-faq">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <FadeIn><SectionLabel>Pricing FAQ</SectionLabel></FadeIn>
          </div>
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 border-white/5">
                  <AccordionTrigger className="text-[#F8FAFC] text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B] pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
