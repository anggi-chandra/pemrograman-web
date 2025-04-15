import React from 'react';
import Image from 'next/image';
import { BlogMeta } from '../atoms/BlogMeta';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  alt: string;
  className?: string;
}

export const BlogPostCard = ({
  title,
  excerpt,
  date,
  author,
  image,
  alt,
  className = "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
}: BlogPostCardProps) => {
  return (
    <article className={className}>
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <BlogMeta date={date} author={author} />
      </div>
    </article>
  );
};