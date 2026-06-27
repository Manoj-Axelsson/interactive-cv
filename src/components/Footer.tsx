import React from 'react';

interface FooterProps {
  referencesText: string;
}

export const Footer: React.FC<FooterProps> = ({ referencesText }) => {
  return (
    <footer className="app-footer">
      <div className="footer-divider"></div>
      <div className="footer-content">
        <p className="references-notice">{referencesText}</p>
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Manoj Axelsson. All rights reserved.
        </p>
      </div>

      <style>{`
        .app-footer {
          margin-top: 5rem;
          padding-bottom: 3rem;
          text-align: center;
          color: var(--text-secondary);
        }

        .footer-divider {
          width: 60px;
          height: 1px;
          background-color: var(--accent-gold);
          margin: 0 auto 2rem;
          opacity: 0.3;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .references-notice {
          font-style: italic;
          font-size: 1.05rem;
        }

        .copyright-text {
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
};
export default Footer;
