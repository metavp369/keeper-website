import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919892217345?text=Hi%20KEEPER%2C%20I%27d%20like%20to%20know%20more%20about%20your%20property%20protection%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold pl-4 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 group"
      data-testid="whatsapp-floating-button"
    >
      <MessageCircle size={20} className="fill-white" />
      <span className="text-sm hidden sm:inline">Chat with us</span>
    </a>
  );
}
