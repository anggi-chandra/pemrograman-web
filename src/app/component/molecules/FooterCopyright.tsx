import React from 'react';

interface FooterCopyrightProps {
  text?: string;
  className?: string;
}

export const FooterCopyright = ({ 
  text = `Copyright © ${new Date().getFullYear()} Anggi Chandra`,
  className = "border-t border-gray-800 pt-6 text-center md:text-left"
}: FooterCopyrightProps) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};