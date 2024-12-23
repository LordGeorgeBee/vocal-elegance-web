import { useRef, useEffect, useState } from 'react';
import { useToast } from "./ui/use-toast";

interface VideoPlayerProps {
  src: string;
  onError?: (error: any) => void;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export const VideoPlayer = ({
  src,
  onError,
  className = '',
  controls = false,
  autoPlay = false,
  muted = false,
  loop = false
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      console.log('VideoPlayer: Loading video from:', src);
      
      const handleCanPlay = () => {
        console.log('VideoPlayer: Video can play');
        setIsLoading(false);
        if (autoPlay) {
          videoRef.current?.play().catch(error => {
            console.error('VideoPlayer: Autoplay error:', error);
            toast({
              variant: "destructive",
              title: "Video Error",
              description: "There was an error playing the video. Please try refreshing the page.",
            });
            onError?.(error);
          });
        }
      };

      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.load();

      return () => {
        videoRef.current?.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [src, autoPlay, onError, toast]);

  return (
    <>
      {isLoading && (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <span className="text-white">Loading video...</span>
        </div>
      )}
      <video
        ref={videoRef}
        className={className}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onError={(e) => {
          console.error('VideoPlayer: Error event:', e);
          toast({
            variant: "destructive",
            title: "Video Error",
            description: "There was an error loading the video. Please try refreshing the page.",
          });
          onError?.(e);
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};