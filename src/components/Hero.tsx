import { Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/project-9.jpeg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Deep excavation with long boom excavator" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-construction-black/90 via-construction-navy/80 to-construction-black/70" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-20 text-center md:text-left">
      <div className="max-w-3xl">
        <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded font-heading text-sm uppercase tracking-widest mb-6 font-bold">
          Tiruchengode, Tamil Nadu
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-4">
          Professional Well Digging & JCB Earthwork Services
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 font-body">
          Fast • Reliable • Affordable — <span className="text-primary font-bold">100+ Projects Completed</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="tel:+919944739415" className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg font-bold uppercase tracking-wide transition shadow-lg shadow-primary/30">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="https://wa.me/919944739415?text=Hi%2C%20I%20need%20well%20digging%20%2F%20JCB%20earthwork%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-heading text-lg font-bold uppercase tracking-wide transition shadow-lg">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex gap-8 justify-center md:justify-start">
          {[
            { num: "100+", label: "Projects Done" },
            { num: "50+", label: "Staff Members" },
            { num: "4", label: "Heavy Machines" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.num}</div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
