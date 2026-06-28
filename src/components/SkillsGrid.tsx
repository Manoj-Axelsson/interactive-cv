import React, { useState } from 'react';
import { Award, Code, Users } from 'lucide-react';
import { track } from '@vercel/analytics';

interface SkillsGridProps {
  lang: 'sv' | 'en';
  coreCompetencies: string[];
  otherCompetencies: string[];
}

interface SkillItem {
  nameSV: string;
  nameEN: string;
  category: 'lean' | 'tech' | 'interpersonal';
  isCore: boolean;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'lean' | 'tech' | 'interpersonal'>('all');

  const handleCategoryChange = (cat: 'all' | 'lean' | 'tech' | 'interpersonal') => {
    setActiveCategory(cat);
    track('filter_skills', { category: cat });
  };

  // Map and categorize all skills
  const skills: SkillItem[] = [
    // Lean & Process Development
    {
      nameSV: "Lean Six Sigma Green Belt & metodik",
      nameEN: "Lean Six Sigma Green Belt & Methodology",
      category: 'lean',
      isCore: true
    },
    {
      nameSV: "Datadrivet förbättringsarbete",
      nameEN: "Data-driven Continuous Improvement",
      category: 'lean',
      isCore: true
    },
    {
      nameSV: "Processanalys och kartläggning",
      nameEN: "Process Analysis & Mapping",
      category: 'lean',
      isCore: false
    },
    {
      nameSV: "Grundorsaksanalys",
      nameEN: "Root Cause Analysis",
      category: 'lean',
      isCore: false
    },
    {
      nameSV: "Statistik och faktabaserat beslutsstöd",
      nameEN: "Statistics & Fact-based Decision Support",
      category: 'lean',
      isCore: false
    },
    {
      nameSV: "Förbättringsarbete och processutveckling",
      nameEN: "Process Development & Improvement",
      category: 'lean',
      isCore: true
    },

    // Tech & Quality Assurance
    {
      nameSV: "Systemutveckling (React, Node.js, TypeScript)",
      nameEN: "Software Development (React, Node.js, TypeScript)",
      category: 'tech',
      isCore: true
    },
    {
      nameSV: "Produktionsteknik & CNC-teknik",
      nameEN: "Production & CNC Technology",
      category: 'tech',
      isCore: true
    },
    {
      nameSV: "Kvalitetssäkring",
      nameEN: "Quality Assurance",
      category: 'tech',
      isCore: true
    },
    {
      nameSV: "Datainsamling och informationskvalitet",
      nameEN: "Data Collection & Information Quality",
      category: 'tech',
      isCore: true
    },
    {
      nameSV: "Dokumentation och uppföljning",
      nameEN: "Documentation & Follow-up",
      category: 'tech',
      isCore: false
    },

    // Interpersonal & Soft Skills
    {
      nameSV: "Kommunikation och professionellt bemötande",
      nameEN: "Communication & Relationship Building",
      category: 'interpersonal',
      isCore: true
    },
    {
      nameSV: "Personalledning och eget företagande",
      nameEN: "Personnel Management & Entrepreneurship",
      category: 'interpersonal',
      isCore: false
    },
    {
      nameSV: "Strukturerat och noggrant arbetssätt",
      nameEN: "Structured & Meticulous Work Style",
      category: 'interpersonal',
      isCore: true
    },
    {
      nameSV: "Samarbete i team",
      nameEN: "Team Collaboration",
      category: 'interpersonal',
      isCore: true
    },
    {
      nameSV: "Självständigt arbete",
      nameEN: "Autonomous Performance",
      category: 'interpersonal',
      isCore: true
    }
  ];

  const categories = [
    { id: 'all' as const, labelSV: 'Alla Kompetenser', labelEN: 'All Competencies', icon: null },
    { id: 'lean' as const, labelSV: 'Lean & Process', labelEN: 'Lean & Process', icon: <Award size={16} /> },
    { id: 'tech' as const, labelSV: 'Teknik & Kvalitet', labelEN: 'Tech & Quality', icon: <Code size={16} /> },
    { id: 'interpersonal' as const, labelSV: 'Ledarskap & Kommunikation', labelEN: 'Leadership & Soft Skills', icon: <Users size={16} /> }
  ];

  const filteredSkills = skills.filter(skill => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <div className="skills-grid-component">
      {/* Category Buttons */}
      <div className="skills-categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.icon && <span className="cat-icon">{cat.icon}</span>}
            {lang === 'sv' ? cat.labelSV : cat.labelEN}
          </button>
        ))}
      </div>

      {/* Skills list */}
      <div className="skills-items-container">
        {filteredSkills.map((skill, index) => {
          const displayName = lang === 'sv' ? skill.nameSV : skill.nameEN;

          return (
            <div
              key={index}
              className={`skill-card ${skill.isCore ? 'core-skill' : ''} ${skill.category}`}
            >
              <div className="skill-content">
                <span className="skill-dot"></span>
                <span className="skill-name">{displayName}</span>
              </div>
              {skill.isCore && (
                <span className="core-badge" title={lang === 'sv' ? 'Kärnkompetens' : 'Core Competency'}>
                  ★
                </span>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .skills-grid-component {
          margin-top: 1rem;
        }

        .skills-categories {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 600px) {
          .skills-categories {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.8rem;
            margin-bottom: 2.5rem;
          }
        }

        .cat-btn {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.45rem 0.9rem;
          font-size: 0.9rem;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        @media (min-width: 600px) {
          .cat-btn {
            padding: 0.5rem 1rem;
            font-size: 0.95rem;
          }
        }

        .cat-btn:hover, .cat-btn.active {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background-color: var(--accent-gold-muted);
        }

        .cat-icon {
          display: inline-flex;
          align-items: center;
        }

        .skills-items-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 600px) {
          .skills-items-container {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.2rem;
          }
        }

        .skill-card {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          padding: 1rem 1.25rem;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px var(--shadow-color);
        }

        @media (min-width: 600px) {
          .skill-card {
            padding: 1.2rem 1.5rem;
          }
        }

        .skill-card:hover {
          border-color: var(--accent-gold);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--shadow-color);
        }

        .skill-content {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--border-color);
          transition: background-color 0.3s ease;
        }

        /* Category Color Accents */
        .skill-card.lean:hover .skill-dot {
          background-color: #8da3a6;
        }
        .skill-card.tech:hover .skill-dot {
          background-color: #a6988d;
        }
        .skill-card.interpersonal:hover .skill-dot {
          background-color: var(--accent-gold);
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 500;
        }

        @media (min-width: 600px) {
          .skill-name {
            font-size: 1.1rem;
          }
        }

        .core-skill {
          background: linear-gradient(135deg, var(--card-bg) 0%, rgba(197, 168, 128, 0.03) 100%);
          border-left: 2px solid var(--accent-gold);
        }

        .core-badge {
          color: var(--accent-gold);
          font-size: 0.9rem;
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
};
export default SkillsGrid;
