import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_3789c7cc-db36-4cd7-85b8-1438aea538da/artifacts/vdyi61mx_logo.PNG";

const navLinks = [
  { label: "How It Works", path: "/how-it-works" },
  { label: "Services", path: "/services" },
  { label: "For NRIs", path: "/for-nris" },
  { label: "Legal Support", path: "/legal-support" },
  { label: "Cities", path: "/cities" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A192F]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 relative z-50" data-testid="header-logo">
            <img src={LOGO_URL} alt="KEEPER" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-[#F59E0B] bg-[#F59E0B]/10"
                    : "text-[#F8FAFC]/70 hover:text-[#F8FAFC] hover:bg-white/5"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-sm"
              data-testid="header-cta-button"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-white"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0A192F]/98 backdrop-blur-xl z-40" data-testid="mobile-nav">
          <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-[#F59E0B]"
                    : "text-[#F8FAFC]/70 hover:text-[#F8FAFC]"
                }`}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-3 rounded-lg transition-all duration-300 gold-glow"
              data-testid="mobile-cta-button"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
