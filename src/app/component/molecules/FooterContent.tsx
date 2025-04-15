import React from 'react';
import { BrandDescription } from './BrandDescription';
import { FooterSection } from './FooterSection';
import { NewsletterForm } from './NewsletterForm';

interface FooterContentProps {
  className?: string;
}

export const FooterContent = ({ 
  className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" 
}: FooterContentProps) => {
  const planEventsLinks = [
    { text: "Create and Set Up", href: "#" },
    { text: "Sell Tickets", href: "#" },
    { text: "Online RSVP", href: "#" },
    { text: "Online Events", href: "#" }
  ];

  const eventickLinks = [
    { text: "About Us", href: "#" },
    { text: "Press", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Help Center", href: "#" },
    { text: "How it Works", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Terms", href: "#" }
  ];

  return (
    <div className={className}>
      <BrandDescription
        title="Eventick Esport"
        description="Eventick Esport is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives."
        className="lg:col-span-2"
      />

      <FooterSection 
        title="Plan Events" 
        links={planEventsLinks}
      />

      <FooterSection 
        title="Eventick" 
        links={eventickLinks}
      />

      <div className="lg:col-span-2 md:col-span-2">
        <h3 className="text-lg font-semibold text-white mb-4">Stay In The Loop</h3>
        <p className="mb-4">
          Join our mailing list to stay in the loop with our newest for Event and concert.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
};