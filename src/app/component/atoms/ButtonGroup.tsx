import React, { ReactNode } from 'react';

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export const ButtonGroup = ({ 
  children, 
  className = 'flex flex-col sm:flex-row gap-4' 
}: ButtonGroupProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};