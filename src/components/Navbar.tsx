import React from 'react';
import { Sun, Moon, Globe, Download } from 'lucide-react';

interface NavbarProps {
  currentTab: 'about' | 'experience' | 'recommendations' | 'contact';
  setTab: (tab: 'about' | 'experience' | 'recommendations' | 'contact') => void;
  lang: 'sv' | 'en';
  setLang: (lang: 'sv' | 'en') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  tabNames: {
    about: string;
    experience: string;
    recommendations: string;
    contact: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
                                                currentTab,
                                                setTab,
                                                lang,
                                                setLang,
                                                theme,
                                                toggleTheme,
                                                tabNames
                                              }) => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/documents/Manoj_John_Axelsson_CV.pdf';
    link.download = 'Manoj_John_Axelsson_CV.pdf';
    link.click();
  };

  return (
      <header className="navbar-header">
        <nav className="nav-container">
          {/* Nav Tabs */}
          <div className="nav-links">
            <button
                className={`nav-tab ${currentTab === 'about' ? 'active' : ''}`}
                onClick={() => setTab('about')}
            >
              {tabNames.about}
            </button>
            <button
                className={`nav-tab ${currentTab === 'experience' ? 'active' : ''}`}
                onClick={() => setTab('experience')}
            >
              {tabNames.experience}
            </button>
            <button
                className={`nav-tab ${currentTab === 'recommendations' ? 'active' : ''}`}
                onClick={() => setTab('recommendations')}
            >
              {tabNames.recommendations}
            </button>
            <button
                className={`nav-tab ${currentTab === 'contact' ? 'active' : ''}`}
                onClick={() => setTab('contact')}
            >
              {tabNames.contact}
            </button>
          </div>

          {/* Controls */}
          <div className="nav-controls">
            {/* Download PDF */}
            <button
                className="control-btn pdf-btn"
                onClick={handleDownloadPDF}
                title={lang === 'sv' ? 'Ladda ner CV' : 'Download CV'}
            >
              <Download size={16} />
              <span className="lang-label">CV</span>
            </button>

            {/* Language Toggle */}
            <button
                className="control-btn lang-toggle"
                onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
                title={lang === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
            >
              <Globe size={16} />
              <span className="lang-label">{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
                className="control-btn theme-toggle"
                onClick={toggleTheme}
                title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </nav>

        <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--border-color);
          padding: 0.8rem 0;
          margin-bottom: 1.5rem;
          background-color: rgba(18, 19, 22, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background-color 0.4s ease, padding 0.3s ease;
        }

        @media (min-width: 600px) {
          .navbar-header {
            padding: 1.2rem 0;
            margin-bottom: 2rem;
          }
        }

        :root.light .navbar-header {
          background-color: rgba(251, 250, 247, 0.85);
        }

        .nav-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          width: 100%;
        }

        @media (min-width: 600px) {
          .nav-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 0;
          }
        }

        .nav-links {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (min-width: 600px) {
          .nav-links {
            gap: 2rem;
            justify-content: flex-start;
          }
        }

        .nav-tab {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0;
          border-bottom: 1.5px solid transparent;
          transition: all 0.3s ease;
        }

        @media (min-width: 600px) {
          .nav-tab {
            font-size: 1.05rem;
          }
        }

        .nav-tab:hover {
          color: var(--text-primary);
        }

        .nav-tab.active {
          color: var(--accent-gold);
          border-bottom-color: var(--accent-gold);
        }

        .nav-controls {
          display: flex;
          gap: 0.8rem;
          justify-content: center;
          align-items: center;
          margin-top: 0.4rem;
        }

        @media (min-width: 600px) {
          .nav-controls {
            margin-top: 0;
          }
        }

        .control-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: var(--highlight-color);
          border: 1.5px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 4px;
          cursor: pointer;
          min-height: 40px; /* Touch target size */
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .control-btn:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--shadow-color);
          background-color: var(--accent-gold-muted);
        }

        .control-btn svg {
          color: var(--accent-gold);
          transition: transform 0.3s ease;
        }

        .control-btn:hover svg {
          transform: scale(1.15);
        }

        .lang-label {
          font-family: var(--font-family);
          font-weight: 600;
        }

        /* Balanced padding for icon-only theme toggle */
        .theme-toggle {
          padding: 0.5rem;
          width: 40px;
          height: 40px;
        }
        `}</style>
      </header>
  );
};
export default Navbar;