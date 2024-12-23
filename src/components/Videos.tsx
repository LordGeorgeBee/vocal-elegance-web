import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const videos = [
    {
      src: "/Show real (liv) Compres.mp4",
      title: "Show Reel 1",
      thumbnail: "/img-0671_4_287746-162702938288714.webp"
    },
    {
      src: "/Show real 2 compres.mp4",
      title: "Show Reel 2",
      thumbnail: "/img-0756_4_287746-162702937092683.webp"
    },
    {
      src: "/Singing wedding opra.mp4",
      title: "Wedding Opera Performance",
      thumbnail: "/ba54c8d5-8b27-4037-970d-655fb4c9e296_4_287746-162619334747380.webp"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center mb-12">Performance Videos</h2>
        
        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white text-xl p-2"
            >
              ✕
            </button>
            <video controls autoPlay className="max-w-4xl w-full">
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        )}

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div 
                    className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => setActiveVideo(video.src)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg 
                        className="w-16 h-16 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-display text-center mt-4">{video.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};