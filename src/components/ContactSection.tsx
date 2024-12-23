import { Mail, Phone, Instagram, Facebook, Music } from "lucide-react";
import { TikTokIcon } from "./icons/TikTokIcon";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-3 md:mb-4">Contact Me</h2>
        <p className="text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
          I understand that arranging memorial services requires sensitivity and care. I'm here to help you create a meaningful musical tribute for your loved one.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <a href="mailto:contact@oliviaflemingsmith.com" 
             className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary rounded-lg hover:bg-primary/80 transition-colors shadow-md hover:shadow-lg">
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-base md:text-lg">Email Me</span>
          </a>
          <a href="tel:+1234567890" 
             className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors shadow-md hover:shadow-lg">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-base md:text-lg">Call Me</span>
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-display mb-4 md:mb-6">Additional Information</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <a href="https://instagram.com" 
               className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm md:text-base"
               target="_blank"
               rel="noopener noreferrer">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              <span>Portfolio</span>
            </a>
            <a href="https://facebook.com" 
               className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm md:text-base"
               target="_blank"
               rel="noopener noreferrer">
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              <span>References</span>
            </a>
            <a href="https://spotify.com" 
               className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm md:text-base"
               target="_blank"
               rel="noopener noreferrer">
              <Music className="w-4 h-4 md:w-5 md:h-5" />
              <span>Sample Recordings</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};