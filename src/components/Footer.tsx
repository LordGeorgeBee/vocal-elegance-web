import { Instagram, Mail, Phone, Facebook, Music } from "lucide-react";
import { TikTokIcon } from "./icons/TikTokIcon";

export const Footer = () => {
  return (
    <footer className="bg-accent py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg md:text-xl mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@oliviaflemingsmith.com" className="flex items-center gap-2 hover:text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm md:text-base">Email</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm md:text-base">Phone</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg md:text-xl mb-4">Follow</h3>
            <div className="space-y-2">
              <a href="https://instagram.com" 
                 className="flex items-center gap-2 hover:text-gray-600"
                 target="_blank"
                 rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                <span className="text-sm md:text-base">Instagram</span>
              </a>
              <a href="https://tiktok.com" 
                 className="flex items-center gap-2 hover:text-gray-600"
                 target="_blank"
                 rel="noopener noreferrer">
                <TikTokIcon className="w-4 h-4" />
                <span className="text-sm md:text-base">TikTok</span>
              </a>
              <a href="https://facebook.com" 
                 className="flex items-center gap-2 hover:text-gray-600"
                 target="_blank"
                 rel="noopener noreferrer">
                <Facebook className="w-4 h-4" />
                <span className="text-sm md:text-base">Facebook</span>
              </a>
              <a href="https://spotify.com" 
                 className="flex items-center gap-2 hover:text-gray-600"
                 target="_blank"
                 rel="noopener noreferrer">
                <Music className="w-4 h-4" />
                <span className="text-sm md:text-base">Spotify</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg md:text-xl mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#videos" className="block hover:text-gray-600 text-sm md:text-base">Videos</a>
              <a href="#services" className="block hover:text-gray-600 text-sm md:text-base">Services</a>
              <a href="#contact" className="block hover:text-gray-600 text-sm md:text-base">Contact</a>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Olivia Fleming Smith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};