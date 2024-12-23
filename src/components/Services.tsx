import { Music, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Memorial Services",
    description: "Offering a selection of dignified and moving musical tributes for memorial services. From timeless hymns to classical pieces, I provide heartfelt performances that honor your loved ones with grace and reverence."
  },
  {
    icon: Heart,
    title: "Celebration of Life",
    description: "Creating meaningful musical moments for celebration of life ceremonies. I work closely with families to select pieces that celebrate and commemorate their loved one's journey, bringing comfort and solace through carefully chosen musical selections."
  },
  {
    icon: Star,
    title: "Religious Services",
    description: "Experienced in performing appropriate musical selections for various religious and cultural traditions. Whether traditional hymns or classical pieces, I ensure each performance respects and enhances the spiritual significance of the service."
  }
];

export const Services = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-8 md:mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-secondary mx-auto" />
              <h3 className="text-xl md:text-2xl font-display text-center mb-3 md:mb-4">{service.title}</h3>
              <p className="text-center text-foreground/80 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};