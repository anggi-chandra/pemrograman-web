import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FooterLink = ({ 
  href, 
  children, 
  className = "hover:text-white transition-colors" 
}: FooterLinkProps) => {
  return (
    <li>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  );
};