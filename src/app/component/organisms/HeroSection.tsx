import React from 'react';
import { VideoBackground } from '../atoms/VideoBackground';
import { HeroText } from '../atoms/HeroText';
import { HeroButton } from '../atoms/HeroButton';
import { HeroContentContainer } from '../atoms/HeroContentContainer';
import { ButtonGroup } from '../atoms/ButtonGroup';

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground videoSrc="/vid_1.mp4" />
      
      <HeroContentContainer>
        <HeroText type="h1">Compete.Connect.</HeroText>
        <HeroText type="h2">Dominate the Esports Scene</HeroText>
        <HeroText type="h3">Show Ticket Package</HeroText>
        <HeroText type="p" className="max-w-2xl mb-8">
          Join the ultimate gaming platform for tournaments, teams, and community.
          Where players become legends.
        </HeroText>
        
        <ButtonGroup>
          <HeroButton variant="primary">Get Ticket</HeroButton>
          <HeroButton variant="secondary">Learn More</HeroButton>
        </ButtonGroup>
      </HeroContentContainer>
    </div>
  );
};