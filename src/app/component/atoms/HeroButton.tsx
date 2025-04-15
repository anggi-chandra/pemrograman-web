import React from 'react';

interface HeroButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const HeroButton = ({ 
  variant = 'primary', 
  children, 
  className = '',
  onClick
}: HeroButtonProps) => {
  const baseClasses = "font-bold py-3 px-8 rounded-lg transition";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-transparent hover:bg-black hover:bg-opacity-20 text-white border-2 border-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};