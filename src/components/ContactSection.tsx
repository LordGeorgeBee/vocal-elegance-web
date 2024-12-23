import { Mail, Phone, Instagram } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display mb-8">Get in Touch</h2>
        <p className="text-lg mb-12">
          I would be honored to be part of your special occasion. Let's discuss how I can create the perfect musical atmosphere for your event.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <a href="mailto:contact@oliviaflemingsmith.com" 
             className="flex items-center justify-center gap-2 px-6 py-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          <a href="tel:+1234567890" 
             className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
            <Phone className="w-5 h-5" />
            <span>Call Me</span>
          </a>
          <a href="https://instagram.com" 
             className="flex items-center justify-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <Instagram className="w-5 h-5" />
            <span>Follow Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};