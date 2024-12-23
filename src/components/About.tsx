import { Music, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display mb-8">About Olivia</h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Based in Birmingham, West Midlands, Olivia Flemming-Smith is a professional wedding singer renowned for her remarkable ability to adapt to various musical styles. With her extensive song knowledge and stunning voice, she brings a unique versatility to every performance.
          </p>
          <div className="flex items-center justify-center gap-4 my-8">
            <Heart className="w-8 h-8 text-secondary" />
            <Music className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg leading-relaxed">
            Her passion lies in weddings, finding joy in sharing her talent with couples on the happiest day of their lives. Whether performing a show or providing background music, Olivia creates a relaxed and romantic atmosphere that perfectly complements your special moments.
          </p>
        </div>
      </div>
    </section>
  );
};