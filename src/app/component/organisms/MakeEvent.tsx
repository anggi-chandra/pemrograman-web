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
    <SectionContainer>
      <ContentCard
        title={title}
        description={description}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        ctaText={ctaText}
        onCtaClick={onCtaClick}
      />
    </SectionContainer>
  );
};