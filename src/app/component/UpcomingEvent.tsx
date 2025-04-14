import React from 'react';
import Image from 'next/image';

const UpcomingEvent = () => {
  // Event data array with image references
  const events = [
    {
      month: 'DEC',
      date: '06',
      title: 'Pubg Mobile Global Champion',
      description: 'PMGC merupakan turnamen bergengsi yang mempertemukan tim-tim terbaik PUBG Mobile dari seluruh dunia. ',
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

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Upcoming Events</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              Weekdays
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              Event Type
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              Any Category
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Event Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3} // Only prioritize first 3 images
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start">
                  {/* Date Badge */}
                  <div className="bg-red-500 text-white rounded-lg p-3 text-center mr-4 min-w-[70px]">
                    <div className="font-bold text-sm uppercase">{event.month}</div>
                    <div className="font-bold text-2xl">{event.date}</div>
                  </div>
                  
                  {/* Event Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;