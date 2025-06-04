import React from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { SectionDivider } from '../atoms/SectionDivider';
import { FilterButtonGroup } from '../molecules/FilterButtonGroup';
import { EventCard } from '../molecules/EventCard';

interface Event {
  month: string;
  date: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface UpcomingEventProps {
  events: Event[];
  filters?: string[];
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export const UpcomingEvent = ({
  events,
  filters = ['Weekdays', 'Event Type', 'Any Category'],
  activeFilter,
  onFilterChange
}: UpcomingEventProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-1"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-2"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="transform transition-all duration-700 hover:translate-y-[-4px]">
          <SectionHeader title="Upcoming Events" >
            <FilterButtonGroup 
              filters={filters} 
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
            />
          </SectionHeader>
        </div>

        <SectionDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000">
          {events.map((event, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <EventCard
                {...event}
                priority={index < 3} // Only prioritize first 3 images
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};