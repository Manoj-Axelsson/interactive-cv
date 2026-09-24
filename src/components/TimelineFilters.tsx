import React from 'react';
import './TimelineFilters.css';

export type FilterType = 'all' | 'work' | 'education';

interface TimelineFiltersProps {
  filter: FilterType;
  lang: 'sv' | 'en';
  onFilterChange: (newFilter: FilterType) => void;
}

export const TimelineFilters: React.FC<TimelineFiltersProps> = ({ filter, lang, onFilterChange }) => {
  return (
    <div className="timeline-filters" role="tablist" aria-label={lang === 'sv' ? 'Filtrera tidslinje' : 'Filter timeline'}>
      <button
        role="tab"
        aria-selected={filter === 'all'}
        aria-controls="timeline-items"
        id="filter-all"
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        {lang === 'sv' ? 'Visa Alla' : 'Show All'}
      </button>
      <button
        role="tab"
        aria-selected={filter === 'work'}
        aria-controls="timeline-items"
        id="filter-work"
        className={`filter-btn ${filter === 'work' ? 'active' : ''}`}
        onClick={() => onFilterChange('work')}
      >
        {lang === 'sv' ? 'Yrkeserfarenhet' : 'Work Experience'}
      </button>
      <button
        role="tab"
        aria-selected={filter === 'education'}
        aria-controls="timeline-items"
        id="filter-education"
        className={`filter-btn ${filter === 'education' ? 'active' : ''}`}
        onClick={() => onFilterChange('education')}
      >
        {lang === 'sv' ? 'Utbildning' : 'Education'}
      </button>
    </div>
  );
};
