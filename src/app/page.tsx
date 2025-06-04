'use client';
import React from 'react';
import { Navbar } from './component/organisms/Navbar';
import { HeroSection } from './component/organisms/HeroSection';
import { UpcomingEvent } from './component/organisms/UpcomingEvent'
import { Blog } from './component/organisms/Blog';
import { MakeEvent } from './component/organisms/MakeEvent';
import { OurBrand } from './component/organisms/OurBrand';
import { Footer } from './component/organisms/Footer';

const HomePage = () => {
  // Sample data for events
  const events = [
    {
      month: 'DEC',
      date: '06',
      title: 'Pubg Mobile Global Champion',
      description: 'PMGC merupakan turnamen bergengsi yang mempertemukan tim-tim terbaik PUBG Mobile dari seluruh dunia.',
      image: "/event_1pubg.jpg",
      alt: 'PUBG MOBILE GLOBAL CHAMPION (PMGC)'
    },
    {
      month: 'JAN',
      date: '01',
      title: 'M4 Mobile Legends Bang Bang',
      description: 'M4 MLBB adalah Kejuaraan Dunia Mobile Legends: Bang Bang (MLBB) musim kompetisi 2022.',
      image: "/event_2ml.jpg",
      alt: 'M4'
    },
    {
      month: 'AUG',
      date: '01',
      title: 'VALORANT Champions Tour (VCT) 2024',
      description: 'turnamen esports resmi Valorant yang diselenggarakan oleh Riot Games Turnamen ini merupakan musim kompetitif keempat. ',
      image: "/event_1valo.jpg",
      alt: 'VCT'
    },
    {
      month: 'JAN',
      date: '03',
      title: 'Pubg Mobile Club Open',
      description: 'turnamen PUBG Mobile tingkat semi-pro yang diikuti oleh pemain profesional dan semi-profesional dari seluruh dunia.',
      image: "/event_2pubg.jpg",
      alt: 'PMCO'
    },
    {
      month: 'JUL',
      date: '23',
      title: 'Mobile Legends Profesional Liga Indonesia Season 4',
      description: 'liga olahraga elektronik profesional game Mobile Legends: Bang Bang di Indonesia.',
      image: "/event_1ml.jpg",
      alt: 'MPL S4'
    },
    {
      month: 'MAR',
      date: '22',
      title: 'VALORANT Champions Tour Pacific 2025',
      description: 'turnamen Valorant Champions Tour (VCT) 2025 yang berlangsung di Seoul, Korea Selatan. ',
      image: "/event_valo2.jpg",
      alt: 'VCT Pacific'
    }
  ];

  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Smart Omega Empress are the Mobile Legends: Bang Bang Women's Invitational Winners at EWC",
      excerpt: "In a clean sweep of Team Vitality, Smart Omega Empress crowned themselves champions of Mobile Legends: Bang Bang Women's Invitational 2024 x Esports World Cup.",
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

  // Sample data for brands
  const brands = [
    { name: 'Spotify', logo: "/spotify.jpg" },
    { name: 'Google', logo: "/google.jpg" },
    { name: 'YouTube', logo: "/youtube.jpg" },
    { name: 'Microsoft', logo: "/microsoft.jpg" },
    { name: 'Zoom', logo: "/zoom.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-5 pointer-events-none z-0"></div>
      
      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>
      
      {/* Upcoming Events */}
      <div className="relative z-10 transform transition-all duration-1000 hover:scale-[1.01]">
        <UpcomingEvent events={events} />
      </div>
      
      {/* Blog Section */}
      <div className="relative z-10 transform transition-all duration-1000 hover:scale-[1.01]">
        <Blog posts={blogPosts} />
      </div>
      
      {/* Make Event Section */}
      <div className="relative z-10">
        <MakeEvent />
      </div>
      
      {/* Our Brand Section */}
      <div className="relative z-10 transform transition-all duration-1000 hover:scale-[1.01]">
        <OurBrand brands={brands} />
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;