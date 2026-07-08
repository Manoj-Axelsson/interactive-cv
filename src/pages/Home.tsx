import React from 'react';
import type { CVData } from '../types/cv';
import SkillsGrid from '../components/SkillsGrid';
import { Award, Code, Globe, ExternalLink } from 'lucide-react';
import { track } from '@vercel/analytics';

interface HomeProps {
  data: CVData;
  lang: 'sv' | 'en';
}

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export const Home: React.FC<HomeProps> = ({ data, lang }) => {
  const steps = lang === 'sv' ? [
    { title: 'Förstå', description: 'Kartlägga nuvarande tillstånd, intressenter och systemgränser.' },
    { title: 'Analysera', description: 'Mäta prestanda, hitta rotorsaker till problem (5 Varför, Ishikawa) och identifiera slöseri.' },
    { title: 'Förenkla', description: 'Avlägsna onödig komplexitet och eliminera slöseri (Muda) i processen.' },
    { title: 'Förbättra', description: 'Utveckla och driftsätta robusta, långsiktiga och skalbara lösningar.' },
    { title: 'Standardisera', description: 'Dokumentera lösningen, införa automatiska tester och etablera stabila rutiner.' },
    { title: 'Utbilda & Verifiera', description: 'Utbilda berörd personal i den nya standarden och etablera självinspektionsmetoder så att operatörerna löpande kan verifiera processresultaten på plats.' },
    { title: 'Mäta', description: 'Följa upp mätetal (KPI) och kvantifiera den faktiska förbättringen mot uppsatta mål.' },
    { title: 'Upprepa', description: 'Fortsätta cykeln av ständiga förbättringar (Kaizen/PDCA) för långsiktig framgång.' }
  ] : [
    { title: 'Understand', description: 'Map out the current state, identify stakeholders, and define system boundaries.' },
    { title: 'Analyse', description: 'Measure baseline performance, perform root cause analysis (5 Whys, Ishikawa), and identify waste.' },
    { title: 'Simplify', description: 'Strip away unnecessary complexity and eliminate waste (Muda) in the process.' },
    { title: 'Improve', description: 'Design and deploy robust, automated, and long-term scalable solutions.' },
    { title: 'Standardize', description: 'Document the architecture, establish automated testing, and define stable procedures.' },
    { title: 'Train & Verify', description: 'Train the respective operators in the new standard and establish self-inspection methods to ensure workers can verify process results on the line.' },
    { title: 'Measure', description: 'Audit metrics (KPIs) and quantify the actual improvement against baseline goals.' },
    { title: 'Repeat', description: 'Cycle back continuously to identify new optimization vectors (Kaizen/PDCA).' }
  ];

  const frameworkSteps = lang === 'sv' ? [
    { title: 'Challenge (Utmaning)', icon: '🎯', description: 'Vilken ineffektivitet eller flaskhals identifierades?' },
    { title: 'Analysis (Analys)', icon: '🔍', description: 'Vilka data samlades in via DMAIC och FMEA? Hur analyserades rotorsaker med Pareto, styrdiagram och fiskbensdiagram?' },
    { title: 'Solution (Lösning)', icon: '💡', description: 'Vilken teknisk/processuell lösning implementerades?' },
    { title: 'Outcome (Resultat)', icon: '📈', description: 'Vilka var de kvantifierbara prestandavinsterna?' },
    { title: 'Lessons Learned', icon: '🧠', description: 'Hur standardiserades lösningen mot framtida fel?' }
  ] : [
    { title: 'Challenge', icon: '🎯', description: 'What system constraint or inefficiency was identified?' },
    { title: 'Analysis', icon: '🔍', description: 'What data was collected via DMAIC and FMEA? How were root causes mapped using Pareto, control, and fishbone charts?' },
    { title: 'Solution', icon: '💡', description: 'What technical or process solution was implemented?' },
    { title: 'Outcome', icon: '📈', description: 'What were the measurable performance gains?' },
    { title: 'Lessons Learned', icon: '🧠', description: 'How was the solution standardized to prevent recurrence?' }
  ];

  return (
    <div className="home-page fade-in">
      {/* Hero Statement */}
      <div className="hero-statement">
        <h2 className="hero-statement-title">{data.heroTitle}</h2>
        <blockquote className="hero-statement-quote">{data.heroSubtitle}</blockquote>
      </div>

      {/* Main Dossier Container */}
      <article className="card dossier-card">
        {/* Section 1: Philosophy & Profile */}
        <section className="dossier-section profile-section">
          <h2 className="dossier-title">{lang === 'sv' ? 'Filosofi & Profil' : 'Philosophy & Profile'}</h2>
          {data.profile.split('\n\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="profile-description">{paragraph}</p>
          ))}

          {/* Dynamic highlights badges */}
          <div className="quick-highlights">
            <div className="highlight-item">
              <Code size={20} className="highlight-icon" />
              <div className="highlight-text">
                <strong>{lang === 'sv' ? 'Systemutveckling' : 'Modern Software'}</strong>
                <span>React, TS, Node.js</span>
              </div>
            </div>
            <div className="highlight-item">
              <Award size={20} className="highlight-icon" />
              <div className="highlight-text">
                <strong>{lang === 'sv' ? 'Lean & Six Sigma' : 'Lean & Six Sigma'}</strong>
                <span>Green Belt Certified</span>
              </div>
            </div>
            <div className="highlight-item">
              <Globe size={20} className="highlight-icon" />
              <div className="highlight-text">
                <strong>{lang === 'sv' ? 'Mångkulturell' : 'Multicultural'}</strong>
                <span>Svenska, Engelska, Malayalam</span>
              </div>
            </div>
          </div>

        </section>

        <hr className="dossier-divider" />

        {/* Section 2: Core Competencies (Kärnkompetenser) */}
        <section className="dossier-section skills-section">
          <h2 className="dossier-title">{data.coreCompetenciesTitle}</h2>
          <SkillsGrid
            lang={lang}
            coreCompetencies={data.coreCompetencies}
            otherCompetencies={data.otherCompetencies}
          />
        </section>

        <hr className="dossier-divider" />

        {/* Section 3: How I Work (Hur jag arbetar) */}
        <section className="dossier-section how-i-work-section">
          <h2 className="dossier-title">{lang === 'sv' ? 'Hur jag arbetar' : 'How I Work'}</h2>
          <p className="dossier-intro">
            {lang === 'sv' 
              ? 'Min process bygger på strukturerad problemlösning, inspirerad av Lean och Six Sigma samt modern systemdesign. Jag tror på att förstå problemet till grunden innan man skriver en enda rad kod.'
              : 'My process is rooted in disciplined engineering methodologies, combining Lean and Six Sigma problem-solving with modern software design. I believe in modeling reality and finding root causes before writing code.'}
          </p>
          
          <div className="stepper-flow">
            {steps.map((step, idx) => (
              <div key={idx} className="stepper-step">
                <div className="stepper-indicator">
                  <div className="stepper-badge">{idx + 1}</div>
                  {idx < steps.length - 1 && <div className="stepper-line"></div>}
                </div>
                <div className="stepper-content">
                  <h3 className="stepper-title">{step.title}</h3>
                  <p className="stepper-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="dossier-divider" />

        {/* Section 4: Projects as Evidence */}
        <section className="dossier-section evidence-section">
          <h2 className="dossier-title">{lang === 'sv' ? 'Mina Projekt Som Bevis' : 'Projects as Evidence'}</h2>
          <p className="dossier-intro">
            {lang === 'sv'
              ? 'Engineering-projekt handlar om mer än bara programmeringsspråk. De är bevis på strukturerad problemlösning. Jag dokumenterar varje case enligt denna modell:'
              : 'Engineering projects are more than just programming languages. They are evidence of structured problem-solving. Every project I deliver is documented using this framework:'}
          </p>

          <div className="framework-pipeline-container">
            <div className="framework-pipeline-header">
              {lang === 'sv' ? 'STRUKTURERAD PROJEKTDOKUMENTATIONSMALL' : 'STRUCTURED PROJECT DOCUMENTATION TEMPLATE'}
            </div>
            <div className="framework-pipeline">
              {frameworkSteps.map((fStep, idx) => (
                <React.Fragment key={idx}>
                  <div className="framework-pipeline-node">
                    <div className="node-icon">{fStep.icon}</div>
                    <h4 className="node-title">{fStep.title}</h4>
                    <p className="node-desc">{fStep.description}</p>
                  </div>
                  {idx < frameworkSteps.length - 1 && (
                    <div className="pipeline-connector">
                      <span className="arrow-vertical">↓</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* GitHub CTA Link */}
          <div className="evidence-cta">
            <div className="cta-icon-wrapper">
              <GitHubIcon size={22} />
            </div>
            <div className="cta-text-wrapper">
              <h4 className="cta-title">
                {lang === 'sv' ? 'Systemarkitektur & Verifieringsarkiv' : 'Systems Architecture & Verification Repository'}
              </h4>
              <p className="cta-desc">
                {lang === 'sv'
                  ? 'Denna metodik är validerad genom praktisk implementering. Utforska källkod, systemarkitekturscheman och valideringsdokumentation i det publika systemarkivet:'
                  : 'This methodology is formally validated through actual implementation. Access the source code, system architecture schemas, and operational validation files in the public repository:'}
              </p>
              <a
                href="https://github.com/Manoj-Axelsson/rubberduckworks"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github-link"
                onClick={() => track('click_rubberduckworks_github')}
              >
                <span>{lang === 'sv' ? 'Öppna Rubber Duck Works (GitHub)' : 'Access Rubber Duck Works (GitHub)'}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
      </article>

      {/* Languages Section */}
      <section className="card languages-section">
        <h2 className="section-title">{data.languagesTitle}</h2>
        <div className="languages-container">
          {data.languages.map((langItem, index) => {
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
          text-align: center;
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
          ), url('/background-pic.jpg');
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
          font-size: 1.0rem;
          line-height: 1.6;
          color: var(--text-primary);
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
          text-shadow: 0 1px 4px var(--shadow-color);
        }

        @media (min-width: 600px) {
          .hero-statement-quote {
            font-size: 1.125rem;
            text-align: center;
          }
        }

        @media (min-width: 768px) {
          .hero-statement-quote {
            font-size: 1.2rem;
          }
        }

        /* Dossier Cohesive Card Layout */
        .dossier-card {
          padding: 1.5rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .dossier-card {
            padding: 3rem 2.5rem;
          }
        }

        .dossier-section {
          padding: 0.5rem 0;
        }

        .dossier-divider {
          border: 0;
          border-top: 1px dashed var(--border-color);
          margin: 1.75rem 0;
          opacity: 0.7;
        }

        /* Dossier Titles (Decreased & Elegant) */
        .dossier-title {
          font-size: 1.15rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          margin-top: 0;
          margin-bottom: 1.5rem;
          border-left: 2px solid var(--accent-gold);
          padding-left: 0.8rem;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .dossier-title {
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }
        }

        /* Profile Typography & Spacing Optimization */
        .profile-description {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 1.2rem;
          color: var(--text-primary);
          text-align: left;
          letter-spacing: 0.01em;
        }

        /* Lead paragraph style */
        .profile-description:first-of-type {
          font-size: 1.0rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.65;
          border-left: 2px solid var(--accent-gold);
          padding-left: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .profile-description {
            font-size: 1.15rem;
            line-height: 1.68;
          }
          .profile-description:first-of-type {
            font-size: 1.125rem;
            line-height: 1.72;
          }
        }

        .profile-description:last-of-type {
          margin-bottom: 2rem;
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


        /* How I Work Section Styles */
        .dossier-intro {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .dossier-intro {
            font-size: 1.15rem;
          }
        }

        .stepper-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-left: 0.2rem;
          margin-top: 1rem;
        }

        .stepper-step {
          display: flex;
          gap: 1.2rem;
          position: relative;
        }

        .stepper-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .stepper-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid var(--accent-gold);
          color: var(--accent-gold);
          background-color: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: bold;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .stepper-step:hover .stepper-badge {
          background-color: var(--accent-gold);
          color: var(--bg-color);
          box-shadow: 0 0 10px var(--accent-gold-muted);
        }

        .stepper-line {
          width: 1.5px;
          background-color: var(--border-color);
          flex-grow: 1;
          margin: 4px 0;
          min-height: 35px;
        }

        .stepper-content {
          padding-bottom: 1.5rem;
          margin-top: 0px;
        }

        .stepper-step:last-child .stepper-content {
          padding-bottom: 0.5rem;
        }

        .stepper-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stepper-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .stepper-desc {
            font-size: 1.05rem;
          }
        }

        /* Case Study Framework Styles (Non-Wrapping, Flat, Premium) */
        .framework-pipeline-container {
          background-color: var(--highlight-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 1rem 0.8rem;
          margin-top: 1.5rem;
        }

        @media (min-width: 768px) {
          .framework-pipeline-container {
            padding: 1.5rem 1.2rem;
          }
        }

        .framework-pipeline-header {
          font-size: 0.8rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          text-transform: uppercase;
          border-bottom: 1px dashed var(--border-color);
          padding-bottom: 0.6rem;
          margin-bottom: 1.2rem;
          text-align: center;
        }

        .framework-pipeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .framework-pipeline {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 0.6rem;
            align-items: stretch;
          }
        }

        .framework-pipeline-node {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 1rem 0.6rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: border-color 0.3s ease;
          position: relative;
          min-width: 0; /* Enable text shrink inside grid */
        }

        .framework-pipeline-node:hover {
          border-color: rgba(197, 168, 128, 0.4);
        }

        @media (min-width: 768px) {
          .framework-pipeline-node:not(:last-child)::after {
            content: '→';
            position: absolute;
            right: -0.5rem;
            top: 35%;
            color: var(--accent-gold);
            font-weight: bold;
            font-size: 1.1rem;
            z-index: 5;
          }
        }

        .node-icon {
          font-size: 1.3rem;
          margin-bottom: 0.4rem;
        }

        .node-title {
          font-size: 0.9rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .node-title {
            font-size: 0.95rem;
            min-height: 2.4rem; /* Align heights */
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .node-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.35;
          margin: 0;
        }

        @media (min-width: 768px) {
          .node-desc {
            font-size: 0.8rem;
          }
        }

        .pipeline-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          font-weight: bold;
          font-size: 1.1rem;
          margin: 0.3rem 0;
        }

        @media (min-width: 768px) {
          .pipeline-connector {
            display: none !important;
          }
        }

        /* Evidence CTA Link Styles */
        .evidence-cta {
          display: flex;
          gap: 1rem;
          background-color: var(--highlight-color);
          border: 1px dashed var(--border-color);
          border-radius: 4px;
          padding: 1rem;
          margin-top: 1.5rem;
          align-items: flex-start;
          text-align: left;
        }

        @media (min-width: 768px) {
          .evidence-cta {
            padding: 1.2rem;
            gap: 1.2rem;
          }
        }

        .cta-icon-wrapper {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .cta-text-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          width: 100%;
        }

        .cta-title {
          font-size: 0.95rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin: 0;
        }

        .cta-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        @media (min-width: 768px) {
          .cta-desc {
            font-size: 0.9rem;
          }
        }

        .btn-github-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--accent-gold);
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1.5px solid transparent;
          width: fit-content;
          margin-top: 0.4rem;
          padding-bottom: 2px;
          transition: all 0.3s ease;
        }

        .btn-github-link:hover {
          color: var(--accent-gold-hover);
          border-bottom-color: var(--accent-gold-hover);
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
