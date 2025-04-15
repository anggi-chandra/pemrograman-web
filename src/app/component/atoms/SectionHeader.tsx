import React from 'react';

interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const SectionHeader = ({ title, children }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h2>
      {children}
    </div>
  );
};



