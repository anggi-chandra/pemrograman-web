import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute z-0 w-full h-full object-cover"
        >
        <source src="/vid_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Konten Teks */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Compete.Connect.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
        Dominate the Esports Scene
        </h2>
        <h3 className="text-2xl md:text-4xl font-semibold text-white mb-6">
          Show Ticket Package
        </h3>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
        Join the ultimate gaming platform for tournaments, teams, and community.
        Where players become legends.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Get Ticket
          </button>
          <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;