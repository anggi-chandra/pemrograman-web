import React from 'react';

interface FilterButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const FilterButton = ({ 
  children, 
  active = false,
  onClick 
}: FilterButtonProps) => {
  const baseClasses = "px-4 py-2 border border-gray-300 rounded-lg text-gray-700";
  const activeClasses = active ? "bg-gray-100" : "bg-white hover:bg-gray-100";
  
  return (
    <button 
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};