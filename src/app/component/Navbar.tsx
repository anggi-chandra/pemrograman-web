'use client';
import React, { useState } from 'react';

interface NavbarProps {
  logoText?: string;
  logoColor?: string;
  navItems: {
    label: string;
    href: string;
  }[];
  hoverColor?: string;
  bgColor?: string;
  textColor?: string;
  mobileMenuBg?: string;
  showMobileMenu?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
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
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`${bgColor} shadow-sm py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className={`text-2xl font-bold ${logoColor}`}>{logoText}</h1>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${textColor} hover:${hoverColor} font-medium transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {showMobileMenu && (
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && isMobileMenuOpen && (
        <div className={`md:hidden ${mobileMenuBg} py-2 px-4`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block py-2 ${textColor} hover:${hoverColor}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;