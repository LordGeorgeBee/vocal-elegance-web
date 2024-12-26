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
      console.log('VideoPlayer: Current video element state:', {
        readyState: videoRef.current.readyState,
        networkState: videoRef.current.networkState,
        error: videoRef.current.error,
        currentSrc: videoRef.current.currentSrc
      });
      
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

      const handleError = (e: Event) => {
        console.error('VideoPlayer: Video error:', e);
        const video = e.target as HTMLVideoElement;
        console.error('VideoPlayer: Video error details:', {
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
        onError?.(e);
      };

      const handleLoadStart = () => {
        console.log('VideoPlayer: Video load started');
      };

      const handleLoadedMetadata = () => {
        console.log('VideoPlayer: Video metadata loaded');
      };

      videoRef.current.addEventListener('loadstart', handleLoadStart);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('error', handleError);

      // Set source using source element instead of src attribute
      const source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      videoRef.current.innerHTML = ''; // Clear any existing sources
      videoRef.current.appendChild(source);
      videoRef.current.load();

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadstart', handleLoadStart);
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('error', handleError);
        }
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
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
};