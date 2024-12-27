import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { VideoPlayer } from "./VideoPlayer";

export const Hero = () => {
  const { toast } = useToast();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoError = (error: any) => {
    console.error('Hero: Video error:', error);
    toast({
      variant: "destructive",
      title: "Video Error",
      description: "There was an error loading the video. Please try refreshing the page.",
    });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gray-900" />
      )}
      <div className="absolute inset-0">
        <VideoPlayer 
          src="/showreel-liv.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl mx-auto">
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