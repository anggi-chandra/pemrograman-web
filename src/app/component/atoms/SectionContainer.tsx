import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export const SectionContainer = ({ 
  children, 
  className = '', 
  bgColor = 'bg-gray-50' 
}: SectionContainerProps) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};