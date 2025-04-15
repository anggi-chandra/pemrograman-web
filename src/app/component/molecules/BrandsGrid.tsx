import React from 'react';
import { BrandCard } from './BrandCard';

interface BrandsGridProps {
  brands: Array<{
    name: string;
    logo: string;
  }>;
  className?: string;
  gridClassName?: string;
}

export const BrandsGrid = ({ 
  brands,
  className = "max-w-7xl mx-auto",
  gridClassName = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
}: BrandsGridProps) => {
  return (
    <div className={className}>
      <div className={gridClassName}>
        {brands.map((brand, index) => (
          <BrandCard key={index} name={brand.name} logo={brand.logo} />
        ))}
      </div>
    </div>
  );
};