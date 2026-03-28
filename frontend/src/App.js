import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import ServicesPage from "@/pages/ServicesPage";
import PricingPage from "@/pages/PricingPage";
import ForNRIsPage from "@/pages/ForNRIsPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import DemoDashboardPage from "@/pages/DemoDashboardPage";
import AboutPage from "@/pages/AboutPage";
import LegalSupportPage from "@/pages/LegalSupportPage";
import CityResponsePage from "@/pages/CityResponsePage";
import PartnerPage from "@/pages/PartnerPage";
import TrustSecurityPage from "@/pages/TrustSecurityPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="grain-overlay min-h-screen bg-[#0A192F]">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/for-nris" element={<ForNRIsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/demo" element={<DemoDashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/legal-support" element={<LegalSupportPage />} />
            <Route path="/cities" element={<CityResponsePage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/trust-security" element={<TrustSecurityPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
