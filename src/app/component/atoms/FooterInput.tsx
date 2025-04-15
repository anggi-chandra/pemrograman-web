import React from 'react';

interface FooterInputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

export const FooterInput = ({ 
  type = "email", 
  placeholder = "Enter your email address.",
  className = "px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow"
}: FooterInputProps) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={className}
    />
  );
};