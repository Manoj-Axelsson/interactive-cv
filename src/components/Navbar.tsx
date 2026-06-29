import React from 'react';
import { Sun, Moon, Globe, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  const handleDownloadPDF = async () => {
    const originalTab = currentTab;

    // Switch to about tab to capture full CV
    setTab('about');
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = document.body;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: theme === 'dark' ? '#121316' : '#fbfaf7'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Manoj-Axelsson-CV.pdf');

    // Restore original tab
    setTab(originalTab);
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
              <span className="lang-label">{lang === 'sv' ? 'CV' : 'CV'}</span>
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

        .pdf-btn:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .lang-label {
          font-size: 0.85rem;
          font-weight: bold;
          letter-spacing: 0.05em;
        }
      `}</style>
      </header>
  );
};
export default Navbar;