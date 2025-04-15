import React from 'react';
import Image from 'next/image';
import { CTAButton } from '../atoms/CTAButton';

interface ContentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  onCtaClick?: () => void;
  className?: string;
}

export const ContentCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  onCtaClick,
  className = 'bg-white rounded-xl shadow-lg overflow-hidden'
}: ContentCardProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:p-12 lg:p-16 flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>
          <CTAButton onClick={onCtaClick}>
            {ctaText}
          </CTAButton>
        </div>

        <div className="relative h-64 md:h-auto md:flex-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};