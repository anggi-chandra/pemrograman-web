import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  className?: string;
}

export const VideoBackground = ({ 
  videoSrc, 
  className = "absolute z-0 w-full h-full object-cover" 
}: VideoBackgroundProps) => {
  return (
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className={className}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};