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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Upcoming Events" >
          <FilterButtonGroup 
            filters={filters} 
            activeFilter={activeFilter}
            onFilterChange={onFilterChange}
          />
        </SectionHeader>

        <SectionDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              priority={index < 3} // Only prioritize first 3 images
            />
          ))}
        </div>
      </div>
    </section>
  );
};