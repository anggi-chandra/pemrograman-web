import React from 'react';

interface FilterButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  baseClasses?: string;
}

export const FilterButton = ({ 
  children, 
  active = false,
  onClick,
  className = '',
  activeClassName = 'bg-gray-100',
  inactiveClassName = 'bg-white hover:bg-gray-100',
  baseClasses = 'px-4 py-2 border border-gray-300 rounded-lg text-gray-700 transition-all duration-200'
}: FilterButtonProps) => {
  return (
    <button 
      className={`
        ${baseClasses}
        ${active ? activeClassName : inactiveClassName}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};