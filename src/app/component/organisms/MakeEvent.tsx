import React from 'react';
import { SectionContainer } from '../atoms/SectionContainer';
import { ContentCard } from '../molecules/ContentCard';

interface MakeEventProps {
  title?: string;
  description?: string;
  ctaText?: string;
  imageSrc?: string;
  imageAlt?: string;
  onCtaClick?: () => void;
}

export const MakeEvent = ({
  title = "Make your own Event",
  description = "Make your event in here.",
  ctaText = "Create Events",
  imageSrc = "/make_event.png",
  imageAlt = "People creating an event",
  onCtaClick
}: MakeEventProps) => {
  return (
    <SectionContainer className="relative overflow-hidden group">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      </div>

      <ContentCard
        title={title}
        description={description}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        ctaText={ctaText}
        onCtaClick={onCtaClick}
        containerClassName="transform transition-all duration-500 group-hover:scale-[1.02]"
        titleClassName="animate-text-gradient bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        descriptionClassName="hover:translate-x-2 transition-transform duration-300"
        buttonClassName="relative overflow-hidden group-hover:animate-pulse"
        buttonVariant="primary"
        imageContainerClassName="hover:rotate-1 transition-transform duration-700"
      />
    </SectionContainer>
  );
};