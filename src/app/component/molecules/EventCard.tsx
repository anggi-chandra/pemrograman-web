import React from 'react';
import Image from 'next/image';
import { EventDateBadge } from '../atoms/EventDateBadge';

interface EventCardProps {
  month: string;
  date: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  priority?: boolean;
}

export const EventCard = ({
  month,
  date,
  title,
  description,
  image,
  alt,
  priority = false
}: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start">
          <EventDateBadge month={month} date={date} />
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};