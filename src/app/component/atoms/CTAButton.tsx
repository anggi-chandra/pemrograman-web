import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const CTAButton = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary' 
}: CTAButtonProps) => {
  const baseClasses = "font-bold py-3 px-8 rounded-lg transition duration-300";
  const variantClasses = {
    primary: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};