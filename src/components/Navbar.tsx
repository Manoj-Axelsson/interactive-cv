import React from 'react';
import { Sun, Moon, Globe } from 'lucide-react';

interface NavbarProps {
  currentTab: 'about' | 'experience' | 'contact';
  setTab: (tab: 'about' | 'experience' | 'contact') => void;
  lang: 'sv' | 'en';
  setLang: (lang: 'sv' | 'en') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  tabNames: {
    about: string;
    experience: string;
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
            className={`nav-tab ${currentTab === 'contact' ? 'active' : ''}`}
            onClick={() => setTab('contact')}
          >
            {tabNames.contact}
          </button>
        </div>

        {/* Controls */}
        <div className="nav-controls">
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
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem 0;
          margin-bottom: 2rem;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-tab {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0;
          border-bottom: 1.5px solid transparent;
          transition: all 0.3s ease;
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
          gap: 1rem;
          align-items: center;
        }

        .control-btn {
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: 4px;
          padding: 0.4rem 0.7rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background-color: var(--highlight-color);
        }

        .lang-label {
          font-size: 0.85rem;
          font-weight: bold;
          letter-spacing: 0.05em;
        }

        @media (max-width: 600px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
          }
          .nav-links {
            gap: 1.2rem;
          }
        }
      `}</style>
    </header>
  );
};
export default Navbar;
