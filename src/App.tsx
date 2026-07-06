import { useState, useEffect, useRef, Suspense } from 'react';
import { cvData } from './data/cvData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { inject, track } from '@vercel/analytics';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Recommendations from './pages/Recommendations';
import BehindTheCode from './pages/BehindTheCode';

// Initialize Vercel Web Analytics
inject();

function App() {
  const [tab, setTab] = useState<'about' | 'experience' | 'recommendations' | 'contact' | 'behind-the-code'>('about');
  const [lang, setLang] = useState<'sv' | 'en'>(() => {
    // Check URL parameters for language selection on load (e.g. ?lang=en)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'sv') return urlLang;
    return 'sv';
  });
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

  // Track tab views
  useEffect(() => {
    track('view_tab', { tab });
  }, [tab]);

  // Sync URL query parameters with the language state
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') !== lang) {
      params.set('lang', lang);
      const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [lang]);

  // Track language changes (excluding initial render)
  const isFirstLangRef = useRef(true);
  useEffect(() => {
    document.documentElement.lang = lang;
    if (isFirstLangRef.current) {
      isFirstLangRef.current = false;
      return;
    }
    track('change_language', { language: lang });
  }, [lang]);

  // Track theme changes (excluding initial render)
  const isFirstThemeRef = useRef(true);
  useEffect(() => {
    if (isFirstThemeRef.current) {
      isFirstThemeRef.current = false;
      return;
    }
    track('change_theme', { theme });
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
        <Suspense fallback={
          <div className="lazy-loading-spinner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', color: 'var(--accent-gold)' }}>
            <span style={{ fontSize: '1.25rem', fontFamily: 'EB Garamond, serif', letterSpacing: '0.05em' }}>Laddar... / Loading...</span>
          </div>
        }>
          <div className={`tab-section ${tab === 'about' ? 'active-tab' : 'inactive-tab'}`}>
            <Home data={currentCV} lang={lang} />
          </div>
          <div className={`tab-section ${tab === 'experience' ? 'active-tab' : 'inactive-tab'}`}>
            <Experience data={currentCV} lang={lang} />
          </div>
          <div className={`tab-section ${tab === 'recommendations' ? 'active-tab' : 'inactive-tab'}`}>
            <Recommendations data={currentCV} lang={lang} />
          </div>
          <div className={`tab-section ${tab === 'behind-the-code' ? 'active-tab' : 'inactive-tab'}`}>
            <BehindTheCode data={currentCV} lang={lang} />
          </div>
          <div className={`tab-section ${tab === 'contact' ? 'active-tab' : 'inactive-tab'}`}>
            <Contact data={currentCV} lang={lang} />
          </div>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Print Styles overrides */}
      <style>{`
        .tab-section.inactive-tab {
          display: none;
        }
        .tab-section.active-tab {
          display: block;
        }

        @media print {
          .tab-section {
            display: block !important;
            width: 100% !important;
          }
          .tab-section.inactive-tab {
            display: block !important;
          }
          /* Force clean page breaks at the start of major sections */
          .tab-section:nth-of-type(2), /* Experience */
          .tab-section:nth-of-type(3)  /* Recommendations */ {
            page-break-before: always;
          }
          /* Hide 'Behind the Code' tab from printed CV as it is personal */
          .tab-section:nth-of-type(4) {
            display: none !important;
          }
          /* Let Contact flow naturally */
          .tab-section:nth-of-type(5) {
            page-break-before: auto;
          }
          /* Print Stylesheet for Elegant PDF Generation */
          html, body, #root {
            background-color: #fff !important;
            color: #000 !important;
            font-size: 11pt !important;
            line-height: 1.5 !important;
            overflow: visible !important;
            height: auto !important;
            min-height: auto !important;
          }
          .app-container {
            display: block !important;
            min-height: auto !important;
            height: auto !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
          }
          main.content-area {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
            height: auto !important;
          }
          .tab-section {
            overflow: visible !important;
            height: auto !important;
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
