import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, FileText, X, ExternalLink } from 'lucide-react';
import type { WorkExperienceItem, EducationItem } from '../types/cv';
import { track } from '@vercel/analytics';

interface TimelineProps {
  workExperience: WorkExperienceItem[];
  leadershipTitle: string;
  leadershipPeriod: string;
  leadershipDescription: string;
  education: EducationItem[];
  lang: 'sv' | 'en';
}

type FilterType = 'all' | 'work' | 'education';

interface UnifiedTimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  period: string;
  year: number;
  content: string[];
  documentUrl?: string;
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
  const [activeDoc, setActiveDoc] = useState<{ url: string; title: string } | null>(null);

  const openDocument = (url: string, title: string) => {
    setActiveDoc({ url, title });
    track('view_document', { title, url });
  };

  const closeDocument = () => {
    setActiveDoc(null);
  };

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

  // Convert and sort all items chronologically (latest first)
  // We will assign an ID to each item to manage expansion state.
  const timelineItems: UnifiedTimelineItem[] = [
    // Work Experience
    ...workExperience.map((job, index) => ({
      id: `work-${index}`,
      type: 'work' as const,
      title: job.role,
      subtitle: job.company,
      period: job.period,
      year: parseInt(job.period.split('–')[0].trim()) || 2025, // for sorting if needed
      content: job.points,
      documentUrl: job.documentUrl
    })),
    // Leadership Experience
    {
      id: 'leadership',
      type: 'work' as const,
      title: leadershipTitle,
      subtitle: lang === 'sv' ? 'Eget Hotell- & Turistföretag (Indien, ~30 anställda)' : 'Hotel & Tourism Business Owner (India, ~30 employees)',
      period: leadershipPeriod,
      year: 1998,
      content: [leadershipDescription]
    },
    // Education
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

  // Sort items. We want modern items (latest years) first.
  // We can manually order them or sort by starting year.
  // Given their start years: 2025 (Systemutveckling), 2024 (Six Sigma), 2022 (Industri 4.0), 2017 (CNC), 1998 (Hotel), 1993 (Hotel Dip), 1987 (BA Ekonomi)
  // A simple chronological sort based on parsing the period works, or we can just sort by a custom sort order.
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
      {/* Filters */}
      <div className="timeline-filters" role="tablist" aria-label={lang === 'sv' ? 'Filtrera tidslinje' : 'Filter timeline'}>
        <button
          role="tab"
          aria-selected={filter === 'all'}
          aria-controls="timeline-items"
          id="filter-all"
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          {lang === 'sv' ? 'Visa Alla' : 'Show All'}
        </button>
        <button
          role="tab"
          aria-selected={filter === 'work'}
          aria-controls="timeline-items"
          id="filter-work"
          className={`filter-btn ${filter === 'work' ? 'active' : ''}`}
          onClick={() => handleFilterChange('work')}
        >
          {lang === 'sv' ? 'Yrkeserfarenhet' : 'Work Experience'}
        </button>
        <button
          role="tab"
          aria-selected={filter === 'education'}
          aria-controls="timeline-items"
          id="filter-education"
          className={`filter-btn ${filter === 'education' ? 'active' : ''}`}
          onClick={() => handleFilterChange('education')}
        >
          {lang === 'sv' ? 'Utbildning' : 'Education'}
        </button>
      </div>

      {/* Timeline Path */}
      <div className="timeline-path" id="timeline-items" aria-live="polite">
        {filteredItems.map((item) => {
          const isExpanded = expandedItems[item.id] !== false; // expanded by default for readability, or collapsed?
          // Suppress details completely in the "Visa Alla / Show All" view to prevent cognitive overload
          const hasDetails = filter !== 'all' && item.content && item.content.length > 0;

          return (
            <div key={item.id} className="timeline-item fade-in">
              {/* Icon Marker */}
              <div className="timeline-marker">
                <div className={`marker-icon-wrapper ${item.type}`}>
                  {item.type === 'work' ? <Briefcase size={16} aria-hidden="true" /> : <GraduationCap size={16} aria-hidden="true" />}
                </div>
              </div>

              {/* Card Content */}
              <div className="timeline-card">
                <div 
                  className="timeline-card-header" 
                  onClick={() => hasDetails && toggleExpand(item.id)}
                  onKeyDown={(e) => {
                    if (hasDetails && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                  style={{ cursor: hasDetails ? 'pointer' : 'default' }}
                  tabIndex={hasDetails ? 0 : -1}
                  role={hasDetails ? 'button' : undefined}
                  aria-expanded={hasDetails ? isExpanded : undefined}
                  aria-controls={hasDetails ? `timeline-body-${item.id}` : undefined}
                >
                  <div className="title-section">
                    <span className="timeline-period">{item.period}</span>
                    <h3 className="timeline-item-title" id={`timeline-title-${item.id}`}>{item.title}</h3>
                    <h4 className="timeline-item-subtitle">{item.subtitle}</h4>
                  </div>
                  {hasDetails && (
                    <button 
                      className="expand-toggle-btn" 
                      aria-label={isExpanded ? (lang === 'sv' ? 'Dölj detaljer' : 'Hide details') : (lang === 'sv' ? 'Visa detaljer' : 'Show details')}
                      tabIndex={-1} // The header div is already focusable
                    >
                      {isExpanded ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
                    </button>
                  )}
                </div>

                {/* Details Section */}
                {hasDetails && isExpanded && (
                  <div className="timeline-card-body" id={`timeline-body-${item.id}`} role="region" aria-labelledby={`timeline-title-${item.id}`}>
                    {item.content.map((point, pIndex) => (
                      <p key={pIndex} className="timeline-text-point">
                        {(item.content.length > 1 || (item.type === 'work' && item.id !== 'leadership')) && !(pIndex === 0 && point.trim().endsWith(':')) ? (
                          <span className="bullet-marker" aria-hidden="true">•</span>
                        ) : null}
                        {point}
                      </p>
                    ))}
                    {item.documentUrl && (
                      <div className="document-action-wrapper" style={{ marginTop: '1.2rem' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.documentUrl) {
                              openDocument(item.documentUrl, item.title);
                            }
                          }}
                          className="btn-document"
                          aria-label={lang === 'sv' ? `Visa betyg eller intyg för ${item.title}` : `View certificate or diploma for ${item.title}`}
                        >
                          <FileText size={16} aria-hidden="true" />
                          {lang === 'sv' ? 'Visa Examensbevis / Intyg' : 'View Certificate / Diploma'}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Document Viewer Modal */}
      {activeDoc && createPortal(
        <div className="modal-overlay" onClick={closeDocument}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{activeDoc.title}</h3>
              <div className="modal-actions">
                <a
                  href={activeDoc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn"
                  title={lang === 'sv' ? 'Öppna i ny flik' : 'Open in new tab'}
                >
                  <ExternalLink size={18} />
                </a>
                <button className="modal-close-btn" onClick={closeDocument} aria-label="Close">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="modal-body">
              <iframe
                src={activeDoc.url}
                title={activeDoc.title}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .timeline-component {
          margin-top: 1rem;
        }

        .timeline-filters {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        @media (min-width: 600px) {
          .timeline-filters {
            gap: 1rem;
            margin-bottom: 3rem;
          }
        }

        .filter-btn {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 0.8rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        @media (min-width: 600px) {
          .filter-btn {
            padding: 0.5rem 1.2rem;
            font-size: 0.95rem;
          }
        }

        .filter-btn:hover, .filter-btn.active {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background-color: var(--accent-gold-muted);
        }

        .timeline-path {
          position: relative;
          padding-left: 1.5rem;
          border-left: 1px solid var(--border-color);
          margin-left: 0.2rem;
        }

        @media (min-width: 600px) {
          .timeline-path {
            padding-left: 2.5rem;
            margin-left: 1rem;
          }
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 600px) {
          .timeline-item {
            margin-bottom: 3rem;
          }
        }

        .timeline-marker {
          position: absolute;
          left: calc(-1.5rem - 12.5px);
          top: 10px;
          z-index: 2;
        }

        @media (min-width: 600px) {
          .timeline-marker {
            left: calc(-2.5rem - 17px);
            top: 6px;
          }
        }

        .marker-icon-wrapper {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .marker-icon-wrapper svg {
          width: 12px;
          height: 12px;
        }

        @media (min-width: 600px) {
          .marker-icon-wrapper {
            width: 32px;
            height: 32px;
          }
          .marker-icon-wrapper svg {
            width: 16px;
            height: 16px;
          }
        }

        .timeline-item:hover .marker-icon-wrapper {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          box-shadow: 0 0 10px rgba(197, 168, 128, 0.4);
        }

        .timeline-card {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          box-shadow: 0 4px 15px var(--shadow-color);
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          border-color: rgba(197, 168, 128, 0.4);
          transform: translateX(3px);
        }

        .timeline-card-header {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .timeline-card-header {
            padding: 1.5rem;
          }
        }

        .title-section {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .timeline-period {
          font-size: 0.85rem;
          font-style: italic;
          font-weight: bold;
          color: var(--accent-gold);
          letter-spacing: 0.05em;
        }

        @media (min-width: 768px) {
          .timeline-period {
            font-size: 0.95rem;
          }
        }

        .timeline-item-title {
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.25;
        }

        @media (min-width: 768px) {
          .timeline-item-title {
            font-size: 1.35rem;
          }
        }

        .timeline-item-subtitle {
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-secondary);
          font-style: italic;
        }

        @media (min-width: 768px) {
          .timeline-item-subtitle {
            font-size: 1.1rem;
          }
        }

        .expand-toggle-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 0.2rem;
          margin-top: 0.2rem;
        }

        .expand-toggle-btn:hover {
          color: var(--accent-gold);
        }

        .timeline-card-body {
          padding: 0 1rem 1rem 1rem;
          border-top: 1px dashed var(--border-color);
          margin-top: -0.2rem;
          padding-top: 1rem;
        }

        @media (min-width: 768px) {
          .timeline-card-body {
            padding: 0 1.5rem 1.5rem 1.5rem;
            padding-top: 1.2rem;
          }
        }

        .timeline-text-point {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
          display: flex;
          gap: 0.5rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .timeline-text-point {
            font-size: 1.1rem;
          }
        }

        .timeline-text-point:last-child {
          margin-bottom: 0;
        }

        .bullet-marker {
          color: var(--accent-gold);
          font-weight: bold;
          flex-shrink: 0;
        }

        .btn-document {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
          padding: 0.4rem 0.9rem;
          font-size: 0.9rem;
          border-radius: 2px;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        @media (min-width: 768px) {
          .btn-document {
            font-size: 0.95rem;
          }
        }

        .btn-document:hover {
          background-color: var(--accent-gold-muted);
          border-color: var(--accent-gold-hover);
          color: var(--accent-gold-hover);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          width: 95%;
          height: 90%;
          max-width: 1000px;
          background-color: var(--card-bg);
          border: 1.5px solid var(--accent-gold);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .modal-content {
            width: 85%;
            height: 85%;
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        @media (min-width: 768px) {
          .modal-header {
            padding: 1rem 1.5rem;
          }
        }

        .modal-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .modal-title {
            font-size: 1.25rem;
          }
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .modal-action-btn, .modal-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem;
          transition: color 0.2s ease;
        }

        .modal-action-btn:hover, .modal-close-btn:hover {
          color: var(--accent-gold);
        }

        .modal-body {
          flex: 1;
          background-color: #fff;
        }

        .modal-body iframe {
          border: none;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
export default Timeline;
