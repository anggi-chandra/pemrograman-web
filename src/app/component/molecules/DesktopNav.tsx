'use client';

import { NavItem } from '../atoms/NavItem';

interface DesktopNavProps {
  items: {
    label: string;
    href: string;
  }[];
  textColor: string;
  hoverColor: string;
}

export const DesktopNav = ({ items, textColor, hoverColor }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex space-x-8">
      {items.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          href={item.href}
          color={textColor}
          hoverColor={hoverColor}
        />
      ))}
    </div>
  );
};