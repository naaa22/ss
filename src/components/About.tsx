import { Shield, Clock, Users, MapPin } from "lucide-react";
import projectImg from "@/assets/project-5.jpeg";

const About = () => (
  <section id="about" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-heading text-primary uppercase tracking-widest text-sm font-bold">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground uppercase mt-2 mb-6">
            Senthur Open Well Contractor
          </h2>
          <p className="text-secondary-foreground/70 leading-relaxed mb-6">
            Led by <strong className="text-secondary-foreground">Sathish</strong>, Senthur Open Well Contractor has become a trusted name in well digging and earthwork services across Tamil Nadu. With 100+ successful projects and a dedicated team of 50+ professionals, we deliver quality work on time, every time.
          </p>
          <p className="text-secondary-foreground/70 leading-relaxed mb-8">
            Based in Kamalar, Tiruchengode, we serve farmers, builders, and landowners across Tamil Nadu with our fleet of modern heavy equipment including Long Boom Excavators, Mini Excavators, Crane Compressors, and Hydraulic Jacks.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, text: "Safety First" },
              { icon: Clock, text: "On-Time Delivery" },
              { icon: Users, text: "50+ Expert Staff" },
              { icon: MapPin, text: "Tamil Nadu Wide" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={projectImg} alt="Senthur Open Well Contractor at work" className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]" />
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg font-heading">
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm uppercase tracking-wide">Projects Done</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
