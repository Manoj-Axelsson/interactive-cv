import React, { useState } from 'react';
import type { WorkExperienceItem, EducationItem } from '../types/cv';
import { track } from '@vercel/analytics';
import { TimelineFilters, type FilterType } from './TimelineFilters';
import { TimelineCard, type UnifiedTimelineItem } from './TimelineCard';
import './Timeline.css';

interface TimelineProps {
  workExperience: WorkExperienceItem[];
  leadershipTitle: string;
  leadershipPeriod: string;
  leadershipDescription: string;
  education: EducationItem[];
  lang: 'sv' | 'en';
}

export const Timeline: React.FC<TimelineProps> = ({
  workExperience,
  leadershipTitle,
  leadershipPeriod,
  leadershipDescription,
  education,
  lang
}) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    track('filter_timeline', { category: newFilter });
  };

  const timelineItems: UnifiedTimelineItem[] = [
    ...workExperience.map((job, index) => ({
      id: `work-${index}`,
      type: 'work' as const,
      title: job.role,
      subtitle: job.company,
      period: job.period,
      year: parseInt(job.period.split('–')[0].trim()) || 2025,
      content: job.points,
      documentUrl: job.documentUrl
    })),
    {
      id: 'leadership',
      type: 'work' as const,
      title: leadershipTitle,
      subtitle: lang === 'sv' ? 'Eget Hotell- & Turistföretag (Indien, ~30 anställda)' : 'Hotel & Tourism Business Owner (India, ~30 employees)',
      period: leadershipPeriod,
      year: 1998,
      content: [leadershipDescription]
    },
    ...education.map((edu, index) => ({
      id: `edu-${index}`,
      type: 'education' as const,
      title: edu.title,
      subtitle: edu.provider,
      period: edu.period,
      year: parseInt(edu.period.split('–')[0].trim()) || 2025,
      content: edu.details ? edu.details.split('\n') : [],
      documentUrl: edu.documentUrl
    }))
  ];

  const getStartYear = (periodStr: string): number => {
    const parts = periodStr.split(/[–-]/);
    if (parts.length > 0) {
      const year = parseInt(parts[0].trim());
      if (!isNaN(year)) return year;
    }
    return 0;
  };

  const sortedItems = timelineItems.sort((a, b) => getStartYear(b.period) - getStartYear(a.period));

  const filteredItems = sortedItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'work') return item.type === 'work';
    if (filter === 'education') return item.type === 'education';
    return true;
  });

  return (
    <div className="timeline-component" id="experience-panel" role="tabpanel" aria-labelledby="tab-experience">
      <TimelineFilters filter={filter} lang={lang} onFilterChange={handleFilterChange} />

      <div className="timeline-path" id="timeline-items" aria-live="polite">
        {filteredItems.map((item) => (
          <TimelineCard
            key={item.id}
            item={item}
            filter={filter}
            lang={lang}
            isExpanded={expandedItems[item.id] !== false}
            onToggleExpand={toggleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
