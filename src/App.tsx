import { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const [tab, setTab] = useState<'about' | 'experience' | 'contact'>('about');
  const [lang, setLang] = useState<'sv' | 'en'>('sv');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('cv-theme') as 'dark' | 'light' | null;
    if (savedTheme) return savedTheme;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  // Keep DOM class synchronized with the state reactively
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('cv-theme', nextTheme);
  };

  // Get active CV content translations
  const currentCV = cvData[lang];

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Navbar
        currentTab={tab}
        setTab={setTab}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        tabNames={currentCV.tabs}
      />

      {/* Main Profile Identity */}
      <header className="profile-header">
        <h1 className="profile-title">{currentCV.title}</h1>
        <p className="profile-meta">
          Linköping &nbsp;||&nbsp; 0762 542 956 &nbsp;||&nbsp; <a href="mailto:mr.mjaxelsson@gmail.com">mr.mjaxelsson@gmail.com</a>
        </p>
        {currentCV.tagline && <p className="profile-tagline">{currentCV.tagline}</p>}
      </header>

      {/* Main Page Area */}
      <main className="content-area">
        {tab === 'about' && (
          <Home data={currentCV} lang={lang} />
        )}
        {tab === 'experience' && (
          <Experience data={currentCV} lang={lang} />
        )}
        {tab === 'contact' && (
          <Contact data={currentCV} lang={lang} />
        )}
      </main>

      {/* Footer */}
      <Footer referencesText={currentCV.references} />

      {/* Print Styles overrides */}
      <style>{`
        @media print {
          /* Print Stylesheet for Elegant PDF Generation */
          body {
            background-color: #fff !important;
            color: #000 !important;
            font-size: 11pt !important;
            line-height: 1.5 !important;
          }
          .app-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .navbar-header,
          .timeline-filters,
          .skills-categories,
          .download-action,
          .control-btn,
          .expand-toggle-btn,
          .networks-links,
          .networks-title,
          .networks-divider,
          .document-action-wrapper,
          .modal-overlay,
          .hero-statement {
            display: none !important;
          }
          .card {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin-bottom: 2rem !important;
            background: transparent !important;
          }
          .profile-title {
            font-size: 24pt !important;
            margin-top: 0 !important;
            text-align: center;
          }
          .profile-tagline {
            font-size: 12pt !important;
            text-align: center;
            margin-bottom: 1.5rem !important;
          }
          .profile-meta {
            font-size: 10pt !important;
            text-align: center;
            margin-bottom: 0.5rem !important;
          }
          .profile-meta a {
            color: #000 !important;
            text-decoration: none !important;
          }
          .section-title {
            font-size: 14pt !important;
            margin-top: 1.5rem !important;
            margin-bottom: 0.8rem !important;
            page-break-after: avoid;
          }
          .profile-description {
            font-size: 11pt !important;
            margin-bottom: 1.5rem !important;
          }
          .quick-highlights {
            display: none !important;
          }
          .timeline-path {
            border-left: none !important;
            padding-left: 0 !important;
            margin-left: 0 !important;
          }
          .timeline-marker {
            display: none !important;
          }
          .timeline-card {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            margin-bottom: 1.5rem !important;
          }
          .timeline-card-header {
            padding: 0 !important;
            cursor: default !important;
          }
          .timeline-card-body {
            padding: 0.5rem 0 0 0 !important;
            border-top: none !important;
          }
          .timeline-text-point {
            font-size: 10pt !important;
            margin-bottom: 0.3rem !important;
          }
          .skills-items-container {
            display: block !important;
          }
          .skill-card {
            display: inline-block !important;
            border: 1px solid #ccc !important;
            padding: 0.3rem 0.6rem !important;
            margin: 0.2rem !important;
            font-size: 9pt !important;
            background: transparent !important;
            border-radius: 2px !important;
            box-shadow: none !important;
          }
          .core-badge, .skill-dot {
            display: none !important;
          }
          .language-bar-bg {
            border: 1px solid #000 !important;
            background: #fff !important;
          }
          .language-bar-fill {
            background: #000 !important;
          }
          .contact-grid {
            display: block !important;
          }
          .contact-item {
            display: inline-block !important;
            width: 50% !important;
            border: none !important;
            padding: 0.5rem 0 !important;
            background: transparent !important;
            box-shadow: none !important;
          }
          .contact-icon-box {
            display: none !important;
          }
          .app-footer {
            margin-top: 2rem !important;
            padding-bottom: 1rem !important;
          }
          .footer-divider {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
