'use client';
import React, { useState } from 'react';
import { Logo } from '../atoms/Logo';
import { MobileMenuButton } from '../atoms/MobileMenuButton';
import { DesktopNav } from '../molecules/DesktopNav';
import { MobileMenu } from '../molecules/MobileMenu';

interface NavbarProps {
  logoText?: string;
  logoColor?: string;
  navItems?: {
    label: string;
    href: string;
  }[];
  hoverColor?: string;
  bgColor?: string;
  textColor?: string;
  mobileMenuBg?: string;
  showMobileMenu?: boolean;
}

export const Navbar = ({
  logoText = 'Eventick Esport',
  logoColor = 'text-white',
  navItems = [
    { label: 'Schedule', href: '#' },
    { label: 'Ticket', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Login', href: '#' }
  ],
  hoverColor = 'text-red-500',
  bgColor = 'bg-black',
  textColor = 'text-white',
  mobileMenuBg = 'bg-white',
  showMobileMenu = true
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`${bgColor} shadow-sm py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo text={logoText} color={logoColor} />
        
        <DesktopNav items={navItems} textColor={textColor} hoverColor={hoverColor} />

        {showMobileMenu && (
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        )}
      </div>

      {showMobileMenu && isMobileMenuOpen && (
        <MobileMenu
          items={navItems}
          textColor={textColor}
          hoverColor={hoverColor}
          bgColor={mobileMenuBg}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};