import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videos = [
    {
      src: encodeURI("/assets/Show real (liv) Compres.mp4"),
      title: "Performance Highlights",
      thumbnail: "/lovable-uploads/a5ef7a3e-4879-4b90-8769-65514a892886.png"
    },
    {
      src: encodeURI("/assets/Show real 2 compres.mp4"),
      title: "Wedding Performances"
    },
    {
      src: encodeURI("/assets/Singing wedding opra.mp4"),
      title: "Opera Selections"
    }
  ];

  useEffect(() => {
    // Log video sources for debugging
    console.log('Video sources:', videos.map(v => v.src));
    
    // Generate thumbnails for videos without a predefined thumbnail
    const generateThumbnails = async () => {
      const thumbs = await Promise.all(
        videos.map(async (video) => {
          if (video.thumbnail) {
            return video.thumbnail;
          }
          
          try {
            console.log('Attempting to generate thumbnail for:', video.src);
            const videoEl = document.createElement('video');
            videoEl.src = video.src;
            videoEl.crossOrigin = 'anonymous';
            
            return new Promise<string>((resolve) => {
              videoEl.addEventListener('loadeddata', () => {
                videoEl.currentTime = 1;
              });
              
              videoEl.addEventListener('seeked', () => {
                const canvas = document.createElement('canvas');
                canvas.width = videoEl.videoWidth;
                canvas.height = videoEl.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(videoEl, 0, 0);
                resolve(canvas.toDataURL('image/jpeg'));
              });

              videoEl.addEventListener('error', (e) => {
                console.error('Error loading video for thumbnail:', video.src, e);
                resolve('/placeholder.svg');
              });
            });
          } catch (error) {
            console.error('Error generating thumbnail:', error);
            return '/placeholder.svg';
          }
        })
      );
      setThumbnails(thumbs);
    };

    generateThumbnails();
  }, []);

  const handleVideoChange = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1)
      : (currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1);
    
    setCurrentVideoIndex(newIndex);
    if (videoRef.current) {
      console.log('Changing video to:', videos[newIndex].src);
      videoRef.current.src = videos[newIndex].src;
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error('Video autoplay failed:', error);
      });
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video loading error:', e);
    // Try to reload the video
    if (videoRef.current) {
      console.log('Attempting to reload video:', videos[currentVideoIndex].src);
      videoRef.current.load();
    }
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
              onClick={() => setActiveVideo(null)}
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
              <video 
                ref={videoRef}
                controls 
                autoPlay 
                preload="auto"
                className="w-full rounded-lg shadow-2xl"
                key={activeVideo}
                onError={handleVideoError}
              >
                <source src={activeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
            <div className="relative">
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-2">
                      <div 
                        className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all"
                        onClick={() => {
                          console.log('Opening video:', video.src);
                          setActiveVideo(video.src);
                          setCurrentVideoIndex(index);
                        }}
                      >
                        {thumbnails[index] ? (
                          <img 
                            src={thumbnails[index]} 
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 animate-pulse" />
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
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
