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
  className = "py-16 px-4 sm:px-6 lg:px-8 bg-white"
}: OurBrandSectionProps) => {
  return (
    <section className={className}>
      <Header title={title} description={description} />
      <BrandsGrid brands={brands} />
    </section>
  );
};