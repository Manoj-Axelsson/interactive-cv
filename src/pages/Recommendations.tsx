import React, { useState } from 'react';
import type { CVData, RecommendationItem } from '../types/cv';
import { MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface RecommendationsProps {
  data: CVData;
  lang: 'sv' | 'en';
}

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const RELATION_OPTIONS = {
  sv: [
    { value: "Co-worker (Sweden)", label: "Medarbetare (Sverige)", country: "Sverige" },
    { value: "Former Manager (Sweden)", label: "Tidigare chef (Sverige)", country: "Sverige" },
    { value: "Business Associate (India)", label: "Affärspartner (Indien)", country: "Indien" },
    { value: "Client (India)", label: "Kund (Indien)", country: "Indien" },
    { value: "Business Associate (Sweden)", label: "Affärspartner (Sverige)", country: "Sverige" },
    { value: "Client (Sweden)", label: "Kund (Sverige)", country: "Sverige" },
    { value: "Friend", label: "Vän", country: "" },
    { value: "Other", label: "Annat...", country: "" }
  ],
  en: [
    { value: "Co-worker (Sweden)", label: "Co-worker (Sweden)", country: "Sweden" },
    { value: "Former Manager (Sweden)", label: "Former Manager (Sweden)", country: "Sweden" },
    { value: "Business Associate (India)", label: "Business Associate (India)", country: "India" },
    { value: "Client (India)", label: "Client (India)", country: "India" },
    { value: "Business Associate (Sweden)", label: "Business Associate (Sweden)", country: "Sweden" },
    { value: "Client (Sweden)", label: "Client (Sweden)", country: "Sweden" },
    { value: "Friend", label: "Friend", country: "" },
    { value: "Other", label: "Other...", country: "" }
  ]
};

// Sub-component for individual testimonial cards to handle native translation toggles
const TestimonialCard: React.FC<{ item: RecommendationItem; lang: 'sv' | 'en' }> = ({ item, lang }) => {
  const [showOriginal, setShowOriginal] = useState(false);

  const displayText = showOriginal && item.originalText ? item.originalText : item.text;
  const hasOriginal = !!item.originalText && !!item.nativeLanguage;

  return (
    <div className="card testimonial-card">
      <blockquote className="testimonial-text">
        ”{displayText}”
      </blockquote>
      
      {hasOriginal && (
        <button 
          className="toggle-translation-btn" 
          onClick={() => setShowOriginal(!showOriginal)}
        >
          {showOriginal 
            ? (lang === 'sv' ? 'Visa översättning' : 'Show translation')
            : (lang === 'sv' ? `Visa original (${item.nativeLanguage})` : `Show original (${item.nativeLanguage})`)}
        </button>
      )}
      
      <div className="testimonial-author">
        <div className="author-info">
          <strong className="author-name">{item.name}</strong>
          <span className="author-role-relation">
            {item.role} <span className="relation-text">({item.relation})</span>
          </span>
          <span className="author-country">{item.country}</span>
        </div>
        
        {item.isLinkedInVerified && (
          <a 
            href={item.linkedinUrl || "https://www.linkedin.com/in/manoj-john-axelsson/"}
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-verified-badge"
            title={lang === 'sv' ? 'Verifierad via LinkedIn' : 'Verified via LinkedIn'}
          >
            <LinkedInIcon size={12} />
            <span>LinkedIn Verified</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const Recommendations: React.FC<RecommendationsProps> = ({ data, lang }) => {
  // Web3Forms Access Key: Read from Vite environment variable or use placeholder
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    relationSelect: '',
    relationCustom: '',
    country: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'relationSelect') {
      // Find selected option to autofill country
      const options = RELATION_OPTIONS[lang];
      const selectedOption = options.find(opt => opt.value === value);
      
      setFormData(prev => ({
        ...prev,
        relationSelect: value,
        // Autofill country if option has one, otherwise keep current country
        country: selectedOption && selectedOption.country ? selectedOption.country : prev.country
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus('error');
      setErrorMessage(
        lang === 'sv' 
          ? 'Formuläret är inte konfigurerat ännu. Ange din Web3Forms Access Key i koden eller i en miljövariabel.' 
          : 'Form is not configured yet. Please provide your Web3Forms Access Key in the code or environment variables.'
      );
      return;
    }

    setStatus('submitting');

    // Determine final relation text to send
    const relationText = formData.relationSelect === 'Other' 
      ? formData.relationCustom 
      : RELATION_OPTIONS[lang].find(opt => opt.value === formData.relationSelect)?.label || formData.relationSelect;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Portfolio Recommendation from ${formData.name}`,
          from_name: "Portfolio Recommendation Form",
          name: formData.name,
          role: formData.role,
          relation: relationText,
          country: formData.country,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', role: '', relationSelect: '', relationCustom: '', country: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(
        lang === 'sv' 
          ? 'Ett nätverksfel uppstod. Kontrollera din anslutning och försök igen.' 
          : 'A network error occurred. Please check your connection and try again.'
      );
    }
  };

  return (
    <div className="recommendations-page fade-in">
      {/* Title */}
      <h2 className="section-title">{data.recommendationsTitle}</h2>

      {/* Grid of testimonials */}
      <div className="recommendations-grid">
        {data.recommendations && data.recommendations.map((item, idx) => (
          <TestimonialCard key={idx} item={item} lang={lang} />
        ))}
      </div>

      {/* Submission Form Section */}
      <section className="card submission-section">
        <h3 className="section-subtitle">
          <MessageSquare size={20} className="subtitle-icon" />
          {lang === 'sv' ? 'Lämna en rekommendation' : 'Leave a Recommendation'}
        </h3>
        
        <p className="form-description">
          {lang === 'sv' 
            ? 'Om du har arbetat tillsammans med mig och vill lämna en rekommendation eller referens, fyll gärna i formuläret nedan. Din rekommendation skickas till mig för granskning innan den publiceras på hemsidan.' 
            : 'If you have worked with me and would like to leave a recommendation or reference, please fill out the form below. Your submission will be sent directly to me for review before being published.'}
        </p>

        {status === 'success' ? (
          <div className="form-feedback success-box">
            <CheckCircle2 size={44} className="feedback-icon" />
            <h4>{lang === 'sv' ? 'Tack för din rekommendation!' : 'Thank you for your recommendation!'}</h4>
            <p>
              {lang === 'sv' 
                ? 'Din rekommendation har skickats till min e-post. Jag kommer att granska den inom kort.' 
                : 'Your submission has been sent to my email. I will review and add it shortly.'}
            </p>
            <button className="btn-primary" onClick={() => setStatus('idle')}>
              {lang === 'sv' ? 'Skriv en till' : 'Write another one'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="recommendation-form">
            {status === 'error' && (
              <div className="form-feedback error-box">
                <AlertCircle size={20} className="feedback-icon-small" />
                <p>{errorMessage}</p>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{lang === 'sv' ? 'Ditt Namn' : 'Your Name'}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder={lang === 'sv' ? 't.ex. Jan Johansson' : 'e.g. John Doe'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">{lang === 'sv' ? 'Din Yrkesroll / Titel' : 'Your Job Title / Role'}</label>
                <input 
                  type="text" 
                  id="role" 
                  name="role" 
                  value={formData.role} 
                  onChange={handleChange} 
                  required 
                  placeholder={lang === 'sv' ? 't.ex. Produktionsledare' : 'e.g. Team Lead'}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="relationSelect">{lang === 'sv' ? 'Relation / Samarbete' : 'Relationship'}</label>
                <select 
                  id="relationSelect" 
                  name="relationSelect" 
                  value={formData.relationSelect} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled>
                    {lang === 'sv' ? 'Välj relation...' : 'Select relationship...'}
                  </option>
                  {RELATION_OPTIONS[lang].map((opt, i) => (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="country">{lang === 'sv' ? 'Land' : 'Country'}</label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  value={formData.country} 
                  onChange={handleChange} 
                  required 
                  placeholder={lang === 'sv' ? 't.ex. Sverige' : 'e.g. Sweden'}
                />
              </div>
            </div>

            {formData.relationSelect === 'Other' && (
              <div className="form-group fade-in">
                <label htmlFor="relationCustom">
                  {lang === 'sv' ? 'Specificera Relation' : 'Specify Relationship'}
                </label>
                <input 
                  type="text" 
                  id="relationCustom" 
                  name="relationCustom" 
                  value={formData.relationCustom} 
                  onChange={handleChange} 
                  required 
                  placeholder={lang === 'sv' ? 't.ex. Arbetade i samma projekt' : 'e.g. Managed you in a project'}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="message">{lang === 'sv' ? 'Din rekommendation' : 'Your Recommendation'}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={5}
                placeholder={lang === 'sv' ? 'Skriv din text här...' : 'Write your text here...'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-primary submit-btn" 
              disabled={status === 'submitting'}
            >
              <Send size={16} />
              <span>{status === 'submitting' ? (lang === 'sv' ? 'Skickar...' : 'Sending...') : (lang === 'sv' ? 'Skicka rekommendation' : 'Submit Recommendation')}</span>
            </button>
          </form>
        )}
      </section>

      <style>{`
        .recommendations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .recommendations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          background-color: var(--card-bg);
          border: 1.5px solid var(--accent-gold);
          box-shadow: 0 4px 15px var(--shadow-color);
        }

        .testimonial-text {
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
          text-align: justify;
        }

        .toggle-translation-btn {
          background: none;
          border: none;
          color: var(--accent-gold);
          font-family: var(--font-family);
          font-size: 0.9rem;
          font-style: italic;
          cursor: pointer;
          padding: 0;
          margin-bottom: 1.25rem;
          text-align: left;
          width: fit-content;
          text-decoration: underline dashed rgba(197, 168, 128, 0.4);
          transition: color 0.3s ease;
        }

        .toggle-translation-btn:hover {
          color: var(--accent-gold-hover);
          text-decoration: underline;
        }

        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .author-name {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .author-role-relation {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .relation-text {
          font-style: italic;
          font-size: 0.85rem;
          color: var(--text-secondary);
          opacity: 0.85;
        }

        .author-country {
          font-size: 0.85rem;
          color: var(--accent-gold);
          font-style: italic;
        }

        .linkedin-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          background-color: var(--accent-gold-muted);
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          transition: all 0.3s ease;
        }

        .linkedin-verified-badge:hover {
          background-color: var(--accent-gold);
          color: var(--bg-color) !important;
        }

        .submission-section {
          padding: 2rem;
          background-color: var(--card-bg);
          border: 1.5px solid var(--accent-gold);
        }

        .section-subtitle {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subtitle-icon {
          color: var(--accent-gold);
        }

        .form-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .recommendation-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 600px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background-color: var(--highlight-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.65rem 0.85rem;
          font-family: var(--font-family);
          font-size: 1.05rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          width: 100%;
        }

        .form-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c5a880' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.85rem center;
          background-size: 1rem;
          padding-right: 2.5rem;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-gold);
          box-shadow: 0 0 8px var(--accent-gold-muted);
        }

        .submit-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 42px;
          cursor: pointer;
        }
        
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-feedback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2.5rem 1.5rem;
          border-radius: 4px;
          gap: 1rem;
        }

        .success-box {
          background-color: rgba(39, 174, 96, 0.08);
          border: 1px dashed #27ae60;
        }

        .success-box h4 {
          color: #27ae60;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .success-box p {
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 0.5rem;
        }

        .feedback-icon {
          color: #27ae60;
        }

        .error-box {
          background-color: rgba(192, 57, 43, 0.08);
          border: 1px solid #c0392b;
          color: #e74c3c;
          padding: 1rem;
          align-items: flex-start;
          flex-direction: row;
          text-align: left;
          gap: 0.6rem;
        }

        .feedback-icon-small {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
      `}</style>
    </div>
  );
};

export default Recommendations;
