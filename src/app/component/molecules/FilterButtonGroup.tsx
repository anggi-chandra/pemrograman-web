import React from 'react';
import { FilterButton } from '../atoms/FilterButton';

interface FilterButtonGroupProps {
  filters: string[];
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export const FilterButtonGroup = ({
  filters,
  activeFilter,
  onFilterChange
}: FilterButtonGroupProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          active={activeFilter === filter}
          onClick={() => onFilterChange?.(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </div>
  );
};