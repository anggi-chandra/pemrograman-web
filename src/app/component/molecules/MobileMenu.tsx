'use client';

import { NavItem } from '../atoms/NavItem';

interface MobileMenuProps {
  items: {
    label: string;
    href: string;
  }[];
  textColor: string;
  hoverColor: string;
  bgColor: string;
  onItemClick: () => void;
}

export const MobileMenu = ({ items, textColor, hoverColor, bgColor, onItemClick }: MobileMenuProps) => {
  return (
    <div className={`md:hidden ${bgColor} py-2 px-4`}>
      {items.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          href={item.href}
          color={textColor}
          hoverColor={hoverColor}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};