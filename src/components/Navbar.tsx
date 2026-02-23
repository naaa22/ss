import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/profile-logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Equipment", href: "#equipment" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-construction-yellow/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Senthur Open Well Contractor Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading text-lg md:text-xl font-bold text-primary uppercase tracking-wider">
            Senthur Open Well<span className="text-secondary-foreground"> Contractors</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="tel:+919944739415" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded font-bold text-sm hover:bg-primary/90 transition">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-secondary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-construction-yellow/20 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-secondary-foreground/80 hover:text-primary hover:bg-secondary/80 transition text-sm uppercase tracking-wide">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
