import React from 'react';
import type { CVData } from '../types/cv';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

interface ContactProps {
  data: CVData;
  lang: 'sv' | 'en';
}

export const Contact: React.FC<ContactProps> = ({ data, lang }) => {
  const email = "mr.mjaxelsson@gmail.com";
  const rawPhone = "(0046) 762 542 956";
  const telLink = "tel:+46762542956";

  return (
    <div className="contact-page fade-in">
      <section className="card contact-card">
        <h2 className="section-title">{data.contactTitle}</h2>
        <p className="contact-intro">
          {lang === 'sv' 
            ? 'Välkommen att kontakta mig via e-post, telefon eller ansluta på professionella nätverk.' 
            : 'Welcome to get in touch with me via email, phone, or connect on professional networks.'}
        </p>

        {/* Contact Links Grid */}
        <div className="contact-grid">
          {/* Email */}
          <a href={`mailto:${email}`} className="contact-item">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <div className="contact-details">
              <span className="contact-label">{data.contactEmail}</span>
              <span className="contact-value">{email}</span>
            </div>
          </a>

          {/* Phone */}
          <a href={telLink} className="contact-item">
            <div className="contact-icon-box">
              <Phone size={22} />
            </div>
            <div className="contact-details">
              <span className="contact-label">{data.contactPhone}</span>
              <span className="contact-value">{rawPhone}</span>
            </div>
          </a>

          {/* Location */}
          <div className="contact-item no-link">
            <div className="contact-icon-box">
              <MapPin size={22} />
            </div>
            <div className="contact-details">
              <span className="contact-label">{data.contactLocation}</span>
              <span className="contact-value">Linköping, Sverige</span>
            </div>
          </div>
        </div>

        {/* Professional Networks Section */}
        <div className="networks-divider"></div>
        
        <h3 className="networks-title">
          {lang === 'sv' ? 'Professionella Nätverk' : 'Professional Networks'}
        </h3>
        
        <div className="networks-links">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="network-btn linkedin"
          >
            <LinkedInIcon size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="network-btn github"
          >
            <GitHubIcon size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <style>{`
        .contact-card {
          padding-bottom: 3.5rem;
        }

        .contact-intro {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.5rem;
          background-color: var(--highlight-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .contact-item:hover:not(.no-link) {
          border-color: var(--accent-gold);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--shadow-color);
        }

        .contact-item.no-link {
          cursor: default;
        }

        .contact-icon-box {
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          width: 50px;
          height: 50px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .contact-item:hover .contact-icon-box {
          border-color: var(--accent-gold);
          background-color: var(--accent-gold-muted);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .contact-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        .contact-value {
          font-size: 1.15rem;
          font-weight: 500;
          word-break: break-all;
        }

        .networks-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 3.5rem 0 2.5rem 0;
        }

        .networks-title {
          font-size: 1.4rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          text-align: center;
          color: var(--text-primary);
        }

        .networks-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .network-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border: 1px solid var(--border-color);
          background-color: var(--card-bg);
          color: var(--text-primary);
          padding: 0.7rem 1.8rem;
          border-radius: 4px;
          font-size: 1.05rem;
          transition: all 0.3s ease;
        }

        .network-btn:hover {
          color: var(--accent-gold) !important;
          border-color: var(--accent-gold);
          background-color: var(--highlight-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--shadow-color);
        }

        @media (max-width: 600px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .networks-links {
            flex-direction: column;
            align-items: stretch;
          }
          .network-btn {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
export default Contact;
