import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "./ui/use-toast";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (videoRef.current) {
      const videoPath = "/videos/show-real-liv.mp4";
      console.log('Hero: Setting video source to:', videoPath);
      
      const handleCanPlay = () => {
        console.log('Hero: Video can play');
        setIsVideoLoaded(true);
        videoRef.current?.play().catch(error => {
          console.error('Hero: Video play error:', error);
          toast({
            variant: "destructive",
            title: "Video Error",
            description: "There was an error playing the video. Please try refreshing the page.",
          });
        });
      };

      const handleError = (e: Event) => {
        console.error('Hero: Video error:', e);
        const video = e.target as HTMLVideoElement;
        console.error('Hero: Video error details:', {
          error: video.error,
          networkState: video.networkState,
          readyState: video.readyState,
          currentSrc: video.currentSrc
        });
        toast({
          variant: "destructive",
          title: "Video Error",
          description: "There was an error loading the video. Please try refreshing the page.",
        });
      };

      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('error', handleError);

      // Set source using source element instead of src attribute
      const source = document.createElement('source');
      source.src = videoPath;
      source.type = 'video/mp4';
      videoRef.current.innerHTML = ''; // Clear any existing sources
      videoRef.current.appendChild(source);
      videoRef.current.load();

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [toast]);

  return (
    <div className="relative h-[80vh] min-h-[500px] md:h-screen md:min-h-[600px] flex items-center justify-center">
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gray-900" />
      )}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 max-w-[90%] md:max-w-none">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6">
          Olivia Flemming Smith
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light">
          Timeless Vocal Elegance for Your Special Moments
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            Get in Touch <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};