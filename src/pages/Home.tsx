import React from 'react';
import type { CVData } from '../types/cv';
import SkillsGrid from '../components/SkillsGrid';
import { Award, Code, Globe, FileDown } from 'lucide-react';
import { track } from '@vercel/analytics';

interface HomeProps {
  data: CVData;
  lang: 'sv' | 'en';
}

export const Home: React.FC<HomeProps> = ({ data, lang }) => {

  return (
    <div className="home-page fade-in">
      {/* Hero Statement */}
      <div className="hero-statement">
        <h2 className="hero-statement-title">{data.heroTitle}</h2>
        <blockquote className="hero-statement-quote">”{data.heroSubtitle}”</blockquote>
      </div>

      {/* Intro Profile Card */}
      <section className="card intro-card">
        <h2 className="section-title">{lang === 'sv' ? 'Profil' : 'Profile'}</h2>
        {data.profile.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex} className="profile-description">{paragraph}</p>
        ))}

        {/* Dynamic highlights badges */}
        <div className="quick-highlights">
          <div className="highlight-item">
            <Code size={20} className="highlight-icon" />
            <div className="highlight-text">
              <strong>Systemutveckling</strong>
              <span>React, TS, Node.js</span>
            </div>
          </div>
          <div className="highlight-item">
            <Award size={20} className="highlight-icon" />
            <div className="highlight-text">
              <strong>Lean Six Sigma</strong>
              <span>Green Belt Certified</span>
            </div>
          </div>
          <div className="highlight-item">
            <Globe size={20} className="highlight-icon" />
            <div className="highlight-text">
              <strong>Mångkulturell</strong>
              <span>Svenska, Engelska, Malayalam</span>
            </div>
          </div>
        </div>

        {/* Print / Download Trigger */}
        <div className="download-action">
          <a
            href="/documents/Manoj_John_Axelsson_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => track('download_cv', { language: lang })}
          >
            <FileDown size={18} />
            {data.pdfDownloadText}
          </a>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="card skills-section">
        <h2 className="section-title">{data.coreCompetenciesTitle}</h2>
        <SkillsGrid
          lang={lang}
          coreCompetencies={data.coreCompetencies}
          otherCompetencies={data.otherCompetencies}
        />
      </section>

      {/* Languages Section */}
      <section className="card languages-section">
        <h2 className="section-title">{data.languagesTitle}</h2>
        <div className="languages-container">
          {data.languages.map((langItem, index) => {
            // Simple visual meter for languages
            let percentage = "60%";
            if (langItem.name.toLowerCase().includes('svenska') || langItem.name.toLowerCase().includes('swedish')) percentage = "95%";
            if (langItem.name.toLowerCase().includes('engelska') || langItem.name.toLowerCase().includes('english')) percentage = "100%";
            if (langItem.name.toLowerCase().includes('malayalam')) percentage = "100%";

            return (
              <div key={index} className="language-bar-wrapper">
                <div className="language-info">
                  <span className="language-name">{langItem.name}</span>
                  <span className="language-level">{langItem.level}</span>
                </div>
                <div className="language-bar-bg">
                  <div className="language-bar-fill" style={{ width: percentage }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .hero-statement {
          position: relative;
          text-align: left;
          margin-bottom: 2rem;
          padding: 2rem 1.25rem;
          border: 1.5px solid var(--accent-gold);
          border-radius: 4px;
          overflow: hidden;
          background-color: var(--card-bg);
          box-shadow: 0 4px 20px var(--shadow-color);
        }

        @media (min-width: 600px) {
          .hero-statement {
            padding: 3rem 2.5rem;
            margin-bottom: 3rem;
          }
        }

        @media (min-width: 768px) {
          .hero-statement {
            padding: 3.5rem 2.5rem;
            margin-bottom: 3.5rem;
          }
        }

        .hero-statement::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            var(--hero-overlay), 
            var(--hero-overlay)
          ), url('/background%20pic.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.5;
          z-index: 1;
        }

        .hero-statement-title {
          position: relative;
          z-index: 2;
          font-size: 1.25rem;
          font-style: italic;
          font-weight: 500;
          color: var(--accent-gold);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
          line-height: 1.4;
          text-shadow: 0 1px 4px var(--shadow-color);
        }

        @media (min-width: 600px) {
          .hero-statement-title {
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
          }
        }

        @media (min-width: 768px) {
          .hero-statement-title {
            font-size: 1.65rem;
          }
        }

        .hero-statement-quote {
          position: relative;
          z-index: 2;
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-primary);
          max-width: 800px;
          margin: 0;
          font-weight: 400;
          text-shadow: 0 1px 4px var(--shadow-color);
        }

        @media (min-width: 600px) {
          .hero-statement-quote {
            font-size: 1.25rem;
            text-align: justify;
          }
        }

        @media (min-width: 768px) {
          .hero-statement-quote {
            font-size: 1.35rem;
          }
        }

        .intro-card {
          position: relative;
        }

        .profile-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.2rem;
          color: var(--text-primary);
          text-align: left;
        }

        @media (min-width: 600px) {
          .profile-description {
            font-size: 1.2rem;
            line-height: 1.75;
            text-align: justify;
          }
        }

        @media (min-width: 768px) {
          .profile-description {
            font-size: 1.25rem;
          }
        }

        .profile-description:last-of-type {
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .profile-description:last-of-type {
            margin-bottom: 2.5rem;
          }
        }

        .quick-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.2rem;
          margin-bottom: 2rem;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 1.2rem 0;
        }

        @media (min-width: 600px) {
          .quick-highlights {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2.5rem;
            padding: 1.5rem 0;
          }
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .highlight-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .highlight-text {
          display: flex;
          flex-direction: column;
        }

        .highlight-text strong {
          font-size: 1.05rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        @media (min-width: 600px) {
          .highlight-text strong {
            font-size: 1.15rem;
          }
        }

        .highlight-text span {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-style: italic;
        }

        @media (min-width: 600px) {
          .highlight-text span {
            font-size: 0.95rem;
          }
        }

        .download-action {
          display: flex;
          justify-content: center;
        }

        @media (min-width: 600px) {
          .download-action {
            justify-content: flex-start;
          }
        }

        .languages-container {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        @media (min-width: 600px) {
          .languages-container {
            gap: 1.5rem;
          }
        }

        .language-bar-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .language-info {
          display: flex;
          justify-content: space-between;
          font-size: 1rem;
        }

        @media (min-width: 600px) {
          .language-info {
            font-size: 1.1rem;
          }
        }

        .language-name {
          font-weight: 600;
        }

        .language-level {
          color: var(--text-secondary);
          font-style: italic;
        }

        .language-bar-bg {
          height: 4px;
          background-color: var(--highlight-color);
          border-radius: 2px;
          overflow: hidden;
          width: 100%;
        }

        .language-bar-fill {
          height: 100%;
          background-color: var(--accent-gold);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};
export default Home;
