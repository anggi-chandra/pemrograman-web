import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const Header = ({ 
  title, 
  description,
  className = "text-center mb-12",
  titleClassName = "text-3xl font-bold text-gray-900 mb-4",
  descriptionClassName = "text-lg text-gray-600 max-w-2xl mx-auto"
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};