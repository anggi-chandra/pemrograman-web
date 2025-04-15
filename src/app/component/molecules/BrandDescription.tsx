import React from 'react';

interface BrandDescriptionProps {
  title: string;
  description: string;
  className?: string;
}

export const BrandDescription = ({ 
  title, 
  description,
  className = ""
}: BrandDescriptionProps) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
    </div>
  );
};