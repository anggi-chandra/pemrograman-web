import React from 'react';

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const BlogHeader = ({ 
  title, 
  subtitle, 
  className = "text-center mb-12" 
}: BlogHeaderProps) => {
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};