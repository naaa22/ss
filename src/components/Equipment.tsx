import { Truck, Cog, Wrench, Hammer } from "lucide-react";

const machines = [
  { icon: Truck, name: "Long Boom Excavator", desc: "Extended reach for deep well digging and large excavation projects" },
  { icon: Cog, name: "Mini Excavator", desc: "Compact machine for tight spaces and precision work" },
  { icon: Wrench, name: "Crane Compressor", desc: "Heavy lifting and pneumatic drilling support equipment" },
  { icon: Hammer, name: "Hydraulic Jacky", desc: "Powerful hydraulic equipment for rock breaking and hard terrain" },
];

const Equipment = () => (
  <section id="equipment" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="font-heading text-primary uppercase tracking-widest text-sm font-bold">Our Machines</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground uppercase mt-2">Heavy Equipment</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {machines.map((m) => (
          <div key={m.name} className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <m.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground uppercase mb-2">{m.name}</h3>
            <p className="text-muted-foreground text-sm">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Equipment;
