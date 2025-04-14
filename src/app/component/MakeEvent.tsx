import React from 'react';
import Image from 'next/image';

const MakeEvent = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <div className="p-8 md:p-12 lg:p-16 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Make your own Event
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Make your event in here. 
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Create Events
              </button>
            </div>

            {/* Image Section - Replace with your actual image */}
            <div className="relative h-64 md:h-auto md:flex-1">
              <Image
                src="/make_your_event.png" // Replace with your image path
                alt="People creating an event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeEvent;