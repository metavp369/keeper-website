import { useState } from "react";
import { FadeIn, SectionLabel, SectionHeading } from "@/components/shared";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    title: "About KEEPER",
    faqs: [
      { q: "Is KEEPER a real estate broker?", a: "No. KEEPER is a property protection platform. We don't help you buy, sell, or rent property. We protect assets you already own through monitoring, legal coordination, and on-ground management." },
      { q: "Do I need to travel to India to use KEEPER?", a: "No. KEEPER is designed specifically for remote management. All interactions, approvals, and oversight happen through your dashboard. You never need to visit India for routine property matters." },
      { q: "How is KEEPER different from hiring a property manager?", a: "Traditional property managers typically focus on rental management and maintenance. KEEPER provides comprehensive protection including legal coordination, risk monitoring, document security, and structured escalation — backed by technology that gives you visibility and control." },
    ],
  },
  {
    title: "Services & Process",
    faqs: [
      { q: "How do local teams work?", a: "We maintain verified teams in each city we serve. These teams conduct inspections, coordinate with societies, respond to urgent issues, and execute authorized actions. All team members undergo background checks and training." },
      { q: "How is legal support handled?", a: "We coordinate with vetted lawyers in each city. We don't provide legal advice ourselves — we organize your documentation, track case progress, facilitate communication, and ensure you have visibility into legal matters. All legal actions require your explicit authorization." },
      { q: "What documents are required to start?", a: "Basic property documents (sale deed, possession letter, recent tax receipts) help us verify ownership and create your property profile. Don't worry if documents are disorganized — we can help with that too." },
      { q: "Does KEEPER manage tenants?", a: "We coordinate with tenants and caretakers on your behalf — rent collection, issue resolution, compliance monitoring. For full rental management (marketing, tenant screening, lease negotiation), we can refer you to specialized partners." },
    ],
  },
  {
    title: "Coverage & Logistics",
    faqs: [
      { q: "Can multiple properties be added?", a: "Yes. Many clients protect multiple properties across different cities through a single dashboard. Family office and enterprise plans are available for large portfolios." },
      { q: "How do approvals work?", a: "You define authorization levels when you onboard. Some actions (routine inspections, document requests) can proceed automatically. Others (legal notices, major repairs, financial commitments) require your explicit digital approval through the dashboard." },
      { q: "What cities are covered?", a: "We currently operate in Delhi NCR, Mumbai, Noida, and Gurgaon. We're expanding to Bengaluru, Hyderabad, Chennai, Pune, and Jaipur." },
      { q: "What if there is an urgent issue?", a: "Our city teams maintain urgent response protocols. Depending on your plan, we can dispatch personnel within 24 hours for critical situations. You'll receive immediate alerts and regular updates until resolution." },
    ],
  },
  {
    title: "Pricing & Billing",
    faqs: [
      { q: "Are there any long-term contracts?", a: "No. All plans are month-to-month. You can cancel anytime with no cancellation fees." },
      { q: "Is there a money-back guarantee?", a: "Yes. We offer a 30-day money-back guarantee on all subscription plans." },
      { q: "Can I switch between plans?", a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle." },
    ],
  },
  {
    title: "Security & Privacy",
    faqs: [
      { q: "How are my documents protected?", a: "Your property documents are stored in bank-grade encrypted vaults with AES-256 encryption. Access is role-based and logged. We never share your documents with third parties without your explicit authorization." },
      { q: "Is my data shared with anyone?", a: "We comply with data protection regulations including GDPR. Your personal information is never sold or shared for marketing purposes. Document access is strictly role-based and logged." },
    ],
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = categories
    .map(cat => ({
      ...cat,
      faqs: cat.faqs.filter(
        f =>
          f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(cat => cat.faqs.length > 0);

  return (
    <div data-testid="faq-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Help Center</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Frequently Asked <span className="font-accent italic text-[#F59E0B]">Questions</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search questions..."
                className="bg-[#112240] border border-white/10 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-xl pl-12 pr-4 py-4 w-full outline-none transition-all"
                data-testid="faq-search"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24 md:pb-32" data-testid="faq-content">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            {filtered.map((cat, ci) => (
              <FadeIn key={cat.title} delay={ci * 0.1}>
                <div>
                  <h3 className="text-xl font-medium text-[#F8FAFC] mb-4">{cat.title}</h3>
                  <Accordion type="single" collapsible className="space-y-3">
                    {cat.faqs.map((faq, fi) => (
                      <AccordionItem
                        key={fi}
                        value={`${ci}-${fi}`}
                        className="glass-card px-6 border-white/5"
                        data-testid={`faq-item-${ci}-${fi}`}
                      >
                        <AccordionTrigger className="text-[#F8FAFC] text-left hover:no-underline py-5 text-sm">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#64748B] pb-5 text-sm leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748B]">No questions match your search. Try a different keyword.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
