import React from 'react';
import { BlogHeader } from '../atoms/BlogHeader';
import { SectionDivider } from '../atoms/SectionDivider';
import { BlogPostCard } from '../molecules/BlogPostCard';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

interface BlogProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Blog = ({
  posts,
  title = "Blog",
  subtitle = "Recent news that has emerged regarding esports",
  className = "py-16 px-4 sm:px-6 lg:px-8 bg-white"
}: BlogProps) => {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto">
        <BlogHeader title={title} subtitle={subtitle} />
        <SectionDivider />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              image={post.image}
              alt={post.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};