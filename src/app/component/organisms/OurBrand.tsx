import React from 'react';
import { Header } from '../atoms/Header';
import { BrandsGrid } from '../molecules/BrandsGrid';

interface Brand {
  name: string;
  logo: string;
}

interface OurBrandSectionProps {
  brands?: Brand[];
  title?: string;
  description?: string;
  className?: string;
}

export const OurBrand = ({
  brands = [
    { name: 'Spotify', logo: "/spotify.jpg" },
    { name: 'Google', logo: "/google.jpg" },
    { name: 'YouTube', logo: "/youtube.jpg" },
    { name: 'Microsoft', logo: "/microsoft.jpg" },
    { name: 'Zoom', logo: "/zoom.jpg" },
  ],
  title = "Join these brands",
  description = "We've had the pleasure of working with industry-defining brands. These are just some of them.",
  className = "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
}: OurBrandSectionProps) => {
  return (
    <section className={className}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-1"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-3"></div>
      </div>
      
      <div className="relative z-10">
        <div className="transform transition-all duration-700 hover:translate-y-[-4px] mb-12">
          <Header title={title} description={description} />
        </div>
        <div className="transform transition-all duration-1000 hover:scale-[1.02]">
          <BrandsGrid brands={brands} />
        </div>
      </div>
    </section>
  );
};