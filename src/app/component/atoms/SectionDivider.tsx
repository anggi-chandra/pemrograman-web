import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider = ({ 
  className = "border-t border-gray-200 mb-8" 
}: SectionDividerProps) => {
  return <div className={className} />;
};