import { Music, Heart } from "lucide-react";
import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();
  const isFuneral = location.pathname === '/funeral';

  return (
    <section className={`py-12 md:py-20 px-4 ${isFuneral ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-6 md:mb-8">About Olivia</h2>
        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-lg leading-relaxed">
            Based in Birmingham, West Midlands, Olivia Flemming Smith is a professional wedding singer renowned for her remarkable ability to adapt to various musical styles. With her extensive song knowledge and stunning voice, she brings a unique versatility to every performance.
          </p>
          <div className="flex items-center justify-center gap-4 my-6 md:my-8">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
            <Music className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <p className="text-base md:text-lg leading-relaxed">
            Her passion lies in weddings, finding joy in sharing her talent with couples on the happiest day of their lives. Whether performing a show or providing background music, Olivia creates a relaxed and romantic atmosphere that perfectly complements your special moments.
          </p>
        </div>
      </div>
    </section>
  );
};