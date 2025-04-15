import React from 'react';

interface HeroTextProps {
  type?: 'h1' | 'h2' | 'h3' | 'p';
  children: React.ReactNode;
  className?: string;
}

export const HeroText = ({ 
  type = 'h1', 
  children, 
  className = '' 
}: HeroTextProps) => {
  const baseClasses = "text-white mb-2";
  
  const textSizes = {
    h1: "text-4xl md:text-6xl font-bold",
    h2: "text-4xl md:text-6xl font-bold",
    h3: "text-2xl md:text-4xl font-semibold",
    p: "text-lg md:text-xl"
  };

  const Tag = type;
  
  return (
    <Tag className={`${baseClasses} ${textSizes[type]} ${className}`}>
      {children}
    </Tag>
  );
};