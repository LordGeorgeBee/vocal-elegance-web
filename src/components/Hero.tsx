import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "/Show real (liv) Compres.mp4",
    "/Show real 2 compres.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      <video 
        key={videos[currentVideo]}
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl mb-6">
          Olivia Fleming Smith
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 font-light">
          Timeless Vocal Elegance for Your Special Moments
        </motion.p>
      </div>
    </div>
  );
};