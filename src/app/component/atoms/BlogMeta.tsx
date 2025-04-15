import React from 'react';

interface BlogMetaProps {
  date: string;
  author: string;
  className?: string;
}

export const BlogMeta = ({ 
  date, 
  author, 
  className = "flex items-center text-sm text-gray-500" 
}: BlogMetaProps) => {
  return (
    <div className={className}>
      <span>{date}</span>
      <span className="mx-2">•</span>
      <span>{author}</span>
    </div>
  );
};