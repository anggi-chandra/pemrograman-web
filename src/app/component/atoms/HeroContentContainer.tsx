import React, { ReactNode } from 'react';

interface HeroContentContainerProps {
  children: ReactNode;
  className?: string;
}

export const HeroContentContainer = ({ 
  children, 
  className = '' 
}: HeroContentContainerProps) => {
  return (
    <div className={`relative z-20 flex flex-col items-center justify-center h-full text-center px-4 ${className}`}>
      {children}
    </div>
  );
};