import React from 'react';

interface FooterButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const FooterButton = ({ 
  children, 
  className = "bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition-colors" 
}: FooterButtonProps) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};