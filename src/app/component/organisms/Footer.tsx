import React from 'react';
import { FooterContent } from '../molecules/FooterContent';
import { FooterCopyright } from '../molecules/FooterCopyright';

interface FooterProps {
  className?: string;
}

export const Footer = ({ 
  className = "bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8" 
}: FooterProps) => {
  return (
    <footer className={className}>
      <div className="max-w-7xl mx-auto">
        <FooterContent />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;