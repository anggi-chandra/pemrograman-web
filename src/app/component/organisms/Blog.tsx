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
  className = "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
}: BlogProps) => {
  return (
    <section className={className}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="transform transition-all duration-700 hover:translate-y-[-4px]">
          <BlogHeader title={title} subtitle={subtitle} />
        </div>
        <SectionDivider />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <BlogPostCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                image={post.image}
                alt={post.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};