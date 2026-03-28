import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_3789c7cc-db36-4cd7-85b8-1438aea538da/artifacts/vdyi61mx_logo.PNG";

export default function Footer() {
  return (
    <footer data-testid="main-footer" className="relative z-10 border-t border-white/10 bg-[#060E1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1" data-testid="footer-brand">
            <img src={LOGO_URL} alt="KEEPER" className="h-10 w-auto mb-4" />
            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mt-4">
              Premium property protection platform for NRIs. Monitor, secure, and manage your Indian real estate remotely.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#64748B] hover:text-[#F59E0B] hover:border-[#F59E0B]/30 transition-all duration-300"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {["Property Protection", "Legal Support", "Document Vault", "Inspections", "City Response Network"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-[#64748B] hover:text-[#F59E0B] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div data-testid="footer-company">
            <h4 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", path: "/how-it-works" },
                { label: "For NRIs", path: "/for-nris" },
                { label: "Pricing", path: "/pricing" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className="text-sm text-[#64748B] hover:text-[#F59E0B] transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div data-testid="footer-support">
            <h4 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-widest mb-5">Support</h4>
            <ul className="space-y-3">
              {["Trust & Security", "Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#64748B] hover:text-[#F59E0B] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-[#64748B]">Need help?</p>
              <a href="mailto:consult@keeper.in" className="text-sm text-[#F59E0B] font-medium hover:underline">
                consult@keeper.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748B]">
            &copy; {new Date().getFullYear()} KEEPER Property Protection Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[#64748B]">
            Built for Global Indians
          </p>
        </div>
      </div>
    </footer>
  );
}
