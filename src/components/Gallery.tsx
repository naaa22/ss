import gallery1 from "@/assets/project-1.jpeg";
import gallery2 from "@/assets/project-2.jpeg";
import gallery3 from "@/assets/project-3.jpeg";
import gallery4 from "@/assets/project-4.jpeg";
import gallery5 from "@/assets/project-5.jpeg";
import gallery6 from "@/assets/project-6.jpeg";

const photos = [
  { src: gallery1, label: "Farm Pond Excavation" },
  { src: gallery2, label: "Open Well Construction" },
  { src: gallery3, label: "Well Digging in Progress" },
  { src: gallery4, label: "Large Farm Pond" },
  { src: gallery5, label: "Completed Farm Pond" },
  { src: gallery6, label: "New Excavator Ceremony" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-heading text-primary uppercase tracking-widest text-sm font-bold">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground uppercase mt-2">Project Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg aspect-square">
              <img src={p.src} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-construction-black/0 group-hover:bg-construction-black/50 transition-all flex items-end">
                <span className="text-white font-heading text-sm uppercase tracking-wide p-3 opacity-0 group-hover:opacity-100 transition-opacity">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
