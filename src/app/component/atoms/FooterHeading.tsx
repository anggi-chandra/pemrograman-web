import React from 'react';

interface FooterHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const FooterHeading = ({ 
  children, 
  className = "text-lg font-semibold text-white mb-4" 
}: FooterHeadingProps) => {
  return <h3 className={className}>{children}</h3>;
};