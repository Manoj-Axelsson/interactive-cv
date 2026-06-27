import React from 'react';
import type { CVData } from '../types/cv';
import Timeline from '../components/Timeline';

interface ExperienceProps {
  data: CVData;
  lang: 'sv' | 'en';
}

export const Experience: React.FC<ExperienceProps> = ({ data, lang }) => {
  return (
    <div className="experience-page fade-in">
      <section className="card timeline-section">
        <h2 className="section-title">
          {lang === 'sv' ? 'Arbetsliv & Utbildning' : 'Experience & Education'}
        </h2>
        <Timeline
          workExperience={data.workExperience}
          leadershipTitle={data.leadershipTitle}
          leadershipPeriod={data.leadershipPeriod}
          leadershipDescription={data.leadershipDescription}
          education={data.education}
          lang={lang}
        />
      </section>
    </div>
  );
};
export default Experience;
