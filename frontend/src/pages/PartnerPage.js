import { useState } from "react";
import axios from "axios";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "components/shared";
import {
  Users, Scale, Calculator, Globe, Gift, Building2,
  ArrowRight, Check, Handshake
} from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const partnerTypes = [
  {
    icon: Scale,
    title: "Legal Professionals",
    desc: "Add property protection to your service offerings. We refer clients who need ongoing legal coordination, and you gain access to organized clients with clear documentation.",
    ideal: "Property lawyers, litigation attorneys, legal consultants serving NRIs",
    color: "#3B82F6",
  },
  {
    icon: Calculator,
    title: "Chartered Accountants",
    desc: "Help your NRI clients stay compliant and protected. Our services complement tax planning and compliance work, ensuring properties are managed as carefully as finances.",
    ideal: "CAs serving NRI clients, tax advisors, wealth managers",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "NRI Advisors",
    desc: "Expand your advisory practice with property protection. Whether you help NRIs invest, relocate, or manage wealth, KEEPER adds a critical protection layer.",
    ideal: "Immigration consultants, wealth advisors, NRI consultants",
    color: "#F59E0B",
  },
  {
    icon: Gift,
    title: "Referral Partners",
    desc: "Individual referrals earn competitive commissions. If you know NRIs who own property in India, introduce them to KEEPER and earn ongoing referral fees.",
    ideal: "Anyone with NRI connections",
    color: "#3B82F6",
  },
  {
    icon: Building2,
    title: "City Operations Partners",
    desc: "As we expand to new cities, we seek local partners with property management experience, legal connections, and operational capability.",
    ideal: "Property management firms, local operators in expansion cities",
    color: "#10B981",
  },
];

export default function PartnerPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    property_cities: "",
    property_type: "Partnership Inquiry",
    challenge: "Partnership",
    message: "",
  });

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/consultations`, form);
      setSubmitted(true);
      toast.success("Partnership inquiry submitted!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="partner-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Partners</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Join the KEEPER <span className="font-accent italic text-[#F59E0B]">Network</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              KEEPER's growth creates opportunities for professionals who serve the NRI community. Deliver more value to your clients while growing your practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 md:py-32" data-testid="partner-types">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-6">
          {partnerTypes.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <GlassCard className="p-6 md:p-8 hover:border-white/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                      <p.icon size={24} style={{ color: p.color }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-[#F8FAFC] mb-2">{p.title}</h3>
                    <p className="text-[#64748B] leading-relaxed mb-3">{p.desc}</p>
                    <p className="text-sm"><span className="text-[#64748B]">Ideal for: </span><span style={{ color: p.color }}>{p.ideal}</span></p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 md:py-32" data-testid="partner-form-section">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <FadeIn><SectionLabel>Apply</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading className="mt-4">Partner <span className="text-[#F59E0B]">Application</span></SectionHeading>
            </FadeIn>
          </div>
          <FadeIn>
            {submitted ? (
              <GlassCard className="p-10 text-center">
                <Handshake size={40} className="text-[#10B981] mx-auto mb-4" />
                <h3 className="text-2xl font-light text-[#F8FAFC]">Thank You!</h3>
                <p className="text-[#64748B] mt-3">We've received your partnership inquiry. Our team will review and reach out within 48 hours.</p>
              </GlassCard>
            ) : (
              <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-[#64748B] mb-1.5 block">Full Name *</label>
                      <input value={form.full_name} onChange={e => update("full_name", e.target.value)} className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all" placeholder="Your name" data-testid="partner-input-name" />
                    </div>
                    <div>
                      <label className="text-sm text-[#64748B] mb-1.5 block">Email *</label>
                      <input type="email" value={form.email} onChange={e => update("email", e.target.value)} className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all" placeholder="email@example.com" data-testid="partner-input-email" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-[#64748B] mb-1.5 block">Phone *</label>
                      <input value={form.phone} onChange={e => update("phone", e.target.value)} className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all" placeholder="+91 98765 43210" data-testid="partner-input-phone" />
                    </div>
                    <div>
                      <label className="text-sm text-[#64748B] mb-1.5 block">City / Region</label>
                      <input value={form.property_cities} onChange={e => update("property_cities", e.target.value)} className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all" placeholder="Mumbai, Delhi..." data-testid="partner-input-city" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#64748B] mb-1.5 block">Tell us about yourself and your interest</label>
                    <textarea value={form.message} onChange={e => update("message", e.target.value)} rows={4} className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all resize-none" placeholder="Your background, how you'd like to partner..." data-testid="partner-input-message" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold py-3.5 rounded-lg transition-all duration-300 gold-glow disabled:opacity-50 flex items-center justify-center gap-2" data-testid="partner-submit-button">
                    {loading ? "Submitting..." : "Submit Application"} {!loading && <ArrowRight size={16} />}
                  </button>
                </form>
              </GlassCard>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
