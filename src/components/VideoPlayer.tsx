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
  playsInline?: boolean;
}

export const VideoPlayer = ({
  src,
  onError,
  className = '',
  controls = false,
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      const isPreviewEnvironment = window.location.hostname.includes('preview--');
      
      // Extract the filename from the path
      const filename = src.split('/').pop() || '';
      const basePath = src.substring(0, src.lastIndexOf('/') + 1);
      
      // Construct the video source URL
      let videoSrc = '';
      if (isPreviewEnvironment) {
        // Encode only the filename portion
        const encodedFilename = encodeURIComponent(filename);
        videoSrc = `${window.location.origin}${basePath}${encodedFilename}`;
      } else {
        videoSrc = src;
      }
      
      console.log('VideoPlayer: Debug Info:', {
        environment: isPreviewEnvironment ? 'preview' : 'development',
        originalSrc: src,
        filename,
        basePath,
        encodedFilename: encodeURIComponent(filename),
        finalVideoSrc: videoSrc,
        windowOrigin: window.location.origin,
        hostname: window.location.hostname
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
        const video = e.target as HTMLVideoElement;
        console.error('VideoPlayer: Video error details:', {
          error: video.error,
          networkState: video.networkState,
          readyState: video.readyState,
          currentSrc: video.currentSrc,
          videoSrc,
          isPreviewEnvironment,
          originalSrc: src
        });
        
        toast({
          variant: "destructive",
          title: "Video Error",
          description: "There was an error loading the video. Please try refreshing the page.",
        });
        onError?.(e);
      };

      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('error', handleError);

      // Set the source directly on the video element
      videoRef.current.src = videoSrc;
      videoRef.current.load();

      return () => {
        if (videoRef.current) {
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
        playsInline={playsInline}
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
};