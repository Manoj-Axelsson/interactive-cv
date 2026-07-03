import React from 'react';
import type { CVData } from '../types/cv';

interface BehindTheCodeProps {
  data: CVData;
  lang: 'sv' | 'en';
}

export const BehindTheCode: React.FC<BehindTheCodeProps> = ({ lang }) => {
  const sections = lang === 'sv' ? [
    {
      title: 'Himalayas & polartraktens under',
      icon: '🏔️',
      image: '/images/polar_himalaya.png',
      alt: 'En stämningsfull bild som visar snötäckt vildmark i svenska Norrland under ett svagt norrsken som möter avlägsna bergstoppar i skymningen.',
      text: 'Naturen har alltid varit min fasta punkt. Under åren i Indien guidade jag internationella grupper genom Nepal och upp till de för-himalayiska bergen på 3500–4500 meters höjd. När jag senare bodde i Norrland (2019–2022) fann jag samma storslagna ro i att vandra genom arktiska landskap under öppna skyar. Att vistas i orörd vildmark ger mig ett djupgående lugn och ny energi.'
    },
    {
      title: 'Kultur, värdskap & rötter',
      icon: '🕌',
      image: '/images/strategy_chess.png', // Wait, let's use the strategy chess or generate a new one, but let's check. Wait, for culture and roots we can use a nice scenic illustration or let's use the generated strategy chess / or let's map them nicely:
      // Actually, we generated:
      // 1. polar_himalaya.png
      // 2. gamejam_code.png
      // 3. loyal_companions.png
      // 4. strategy_chess.png
      // So:
      // - Himalayan & Norrland Nature -> polar_himalaya.png
      // - Culture & Roots -> strategy_chess.png (Wait, chess is strategy, what about culture? Let's use strategy_chess.png for chess, and we can generate/use a nice layout. Or let's use strategy_chess.png for Strategy & Downtime, and for Culture we can just show a nice background pattern or let's use one of the images. Let's map:
      // Card 1 (Nature): polar_himalaya.png
      // Card 2 (Culture & Roots): strategy_chess.png (Wait, chess set is a classic premium visual, it fits well, but let's keep it. Or we can use a placeholder, or we can use the chess set for card 4, and for Card 2 we can use another nice visual. Let's make Card 2 use strategy_chess.png or let's display it nicely).
      alt: 'Närbild på ett polerat schackbräde av trä med schackpjäser uppställda under mjuk belysning.',
      text: 'Min yrkesbana började med en examen från prestigefyllda IHM Bombay, vilket la grunden för mitt fokus på servicekänsla. Jag har drivit turistverksamheter och lett resenärer från Europa, Amerika och Oceanien genom UNESCO-listade kulturarv. Mitt ursprung har jag i Kerala – det tropiska paradiset i södra Indien som kallas "God\'s Own Country". Detta rika arv av värdskap bär jag alltid med mig.'
    },
    {
      title: 'LiTHe Kode & GameJAM',
      icon: '🎮',
      image: '/images/gamejam_code.png',
      alt: 'Närbild på en bärbar dator som visar kodrader i en mörk miljö med suddiga färgglada ljus i bakgrunden.',
      text: 'I Linköping har jag hittat en ny kreativ gemenskap. Sedan förra vintern är jag en aktiv del av arrangörsteamet för GameJAM tillsammans med studentföreningen LiTHe Kode. Att skapa forum där briljanta utvecklare kan mötas och andas kod dygnet runt är oerhört inspirerande och ger mig stor skaparglädje.'
    },
    {
      title: 'Trogna vänner & schack',
      icon: '🐾',
      image: '/images/loyal_companions.png',
      alt: 'Ett stämningsfullt fotografi från en balkong där en fluffig orange-maskad Ragdoll, en långhårig svart katt och en orange Orientalisk katt vilar på ett klösträd, och två små hundar ligger på en soffa.',
      text: 'Hemma fylls vardagen av värme tack vare mina hundar Troy och Tiny, och katterna Gotti, Lyckan och Camilo som bjuder på bus och sällskap. För att hålla sinnet skarpt spelar jag gärna schack med vänner eller online på mobilen, och kopplar av med en bra film, dokumentärer eller fotboll.'
    }
  ] : [
    {
      title: 'Himalayan & Polar Wonders',
      icon: '🏔️',
      image: '/images/polar_himalaya.png',
      alt: 'An atmospheric image displaying snow-covered Swedish Norrland wilderness under a green northern lights sky, merging with distant mountain peaks at twilight.',
      text: 'Nature has always been my sanctuary. In India, I trekked across the subcontinent to Nepal and guided international groups through the Pre-Himalayan ranges at elevations of 3500–4500 meters. Later, during my time living in Norrland (2019–2022), I found that same profound peace trekking under open skies and through the vast arctic wilderness. Being in untouched nature brings me deep tranquility.'
    },
    {
      title: 'Culture, Hospitality & Roots',
      icon: '🕌',
      image: '/images/strategy_chess.png',
      alt: 'Close-up of a polished wooden chessboard with chess pieces set up under warm, soft lighting.',
      text: 'With a foundation from the renowned IHM Bombay, the art of service is second nature to me. For years, I operated professional hospitality services and escorted tour groups from Europe, the Americas, and Oceania through ancient UNESCO World Heritage sites. My roots lie in Kerala—southern India\'s tropical paradise known as "God\'s Own Country." This lifelong heritage of warmth and hospitality guides everything I build.'
    },
    {
      title: 'LiTHe Kode & GameJAM',
      icon: '🎮',
      image: '/images/gamejam_code.png',
      alt: 'Close-up of a laptop screen showing lines of code in a dark environment with blurred colorful background lights.',
      text: 'In Linköping, I have embraced a new creative community. Since last winter, I have served as an organizer for the GameJAM hackathons arranged by the student association LiTHe Kode. Helping create a space where brilliant creators can collaborate and breathe code 24/7 is a wonderful source of inspiration.'
    },
    {
      title: 'Companions & Strategy',
      icon: '🐾',
      image: '/images/loyal_companions.png',
      alt: 'An atmospheric photograph of a sunny balcony with a fluffy orange-pointed Ragdoll, a long-haired black cat, and an orange Oriental cat resting on a cat tree, alongside two small dogs lounging on an outdoor couch.',
      text: 'My home life is grounded by my loyal dogs, Troy and Tiny, and my three playful cats, Gotti, Lyckan, and Camilo. To keep my analytical mind sharp, I enjoy playing chess—either over a board with friends or online on my phone. I relax by watching football matches, deep documentaries, and films.'
    }
  ];

  return (
    <div className="behind-the-code-page fade-in" id="behind-the-code-panel" role="tabpanel" aria-labelledby="tab-behind-the-code">
      <h2 className="section-title">{lang === 'sv' ? 'Bakom koden' : 'Behind the Code'}</h2>
      
      <p className="section-description">
        {lang === 'sv'
          ? 'Mitt liv handlar om mer än bara programmeringsspråk och systemanalys. Det formas av en djup nyfikenhet på världen, kärlek till vildmarken och glädjen i att skapa och umgås.'
          : 'My life is shaped by a curiosity about the world, a deep reverence for nature, and a passion for human connection. Outside of development, these are the experiences, values, and companions that bring me balance.'}
      </p>

      <div className="personal-dossier-grid">
        {sections.map((section, idx) => (
          <section key={idx} className="card personal-dossier-card" aria-labelledby={`personal-card-title-${idx}`}>
            <figure className="personal-card-figure">
              <img 
                src={section.image} 
                alt={section.alt} 
                className="personal-card-img" 
                loading="lazy"
                width="100%"
                height="auto"
              />
            </figure>
            <div className="personal-card-body">
              <div className="personal-card-header">
                <span className="personal-card-icon" aria-hidden="true">{section.icon}</span>
                <h3 className="personal-card-title" id={`personal-card-title-${idx}`}>{section.title}</h3>
              </div>
              <p className="personal-card-text">{section.text}</p>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .behind-the-code-page {
          width: 100%;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          text-align: left;
        }

        @media (min-width: 768px) {
          .section-description {
            font-size: 1.2rem;
            margin-bottom: 3rem;
          }
        }

        .personal-dossier-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .personal-dossier-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        .personal-dossier-card {
          display: flex;
          flex-direction: column;
          padding: 0 !important; /* Reset padding to let image be flush */
          overflow: hidden;
          background-color: var(--card-bg);
          border: 1.5px solid var(--accent-gold);
          box-shadow: 0 4px 15px var(--shadow-color);
          border-radius: 4px;
        }

        .personal-card-figure {
          margin: 0;
          padding: 0;
          width: 100%;
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
          background-color: var(--highlight-color);
          aspect-ratio: 16 / 9;
        }

        .personal-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .personal-dossier-card:hover .personal-card-img {
          transform: scale(1.02);
        }

        .personal-card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex-grow: 1;
        }

        @media (min-width: 768px) {
          .personal-card-body {
            padding: 1.5rem;
          }
        }

        .personal-card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          border-bottom: 1px dashed var(--border-color);
          padding-bottom: 0.5rem;
        }

        .personal-card-icon {
          font-size: 1.3rem;
        }

        .personal-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
        }

        @media (min-width: 768px) {
          .personal-card-title {
            font-size: 1.2rem;
          }
        }

        .personal-card-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
          text-align: justify;
        }

        @media (min-width: 768px) {
          .personal-card-text {
            font-size: 1.05rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </div>
  );
};

export default BehindTheCode;
