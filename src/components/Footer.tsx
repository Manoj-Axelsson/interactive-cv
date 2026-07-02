import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-divider"></div>
      <div className="footer-content">
        <p className="copyright-text">
          &copy; Manoj Axelsson - The AXIS Framework {new Date().getFullYear()}
        </p>
      </div>

      <style>{`
        .app-footer {
          margin-top: 3rem;
          padding-bottom: 2rem;
          text-align: center;
          color: var(--text-secondary);
        }

        @media (min-width: 768px) {
          .app-footer {
            margin-top: 5rem;
            padding-bottom: 3rem;
          }
        }

        .footer-divider {
          width: 60px;
          height: 1px;
          background-color: var(--accent-gold);
          margin: 0 auto 1.5rem;
          opacity: 0.3;
        }

        @media (min-width: 768px) {
          .footer-divider {
            margin: 0 auto 2rem;
          }
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          opacity: 0.7;
        }

        @media (min-width: 768px) {
          .copyright-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
