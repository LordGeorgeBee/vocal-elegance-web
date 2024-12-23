import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@oliviaflemingsmith.com" className="flex items-center gap-2 hover:text-gray-600">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gray-600">
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl mb-4">Follow</h3>
            <a href="https://instagram.com" 
               className="flex items-center gap-2 hover:text-gray-600"
               target="_blank"
               rel="noopener noreferrer">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
          <div>
            <h3 className="font-display text-xl mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#services" className="block hover:text-gray-600">Services</a>
              <a href="#gallery" className="block hover:text-gray-600">Gallery</a>
              <a href="#contact" className="block hover:text-gray-600">Contact</a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} Olivia Fleming Smith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};