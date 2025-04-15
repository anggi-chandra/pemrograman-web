import React from 'react';
import { BrandLogo } from '../atoms/BrandLogo';

interface BrandCardProps {
  name: string;
  logo: string;
  className?: string;
}

export const BrandCard = ({ 
  name, 
  logo,
  className = "flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
}: BrandCardProps) => {
  return (
    <div className={className}>
      <BrandLogo src={logo} alt={name} />
    </div>
  );
};