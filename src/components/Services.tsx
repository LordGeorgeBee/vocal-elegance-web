import { Music, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create unforgettable moments with classical and operatic performances that elevate your special day."
  },
  {
    icon: Music,
    title: "Funerals",
    description: "Honor your loved ones with dignified and moving musical tributes that celebrate their memory."
  },
  {
    icon: Star,
    title: "Special Events",
    description: "Add sophistication to your corporate events, private parties, and celebrations with live classical performances."
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-12 h-12 mb-6 text-secondary mx-auto" />
              <h3 className="text-2xl font-display text-center mb-4">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};