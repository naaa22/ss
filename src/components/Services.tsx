import { Droplets, Mountain, Waves, Truck, TreePine, Building } from "lucide-react";
import deepExcavation from "@/assets/project-9.jpeg";

const services = [
  { icon: Droplets, title: "Open Well Digging", desc: "Expert open well construction for agricultural and residential water needs with modern excavation equipment." },
  { icon: Mountain, title: "Borewell Support Work", desc: "Professional support services for borewell operations including site preparation and finishing work." },
  { icon: Waves, title: "Farm Pond Excavation", desc: "Large-scale farm pond digging for irrigation and rainwater harvesting across Tamil Nadu." },
  { icon: Truck, title: "JCB Earthwork", desc: "Heavy-duty earthmoving services using Long Boom and Mini Excavators for any terrain." },
];

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="font-heading text-primary uppercase tracking-widest text-sm font-bold">What We Do</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground uppercase mt-2">Our Services</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href="https://wa.me/919944739415?text=Hi%2C%20I%20need%20enquiry%20about%20" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm uppercase tracking-wide hover:underline">
              Enquire Now →
            </a>
          </div>
        ))}
      </div>

      {/* Deep Excavation Photo */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src={deepExcavation} 
            alt="Deep well excavation with long boom excavator" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Services;
