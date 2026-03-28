import { useState } from "react";
import axios from "axios";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import { Lock, Clock, Phone, Mail, MessageCircle, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const propertyTypes = ["Apartment", "Villa", "Plot", "Commercial", "Multiple"];
const challenges = [
  "Preventive protection",
  "Tenant issue",
  "Legal dispute",
  "Document organization",
  "Inherited property",
  "Other",
];
const countries = ["UAE", "United Kingdom", "United States", "Canada", "Singapore", "Australia", "Other"];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    property_cities: "",
    property_type: "",
    challenge: "",
    preferred_time: "",
    how_heard: "",
    message: "",
  });

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 1) return form.full_name && form.email && form.phone && form.country;
    if (step === 2) return form.property_cities && form.property_type && form.challenge;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(`${API}/consultations`, form);
      setSubmitted(true);
      toast.success("Consultation request submitted successfully!");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div data-testid="contact-page" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-6 md:px-8 text-center py-32">
          <FadeIn>
            <div className="w-20 h-20 mx-auto rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6">
              <Check size={36} className="text-[#10B981]" />
            </div>
            <h1 className="text-4xl font-light text-[#F8FAFC]">Thank You</h1>
            <p className="mt-4 text-[#64748B] text-lg">
              Your consultation request has been received. Our team will reach out within 24 hours.
            </p>
            <p className="mt-2 text-sm text-[#64748B]">
              Check your email for a confirmation.
            </p>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="contact-page" className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Contact Us</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Start Your <span className="font-accent italic text-[#F59E0B]">Protection</span> Journey
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Schedule a confidential consultation. No pressure, no obligation — just professional advice.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-32" data-testid="consultation-form-section">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <GlassCard className="p-8 md:p-10">
                  {/* Progress */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map(s => (
                      <div key={s} className="flex items-center gap-2 flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          s <= step ? "bg-[#F59E0B] text-[#0A192F]" : "bg-white/10 text-[#64748B]"
                        }`}>
                          {s}
                        </div>
                        {s < 3 && <div className={`flex-1 h-px ${s < step ? "bg-[#F59E0B]" : "bg-white/10"}`} />}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Personal */}
                  {step === 1 && (
                    <div className="space-y-5" data-testid="form-step-1">
                      <h3 className="text-xl font-light text-[#F8FAFC] mb-6">Your Details</h3>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Full Name *</label>
                        <input
                          value={form.full_name}
                          onChange={e => update("full_name", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          placeholder="Rajesh Mehta"
                          data-testid="input-full-name"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Email Address *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => update("email", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          placeholder="rajesh@example.com"
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Phone / WhatsApp *</label>
                        <input
                          value={form.phone}
                          onChange={e => update("phone", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          placeholder="+971 50 123 4567"
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Country of Residence *</label>
                        <select
                          value={form.country}
                          onChange={e => update("country", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          data-testid="select-country"
                        >
                          <option value="">Select country</option>
                          {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Property */}
                  {step === 2 && (
                    <div className="space-y-5" data-testid="form-step-2">
                      <h3 className="text-xl font-light text-[#F8FAFC] mb-6">Property Details</h3>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Property City/Cities *</label>
                        <input
                          value={form.property_cities}
                          onChange={e => update("property_cities", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          placeholder="Delhi, Mumbai"
                          data-testid="input-property-cities"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Property Type *</label>
                        <div className="flex flex-wrap gap-2" data-testid="property-type-options">
                          {propertyTypes.map(type => (
                            <button
                              key={type}
                              onClick={() => update("property_type", type)}
                              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                                form.property_type === type
                                  ? "bg-[#F59E0B] text-[#0A192F] font-semibold"
                                  : "bg-white/5 border border-white/10 text-[#F8FAFC] hover:bg-white/10"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Current Challenge *</label>
                        <select
                          value={form.challenge}
                          onChange={e => update("challenge", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          data-testid="select-challenge"
                        >
                          <option value="">Select challenge</option>
                          {challenges.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Additional */}
                  {step === 3 && (
                    <div className="space-y-5" data-testid="form-step-3">
                      <h3 className="text-xl font-light text-[#F8FAFC] mb-6">Additional Information</h3>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Preferred Callback Time</label>
                        <input
                          value={form.preferred_time}
                          onChange={e => update("preferred_time", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          placeholder="e.g., Weekdays after 7 PM IST"
                          data-testid="input-preferred-time"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">How did you hear about KEEPER?</label>
                        <input
                          value={form.how_heard}
                          onChange={e => update("how_heard", e.target.value)}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all"
                          placeholder="Google, referral, social media..."
                          data-testid="input-how-heard"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#64748B] mb-1.5 block">Any additional message?</label>
                        <textarea
                          value={form.message}
                          onChange={e => update("message", e.target.value)}
                          rows={4}
                          className="bg-[#0A192F] border border-white/20 text-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-lg p-3 w-full outline-none transition-all resize-none"
                          placeholder="Tell us about your situation..."
                          data-testid="input-message"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 flex justify-between">
                    {step > 1 ? (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="text-[#64748B] hover:text-[#F8FAFC] transition-colors text-sm font-medium"
                        data-testid="form-back-button"
                      >
                        Back
                      </button>
                    ) : <div />}
                    {step < 3 ? (
                      <button
                        onClick={() => canProceed() && setStep(step + 1)}
                        disabled={!canProceed()}
                        className="bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-6 py-3 rounded-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
                        data-testid="form-next-button"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-3 rounded-lg transition-all duration-300 gold-glow disabled:opacity-50 inline-flex items-center gap-2"
                        data-testid="form-submit-button"
                      >
                        {loading ? "Submitting..." : "Submit Request"} {!loading && <ArrowRight size={16} />}
                      </button>
                    )}
                  </div>
                </GlassCard>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn delay={0.2}>
                <GlassCard className="p-6">
                  <h4 className="text-[#F8FAFC] font-medium mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    {[
                      "A confidential discussion about your property",
                      "Assessment of current challenges",
                      "Tailored protection recommendations",
                      "No pressure, no obligation",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <Check size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <GlassCard className="p-6">
                  <h4 className="text-[#F8FAFC] font-medium mb-4">Alternative Contact</h4>
                  <div className="space-y-3">
                    <a href="mailto:consult@keeper.in" className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#F59E0B] transition-colors">
                      <Mail size={16} className="text-[#F59E0B]" />
                      consult@keeper.in
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#F59E0B] transition-colors">
                      <Phone size={16} className="text-[#F59E0B]" />
                      +91-xxx-xxx-xxxx
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#F59E0B] transition-colors">
                      <MessageCircle size={16} className="text-[#F59E0B]" />
                      WhatsApp Chat
                    </a>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.4}>
                <GlassCard className="p-6 border-[#10B981]/10">
                  <h4 className="text-[#F8FAFC] font-medium mb-4">Our Commitment</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-[#64748B]">
                      <Lock size={14} className="text-[#10B981]" />
                      Confidentiality protected
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#64748B]">
                      <Clock size={14} className="text-[#10B981]" />
                      24-hour response time
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#64748B]">
                      <Check size={14} className="text-[#10B981]" />
                      No obligation consultation
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
