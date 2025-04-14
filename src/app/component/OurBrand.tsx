import React from 'react';
import Image from 'next/image';

const OurBrand = () => {
  const brands = [
    { name: 'Spotify', logo: "/spotify.jpg" },
    { name: 'Google', logo: "/google.jpg" },
    { name: 'YouTube', logo: "/youtube.jpg" },
    { name: 'Microsoft', logo: "/microsoft.jpg" },
    { name: 'Zoom', logo: "/zoom.jpg" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join these brands</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We've had the pleasure of working with industry-defining brands. These are just some of them.
        </p>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="relative h-12 w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrand;