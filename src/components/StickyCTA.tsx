import { Phone, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyCTA = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-t border-construction-yellow/20 p-3 flex gap-3">
        <a href="tel:+919944739415" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-heading font-bold uppercase text-sm tracking-wide">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href="https://wa.me/919944739415" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-heading font-bold uppercase text-sm tracking-wide">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    );
  }

  return (
    <a href="https://wa.me/919944739415?text=Hi%2C%20I%20need%20well%20digging%20%2F%20earthwork%20services." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 transition-transform hover:scale-110">
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default StickyCTA;
