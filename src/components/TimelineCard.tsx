import React from 'react';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { track } from '@vercel/analytics';
import './TimelineCard.css';

export interface UnifiedTimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  period: string;
  year: number;
  content: string[];
  documentUrl?: string;
}

interface TimelineCardProps {
  item: UnifiedTimelineItem;
  filter: string;
  lang: 'sv' | 'en';
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  filter,
  lang,
  isExpanded,
  onToggleExpand
}) => {
  const hasDetails = item.content && item.content.length > 0;
  const isHeaderClickable = filter !== 'all' && hasDetails;

  return (
    <div className="timeline-item fade-in">
      <div className="timeline-marker">
        <div className={`marker-icon-wrapper ${item.type}`}>
          {item.type === 'work' ? <Briefcase size={16} aria-hidden="true" /> : <GraduationCap size={16} aria-hidden="true" />}
        </div>
      </div>

      <div className="timeline-card">
        <div 
          className="timeline-card-header" 
          onClick={() => isHeaderClickable && onToggleExpand(item.id)}
          onKeyDown={(e) => {
            if (isHeaderClickable && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onToggleExpand(item.id);
            }
          }}
          style={{ cursor: isHeaderClickable ? 'pointer' : 'default' }}
          tabIndex={isHeaderClickable ? 0 : -1}
          role={isHeaderClickable ? 'button' : undefined}
          aria-expanded={isHeaderClickable ? isExpanded : undefined}
          aria-controls={hasDetails ? `timeline-body-${item.id}` : undefined}
        >
          <div className="title-section">
            <span className="timeline-period">{item.period}</span>
            <h3 className="timeline-item-title" id={`timeline-title-${item.id}`}>{item.title}</h3>
            <h4 className="timeline-item-subtitle">{item.subtitle}</h4>
          </div>
          {isHeaderClickable && (
            <button 
              className="expand-toggle-btn" 
              aria-label={isExpanded ? (lang === 'sv' ? 'Dölj detaljer' : 'Hide details') : (lang === 'sv' ? 'Visa detaljer' : 'Show details')}
              tabIndex={-1}
            >
              {isExpanded ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
            </button>
          )}
        </div>

        {hasDetails && (
          <div 
            className={`timeline-card-body ${filter === 'all' ? 'print-only-details' : (isExpanded ? 'details-visible' : 'details-hidden')}`}
            id={`timeline-body-${item.id}`} 
            role="region" 
            aria-labelledby={`timeline-title-${item.id}`}
          >
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
                {/* Certificates are served as public static documents and intentionally opened
                    directly in a new tab rather than embedded in an iframe. This avoids
                    browser/privacy restrictions on framed document navigation and keeps the
                    certificate directly accessible. */}
                <a
                  href={item.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-document"
                  onClick={() =>
                    track('view_document', {
                      title: item.title,
                      url: item.documentUrl
                    })
                  }
                  aria-label={lang === 'sv'
                    ? `Visa betyg eller intyg för ${item.title}`
                    : `View certificate or diploma for ${item.title}`}
                >
                  <FileText size={16} aria-hidden="true" />
                  {lang === 'sv' ? 'Visa Examensbevis / Intyg' : 'View Certificate / Diploma'}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
