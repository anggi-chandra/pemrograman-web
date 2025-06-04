import React from 'react';
import { FooterContent } from '../molecules/FooterContent';
import { FooterCopyright } from '../molecules/FooterCopyright';

interface FooterProps {
  className?: string;
}

export const Footer = ({ 
  className = "bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" 
}: FooterProps) => {
  return (
    <footer className={className}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-3"></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="transform transition-all duration-700 hover:translate-y-[-2px]">
          <FooterContent />
        </div>
        <div className="transform transition-all duration-500 hover:translate-y-[-1px]">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};