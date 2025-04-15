import React from 'react';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Smart Omega Empress are the Mobile Legends: Bang Bang Women's Invitational Winners at EWC",
      excerpt: "In a clean sweep of Team Vitality, Smart Omega Empress crowned themselves champions of Mobile Legends: Bang Bang Women's Invitational 2024 x Esports World Cup. This W from Smart Omega Empress ended the Team Vitality roster’s three-year, 24-tournament-long win streak.",
      date: "28 jul",
      author: "Muntoha",
      image: "/blog1.jpeg"
    },
    {
      id: 2,
      title: "T1 crowned inaugural EWC League of Legends winners",
      excerpt: "The Esports World Cup started with a bang as T1 became the first-ever EWC League of Legends winners after defeating TOP Esports (TES) 3-1 in Riyadh, Saudi Arabia.",
      date: "09 Jul",
      author: "Erwin",
      image: "/blog2.jpg"
    },
    {
      id: 3,
      title: "Team Falcons claim EWC Call of Duty Warzone trophy",
      excerpt: "In the opening week of the Esports World Cup, Saudi Arabian esports organisation Team Falcons were crowned Call of Duty Warzone EWC champions with an impressive Grand Final points tally of 227.9.",
      date: "08 Jul",
      author: "Momet",
      image: "/blog3.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Recent news that has emerged regarding esports.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12"></div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Blog Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;