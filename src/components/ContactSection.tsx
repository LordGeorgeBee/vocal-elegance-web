import { Mail, Phone, Instagram, Facebook, Music, BrandTiktok } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display mb-4">Book Your Event</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Ready to make your special day unforgettable? Let's discuss how I can create the perfect musical atmosphere for your event.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a href="mailto:contact@oliviaflemingsmith.com" 
             className="flex items-center justify-center gap-3 px-8 py-4 bg-primary rounded-lg hover:bg-primary/80 transition-colors shadow-md hover:shadow-lg">
            <Mail className="w-5 h-5" />
            <span className="text-lg">Email Me</span>
          </a>
          <a href="tel:+1234567890" 
             className="flex items-center justify-center gap-3 px-8 py-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors shadow-md hover:shadow-lg">
            <Phone className="w-5 h-5" />
            <span className="text-lg">Call Me</span>
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-display mb-6">Follow My Journey</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://instagram.com" 
               className="flex items-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="https://tiktok.com" 
               className="flex items-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <BrandTiktok className="w-5 h-5" />
              <span>TikTok</span>
            </a>
            <a href="https://facebook.com" 
               className="flex items-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a href="https://spotify.com" 
               className="flex items-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Music className="w-5 h-5" />
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};