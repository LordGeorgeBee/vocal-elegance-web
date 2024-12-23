import { useRef, useEffect } from 'react';

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

  useEffect(() => {
    if (videoRef.current) {
      console.log('VideoPlayer: Loading video from:', src);
      videoRef.current.load();
      if (autoPlay) {
        videoRef.current.play().catch(error => {
          console.error('VideoPlayer: Autoplay error:', error);
          onError?.(error);
        });
      }
    }
  }, [src, autoPlay, onError]);

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
        onError?.(e);
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};