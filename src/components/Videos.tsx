import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { VideoPlayer } from "./VideoPlayer";
import { useToast } from "./ui/use-toast";

const videos = [
  {
    src: "/videos/show-real-liv.mp4",
    title: "Performance Highlights",
    thumbnail: "/lovable-uploads/a5ef7a3e-4879-4b90-8769-65514a892886.png"
  },
  {
    src: "/videos/show-real-2.mp4",
    title: "Wedding Performances"
  },
  {
    src: "/videos/singing-wedding-opera.mp4",
    title: "Opera Selections"
  }
];

export const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { toast } = useToast();

  const handleVideoChange = (direction: 'prev' | 'next') => {
    console.log('Videos: Changing video direction:', direction);
    const newIndex = direction === 'prev'
      ? (currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1)
      : (currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1);
    
    console.log('Videos: New index:', newIndex);
    setCurrentVideoIndex(newIndex);
    const newVideoSrc = videos[newIndex].src;
    console.log('Videos: Setting new video source:', newVideoSrc);
    setActiveVideo(newVideoSrc);
  };

  const handleVideoClick = (videoSrc: string, index: number) => {
    console.log('Videos: Video clicked:', videoSrc);
    console.log('Videos: Setting index to:', index);
    setActiveVideo(videoSrc);
    setCurrentVideoIndex(index);
  };

  const handleCloseModal = () => {
    console.log('Videos: Closing video modal');
    setActiveVideo(null);
  };

  const handleVideoError = (error: any) => {
    console.error('Videos: Video error:', error);
    toast({
      variant: "destructive",
      title: "Video Error",
      description: "There was an error with the video. Please try refreshing the page.",
    });
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center mb-6">Experience the Magic</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Watch Olivia perform and imagine how she could make your special day even more memorable.
        </p>
        
        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-xl p-2"
            >
              ✕
            </button>
            <button
              onClick={() => handleVideoChange('prev')}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full">
              <VideoPlayer 
                src={activeVideo}
                controls
                autoPlay
                className="w-full rounded-lg shadow-2xl"
                onError={handleVideoError}
              />
            </div>
            <button
              onClick={() => handleVideoChange('next')}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        )}

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-2">
                    <div 
                      className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all"
                      onClick={() => handleVideoClick(video.src, index)}
                    >
                      {video.thumbnail ? (
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">Loading preview...</span>
                        </div>
                      )}
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
            <CarouselPrevious className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};