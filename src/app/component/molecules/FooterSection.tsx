import React from 'react';
import { FooterHeading } from '../atoms/FooterHeading';
import { FooterLink } from '../atoms/FooterLink';

interface FooterSectionProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
  className?: string;
}

export const FooterSection = ({ 
  title, 
  links,
  className = ""
}: FooterSectionProps) => {
  return (
    <div className={className}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.text}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
};