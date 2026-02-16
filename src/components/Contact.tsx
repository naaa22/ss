import { useState } from "react";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";

const workTypes = ["Open Well Digging", "Borewell Support", "Farm Pond Excavation", "JCB Earthwork", "Land Clearing", "Foundation Digging", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "", workType: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name} from ${form.location}. I need ${form.workType}. Please contact me at ${form.phone}.`;
    window.open(`https://wa.me/919944739415?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-heading text-primary uppercase tracking-widest text-sm font-bold">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground uppercase mt-2">Free Quote</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            <input required placeholder="Your Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            <select required value={form.workType} onChange={(e) => setForm({ ...form, workType: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select Work Type</option>
              {workTypes.map((w) => <option key={w} value={w}>{w}</option>)}
            </select>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-heading text-lg font-bold uppercase tracking-wide transition">
              <Send className="w-5 h-5" /> Send via WhatsApp
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase">Call Us</h3>
                <a href="tel:+919944739415" className="text-muted-foreground hover:text-primary transition">+91 99447 39415</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase">WhatsApp</h3>
                <a href="https://wa.me/919944739415" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">+91 99447 39415</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase">Instagram</h3>
                <a href="https://www.instagram.com/senthur_open_well_contractor" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">@senthur_open_well_contractor</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase">Location</h3>
                <p className="text-muted-foreground">Kamalar, Tiruchengode,<br />Tamil Nadu 637211</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border h-48">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5!2d77.89!3d11.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIyJzQ4LjAiTiA3N8KwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
