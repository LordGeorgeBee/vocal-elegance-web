import { useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (videoRef.current) {
      console.log('VideoPlayer: Loading video from:', src);
      videoRef.current.load();
      if (autoPlay) {
        videoRef.current.play().catch(error => {
          console.error('VideoPlayer: Autoplay error:', error);
          toast({
            variant: "destructive",
            title: "Video Error",
            description: "There was an error playing the video. Please try refreshing the page.",
          });
          onError?.(error);
        });
      }
    }
  }, [src, autoPlay, onError, toast]);

  return (
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
  );
};