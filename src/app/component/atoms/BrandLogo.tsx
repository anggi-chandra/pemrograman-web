import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const BrandLogo = ({ 
  src, 
  alt, 
  className = "object-contain",
  containerClassName = "relative h-12 w-full"
}: BrandLogoProps) => {
  return (
    <div className={containerClassName}>
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
      />
    </div>
  );
};