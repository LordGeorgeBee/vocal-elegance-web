import { Music, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "From operatic arias to modern hits, I'll work closely with you to create the perfect personalized playlist for your special day. Whether you need ceremony music, reception entertainment, or both, I'll ensure every musical moment is magical."
  },
  {
    icon: Music,
    title: "Funerals",
    description: "Honor your loved ones with dignified and moving musical tributes. I offer a carefully curated selection of classical pieces and hymns, providing a respectful and touching farewell."
  },
  {
    icon: Star,
    title: "Special Events",
    description: "From musical theatre to rock, I can adapt any song to suit my unique voice and your event's atmosphere. Perfect for corporate functions, private parties, and special celebrations requiring sophisticated live entertainment."
  }
];

export const Services = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-8 md:mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-secondary mx-auto" />
              <h3 className="text-xl md:text-2xl font-display text-center mb-3 md:mb-4">{service.title}</h3>
              <p className="text-center text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};