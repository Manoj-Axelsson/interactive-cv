import type { CVData } from '../types/cv';

export const cvData: { sv: CVData; en: CVData } = {
  sv: {
    title: "Manoj John Axelsson",
    tagline: "",
    heroTitle: "Utvecklar Bättre System",
    heroSubtitle: "Produktionsteknik • Lean • Six Sigma • Modern Programvaruutveckling",
    profile: "Jag hjälper organisationer att förbättra processer, minska komplexitet och bygga hållbara system genom att kombinera produktionsteknik, Lean-metodik, Six Sigma-problemlösning och medveten programvaruutveckling.\n\nGenom min bakgrund inom både industriell produktion och modern systemutveckling fokuserar jag på hur system hänger ihop. Det handlar inte om att titta på källkoden som ett isolerat konstverk, utan som en del av en större maskin – där kartläggning, rotorsaksanalys och ständiga förbättringar skapar verkligt värde.",
    coreCompetenciesTitle: "Kärnkompetenser",
    coreCompetencies: [
      "Fullstack-systemutveckling (React, Node.js, TypeScript)",
      "Datadriven processförbättring, Lean och Six Sigma (DMAIC)",
      "Statistisk dataanalys & affärsanalys (Excel, Minitab)",
      "Processkartläggning & digitalisering (Industri 4.0)",
      "Strategisk gästservice, CRM & kundrelationer",
      "Operativt ledarskap & Change Management",
      "Kvalitetssäkring, standardisering & rotorsaksanalys",
      "Systemarkitektur & modern versionshantering (Git)"
    ],
    experienceTitle: "Yrkeserfarenhet",
    workExperience: [
      {
        role: "Produktionstekniker / CNC-tekniker",
        company: "Svensk Tillverkningsindustri (Bemannings- & Rekryteringsföretag)",
        period: "2017 – 2025",
        points: [
          "Flera uppdrag inom svensk tillverkningsindustri med fokus på precision och driftsäkerhet.",
          "Arbetat aktivt med kvalitetssäkring, teknisk dokumentation och uppföljning enligt etablerade processer.",
          "Samverkat nära med operatörer, tekniker, produktion och ledning för att säkerställa högsta kvalitet och produktionseffektivitet.",
          "Van att arbeta strukturerat i krävande miljöer med höga krav på noggrannhet, personligt ansvar och professionellt samarbete."
        ],
        documentUrl: "/Project_directive(mini).pdf"
      }
    ],
    leadershipTitle: "Ledarskaps- och Kunderfarenhet",
    leadershipPeriod: "1998 – 2008",
    leadershipDescription: "Innan min flytt till Sverige 2008 drev jag ett eget företag inom hotell- och turistnäringen i Indien med cirka 30 anställda. I rollen ansvarade jag för kundkontakter, personalledning, planering och utveckling av verksamheten. Erfarenheten gav mig värdefulla kunskaper i kommunikation, service, relationsbyggande och att möta människor med olika bakgrund och behov.",
    otherCompetenciesTitle: "Övriga Kompetenser",
    otherCompetencies: [
      "Datadrivet förbättringsarbete",
      "Lean- och Six Sigma-metodik",
      "Processanalys och kartläggning",
      "Kvalitetssäkring",
      "Dokumentation och uppföljning",
      "Grundorsaksanalys",
      "Statistik och faktabaserat beslutsstöd"
    ],
    educationTitle: "Utbildning",
    education: [
      {
        title: "Systemutvecklare Fullstack",
        provider: "Lexicon AB – Linköping (Node.js, React, TypeScript)",
        period: "2025 – 2026",
        details: "Slutfört ett intensivt fullstack-program i modern webbutveckling (TypeScript, Next.js, Tailwind CSS, PostgreSQL) för att gå från att enbart analysera och förbättra processer till att också kunna utveckla de system och verktyg som stödjer dem.\nFörvärvat kompetens att tillämpa arkitekturprinciper (bl.a. Bulletproof React) med fokus på separation of concerns, testbarhet och långsiktig underhållbarhet.\nArbetat projektbaserat med Git för versionshantering och dokumentation (tydliga commit-meddelanden, branches och pull requests för spårbarhet och samarbete).",
        documentUrl: "/documents/lexicon-systemutveckling.pdf"
      },
      {
        title: "Six Sigma Green Belt Certification",
        provider: "KPMG",
        period: "2024",
        details: "Professionellt certifieringsprogram fokuserat på datadriven processförbättring, rotorsaksanalys och statistisk kvalitetssäkring:\nProaktiv riskminimering och felprevention med FMEA (feleffektsanalys).\nDMAIC-projektmetodik: Driva avgränsade förbättringsprojekt under 6–12 veckor för COPQ-besparingar.\nStatistisk dataanalys (Analyze): Processduglighet, mätsystemanalys (MSA), hypotestester (t-test, chi-två) och regression i Minitab/Excel.\nDiagnostiska diagram & visualisering: Rotorsaksanalys med Pareto-diagram, fiskbensdiagram (Ishikawa) och 5 Varför.\nProcessstyrning (Control): Standardiserat arbetssätt, felsäkring (poka-yoke) samt statistisk processstyrning med styrdiagram (SPC/Shewhart) och styrplaner.",
        documentUrl: "/documents/kpmg-six-sigma.pdf"
      },
      {
        title: "Produktionsutvecklare Industri 4.0",
        provider: "Yrkeshögskoleutbildning (Examensbevis)",
        period: "2022 – 2023",
        details: "Yrkeshögskoleexamen inom:\nLean production\nDigitaliserad produktion\nIndustriell automation\nProduktionsplanering\nDatadrivet förbättringsarbete\nSmarta fabriker\nKvalitetsstyrning\nStändiga förbättringar",
        documentUrl: "/documents/industri 4-0.pdf"
      },
      {
        title: "Grönt Certifikat för CNC-körning",
        provider: "Skärteknikcentrum Sverige",
        period: "2017",
        details: "Nationell yrkeslicens och kompetensvalidering för standardiserad CNC-bearbetning och industriell produktionsteknik:\nKvalitetssäkrad validering: rikstäckande kompetensprov underställt Skärteknikcentrum Sverige, i nära samarbete med svensk industri.\nKärnkompetens inom CNC: CNC-teknik & programmering, ritningsläsning, toleranser, skärteknik, mätteknik och maskindrift.\nDrift & säkerhetsstandarder: automation, produktionsövervakning, avvikelsehantering, underhåll samt hälsa, miljö och säkerhet (HMS).\nStödjande kunskaper: tillämpad produktionsmatematik, materiallära samt tvåspråkig yrkeskommunikation (svenska och engelska).",
        documentUrl: "/documents/cnc-gront-certifikat.pdf"
      },
      {
        title: "CNC-tekniker med CAD/CAM",
        provider: "Yrkesutbildning",
        period: "2017 – 2018",
        details: "Kvalificerad yrkeshögskoleutbildning med inriktning mot avancerad tillverkning, CAD/CAM-programmering och produktionsteknik:\nAvancerad CAD & CAM: 3D-konstruktion och beredning för datorstödd tillverkning (Advanced CAD/CAM).\nAvancerad CNC-programmering: programmering, riggning och drift av komplexa CNC-maskiner för precisionsdetaljer.\nProduktion & kvalitetssystem: praktisk tillämpning av produktionsekonomi, kvalitetssäkring och ständiga förbättringar.\nYrkesroller & kompetens: kvalificerad för självständigt arbete som CNC-tekniker, CAM-beredare, produktionsplanerare eller produktionstekniker.\nLIA (Lärande i arbete): praktisk erfarenhet och projektarbete utfört direkt i skarp industriell produktionsmiljö.",
        documentUrl: "/documents/cnc-tekniker.pdf"
      },
      {
        title: "Diploma in Hotel Management, Catering Technology & Applied Nutrition [IHMCTAN]",
        provider: "IHM, Dadar - Mumbai",
        period: "1993 – 1996",
        details: "Treårigt diplomprogram med fokus på verksamhetsledande roller, strategisk kundservice och mellanmänsklig kommunikation enligt standarder för exklusiva turistmarknader och hotellverksamheter:\nStrategisk gästservice (Guest Relations): aktivt lyssnande, konfliktlösning, kulturell förståelse och att förutse/möta gästers individuella behov.\nKommunikation och samarbete: samordning av team, utbildning av personal, professionell leverantörskontakt och avdelningsöverskridande samarbete.\nAnalytisk drift och kvalitetssäkring: kostnadsanalys, lagerstyrning, datadrivna servicemodifieringar och upprätthållande av hög kvalitetsstandard.\nChange Management och ledarskap: anpassning av servicemodeller efter marknadsförändringar, personalledning av mångkulturella team och operativ problemlösning.\nF&B-standarder & produktion: livsmedelshygien (HACCP), köksadministration och standardiserade serveringsprocedurer.",
        documentUrl: "/documents/hotel-management.pdf"
      },
      {
        title: "Bachelor of Arts (Ekonomi)",
        provider: "Kerala University",
        period: "1987 – 1992",
        details: "Akademisk utbildning inom ekonomi, validerad av UHR motsvarande svensk högskoleexamen, inriktad på mikroekonomisk teori (marknadsmekanismer, prissättning) och makroekonomisk teori (ekonomisk tillväxt, finanspolitik) för att utveckla kärnkompetenser:\nInformationsanalys & källkritik: insamling, utvärdering och kritisk tolkning av komplex ekonomisk data och samhällsinformation.\nStrukturerad problemlösning: självständigt identifiera, formulera och lösa ekonomiska frågeställningar inom givna tidsramar.\nFaktabaserad kommunikation: presentera och diskutera ekonomiska teorier, trender och analytiska lösningar i tal och skrift.\nKritiskt och etiskt förhållningssätt: göra bedömningar underbyggda av vetenskapliga, samhälleliga och etiska aspekter.",
        documentUrl: "/documents/kerala-university.pdf"
      }
    ],
    languagesTitle: "Språk",
    languages: [
      { name: "Svenska", level: "Flytande i tal och skrift" },
      { name: "Engelska", level: "Flytande i tal och skrift" },
      { name: "Malayalam", level: "Modersmål" }
    ],
    referencesTitle: "Referenser",
    references: "Referenser lämnas gärna på begäran.",
    recommendationsTitle: "Rekommendationer",
    recommendations: [
      {
        name: "Isac Lindh",
        role: "Developer | UX designer",
        relation: "Studerade tillsammans",
        country: "Sverige",
        text: "Manoj är en trevlig glädjespridare, som är dedikerad till sitt arbete samt ser till att alla känner sig inkluderade 🌼",
        date: "2026",
        isLinkedInVerified: true,
        linkedinUrl: "https://www.linkedin.com/in/manoj-axelsson/details/recommendations/"
      },
      {
        name: "Pernilla Johansson",
        role: "Produktionstekniker/teamleader",
        relation: "Medarbetare - Part AB, Kalix",
        country: "Sverige",
        text: "Manoj är en mycket trevlig och engagerad kollega med en positiv inställning. Han har lätt för att skapa goda relationer och bidrar till en god stämning i arbetsgruppen genom sitt hjälpsamma och sociala sätt. Han är dessutom uthållig i sitt arbete och ger inte upp när han ställs inför utmaningar, utan arbetar metodiskt tills problemen är lösta.",
        date: "2026",
        isLinkedInVerified: false
      },
      {
        name: "Mickey Bosco",
        role: "Hotell- & restaurangägare",
        relation: "Kund (Indien)",
        country: "USA",
        text: "Jag hade nöjet att vara kund hos Manoj, och jag kan med säkerhet säga att han är en av de sällsynta yrkesverksamma som lämnar ett bestående intryck. Hans genuina leende, positiva energi och välkomnande attityd gör varje interaktion trevlig, men det som verkligen utmärker honom är hans anmärkningsvärda intelligens och förmåga att förstå exakt vad människor behöver.\n\nManoj kombinerar professionalism med autenticitet, vilket skapar en upplevelse som känns både enkel och personlig. Han gör ständigt det lilla extra, och hans passion för excellens är tydlig i allt han gör. Jag rekommenderar starkt Manoj till alla som letar efter någon som är kunnig, pålitlig och ett absolut nöje att arbeta med.",
        originalText: "I had the pleasure of being a customer of Manoj, and I can confidently say he is one of those rare professionals who leaves a lasting impression. His genuine smile, positive energy, and welcoming attitude make every interaction enjoyable, but what truly sets him apart is his remarkable intelligence and ability to understand exactly what people need.\n\nManoj combines professionalism with authenticity, creating an experience that feels both effortless and personal. He consistently goes above and beyond, and his passion for excellence is evident in everything he does. I highly recommend Manoj to anyone looking for someone who is knowledgeable, trustworthy, and an absolute pleasure to work with.",
        nativeLanguage: "en",
        date: "2026",
        isLinkedInVerified: false
      },
      {
        name: "Lars-Erik Lindström",
        role: "Säljare av IT-managementtjänster, mjukvaror",
        relation: "Lärare - Yrkeshögskolan",
        country: "Sverige",
        text: "Jag var en av Manojs lärare på Yrkeshögskolan. Han är en flitig problemlösare som anstränger sig för att göra goda resultat. Om jag behövde en sådan skulle jag anställa honom.",
        date: "2026",
        isLinkedInVerified: true,
        linkedinUrl: "https://www.linkedin.com/in/manoj-axelsson/details/recommendations/"
      }
    ],
    contactTitle: "Kontaktuppgifter",
    contactEmail: "E-post",
    contactPhone: "Telefon",
    contactLocation: "Ort",
    contactNationality: "Medborgarskap",
    contactNationalityValue: "Svensk (Svensk medborgare)",
    pdfDownloadText: "↓ CV",
    tabs: {
      about: "Om Mig",
      experience: "Erfarenhet",
      recommendations: "Referenser",
      contact: "Kontakt"
    }
  },
  en: {
    title: "Manoj John Axelsson",
    tagline: "",
    heroTitle: "Engineering Better Systems",
    heroSubtitle: "Production Engineering • Lean • Six Sigma • Modern Software Development",
    profile: "I help organizations improve processes, reduce complexity and build sustainable systems by combining production engineering, Lean methodology, Six Sigma problem-solving and modern software development.\n\nBy combining my background in both industrial manufacturing and software architecture, I focus on how components interact. It is not about looking at code in isolation, but seeing it as part of a larger production machine – where documentation, root cause analysis, and continuous improvement are the primary drivers of real-world value.",
    coreCompetenciesTitle: "Core Competencies",
    coreCompetencies: [
      "Fullstack Software Development (React, Node.js, TypeScript)",
      "Data-Driven Process Improvement, Lean and Six Sigma (DMAIC)",
      "Statistical Data Analysis & Business Intelligence (Excel, Minitab)",
      "Process Mapping & Digitalization (Industry 4.0)",
      "Strategic Guest Relations, CRM & Client Care",
      "Operational Leadership & Change Management",
      "Quality Assurance, Standardization & Root Cause Analysis",
      "System Architecture & Modern Version Control (Git)"
    ],
    experienceTitle: "Professional Experience",
    workExperience: [
      {
        role: "Production Engineer / CNC Technician",
        company: "Swedish Manufacturing Industry (via Staffing & Recruitment Agencies)",
        period: "2017 – 2025",
        points: [
          "Completed multiple assignments in the Swedish manufacturing sector, focusing on precision and operational stability.",
          "Actively worked with quality assurance, technical documentation, and performance follow-up in accordance with established processes.",
          "Collaborated closely with operators, technicians, production planning, and management to ensure top quality and production efficiency.",
          "Accustomed to working in a structured manner in high-demand environments requiring precision, personal accountability, and professional teamwork."
        ],
        documentUrl: "/Project_directive(mini).pdf"
      }
    ],
    leadershipTitle: "Leadership & Customer Experience",
    leadershipPeriod: "1998 – 2008",
    leadershipDescription: "Before relocating to Sweden in 2008, I owned and operated a business in the hospitality and tourism sector in India, employing approximately 30 staff members. In this role, I was responsible for customer relations, personnel management, business planning, and operations development. This experience provided me with valuable skills in communication, customer service, relationship building, and engaging with individuals from diverse backgrounds and needs.",
    otherCompetenciesTitle: "Additional Expertise",
    otherCompetencies: [
      "Data-driven Improvement",
      "Lean and Six Sigma Methodology",
      "Process Analysis & Mapping",
      "Quality Assurance",
      "Documentation & Follow-up",
      "Root Cause Analysis",
      "Statistics & Fact-based Decision Support"
    ],
    educationTitle: "Education",
    education: [
      {
        title: "Fullstack Software Developer",
        provider: "Lexicon AB – Linköping (Node.js, React, TypeScript)",
        period: "2025 – 2026",
        details: "Completed an intensive Fullstack program in modern web development (TypeScript, Next.js, Tailwind CSS, PostgreSQL), bridging process analysis with the ability to build custom systems that support operations.\nAcquired competence in applying software architecture principles (e.g., Bulletproof React) focusing on separation of concerns, testability, and long-term maintainability.\nPracticed project-based development with Git for version control and documentation (clean commit history, branch management, and pull requests for collaboration).",
        documentUrl: "/documents/lexicon-systemutveckling.pdf"
      },
      {
        title: "Six Sigma Green Belt Certification",
        provider: "KPMG",
        period: "2024",
        details: "Professional certification program focused on data-driven process improvement, root-cause analysis, and statistical quality assurance:\nProactive risk mitigation and defect prevention via FMEA (Failure Mode and Effects Analysis).\nDMAIC Project Lifecycle: Executing scoped improvement projects (6–12 weeks) to deliver measurable COPQ savings.\nStatistical Data Analysis (Analyze): Process capability index, measurement system analysis (MSA), hypothesis testing (t-tests, chi-square), and regression in Minitab/Excel.\nDiagnostic Charts & Mapping: Root-cause troubleshooting via Pareto charts, fishbone (Ishikawa) diagrams, and 5 Whys.\nControl & Standardisation: Standard work development, mistake-proofing (poka-yoke), and statistical process control (SPC/Shewhart charts) with control plans.",
        documentUrl: "/documents/kpmg-six-sigma.pdf"
      },
      {
        title: "Production Development Engineering (Industry 4.0)",
        provider: "Higher Vocational Education (Diploma)",
        period: "2022 – 2023",
        details: "Higher Vocational Diploma in:\nLean Manufacturing\nDigital Manufacturing\nIndustrial Automation\nProduction Planning\nData-driven Process Improvement\nSmart Factory Technologies\nQuality Management\nContinuous Improvement",
        documentUrl: "/documents/industri 4-0.pdf"
      },
      {
        title: "Green Card Certification for CNC Operations",
        provider: "Skärteknikcentrum Sverige",
        period: "2017",
        details: "National professional certification and competency validation for standardized CNC machining and industrial production operations:\nStandardized Validation: quality-assured competency assessment managed by Skärteknikcentrum Sverige, in close cooperation with the Swedish manufacturing industry.\nCore CNC Competencies: CNC technology & programming, machine operations, drawing reading, tolerances, metrology, and cutting technology.\nOperational & Safety Standards: automation, production monitoring, preventive maintenance, quality assurance, and health, safety & environment (HSE).\nSupporting Knowledge: applied manufacturing mathematics, materials science, technical documentation, and bilingual communication (Swedish/English).",
        documentUrl: "/documents/cnc-gront-certifikat.pdf"
      },
      {
        title: "CNC Technician with CAD/CAM",
        provider: "Vocational Education",
        period: "2017 – 2018",
        details: "Comprehensive vocational program specializing in advanced manufacturing, CAD/CAM programming, and production engineering:\nAdvanced CAD & CAM: 3D computer-aided design and computerized manufacturing preparations (Advanced CAD/CAM systems).\nAdvanced CNC Programming: programming, setup, and operation of complex CNC machining centers for high-precision component production.\nProduction & Quality Systems: practical knowledge of production economics, quality management, and continuous improvement systems.\nProfessional Competencies: qualified to work independently as a CNC Technician, CAM Planner, Production Planner, or Production Engineer.\nIndustry Experience (LIA): applied practical training and project execution directly in a professional manufacturing environment.",
        documentUrl: "/documents/cnc-tekniker.pdf"
      },
      {
        title: "Diploma in Hotel Management, Catering Technology & Applied Nutrition [IHMCTAN]",
        provider: "IHM, Dadar - Mumbai",
        period: "1993 – 1996",
        details: "Three-year comprehensive program emphasizing operational leadership, strategic customer service, and interpersonal communication as followed in high-end tourism markets and hotel sector establishments:\nStrategic Guest Relations: active listening, conflict resolution, cultural awareness, and anticipating/foreseeing guest needs.\nCommunication & Collaboration: team coordination, staff training, professional vendor relations, and cross-departmental coordination.\nAnalytical Operations & Service Quality: cost analysis, inventory monitoring, data-backed service adjustments, and maintaining quality standards.\nChange Management & Leadership: adapting service models to changing market trends, leading diverse hospitality teams, and managing day-to-day outlet adjustments.\nF&B Standards & Production: food production safety, kitchen hygiene regulations (HACCP), and standard culinary service procedures.",
        documentUrl: "/documents/hotel-management.pdf"
      },
      {
        title: "Bachelor of Arts (Economics)",
        provider: "Kerala University",
        period: "1987 – 1992",
        details: "Academic program in economics, validated by UHR as equivalent to a Swedish Higher Education Diploma, specializing in microeconomic theory (market mechanisms, pricing systems) and macroeconomic theory (national growth, fiscal policy) to develop core competencies:\nInformation Analysis & Criticism: gathering, evaluating, and critically interpreting complex economic data and information.\nStructured Problem Solving: identifying, formulating, and solving economic problems independently within defined time frames.\nFact-Based Communication: presenting and discussing economic theories, trends, and analytical solutions clearly in speech and writing.\nEthical & Social Judgment: making assessments informed by relevant disciplinary, social, and ethical perspectives.",
        documentUrl: "/documents/kerala-university.pdf"
      }
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Swedish", level: "Fluent in speech and writing" },
      { name: "English", level: "Fluent in speech and writing" },
      { name: "Malayalam", level: "Native language" }
    ],
    referencesTitle: "References",
    references: "References will be provided on request.",
    recommendationsTitle: "Recommendations",
    recommendations: [
      {
        name: "Isac Lindh",
        role: "Developer | UX designer",
        relation: "Studied together",
        country: "Sweden",
        text: "Manoj is a pleasant person who spreads joy, is dedicated to his work, and makes sure everyone feels included 🌼",
        date: "2026",
        isLinkedInVerified: true,
        linkedinUrl: "https://www.linkedin.com/in/manoj-axelsson/details/recommendations/"
      },
      {
        name: "Pernilla Johansson",
        role: "Production Technician / Team Leader",
        relation: "Co-worker - Part AB, Kalix",
        country: "Sweden",
        text: "Manoj is a very pleasant and dedicated colleague with a positive attitude. He easily builds good relationships and contributes to a good atmosphere in the workgroup through his helpful and social nature. Furthermore, he is persistent in his work and does not give up when faced with challenges, but works methodically until the problems are solved.",
        date: "2026",
        isLinkedInVerified: false
      },
      {
        name: "Mickey Bosco",
        role: "Hospitality Group Owner",
        relation: "Client (India)",
        country: "United States",
        text: "I had the pleasure of being a customer of Manoj, and I can confidently say he is one of those rare professionals who leaves a lasting impression. His genuine smile, positive energy, and welcoming attitude make every interaction enjoyable, but what truly sets him apart is his remarkable intelligence and ability to understand exactly what people need.\n\nManoj combines professionalism with authenticity, creating an experience that feels both effortless and personal. He consistently goes above and beyond, and his passion for excellence is evident in everything he does. I highly recommend Manoj to anyone looking for someone who is knowledgeable, trustworthy, and an absolute pleasure to work with.",
        date: "2026",
        isLinkedInVerified: false
      },
      {
        name: "Lars-Erik Lindström",
        role: "IT Management & Software Sales Representative",
        relation: "Teacher - Higher Vocational Education",
        country: "Sweden",
        text: "I was one of Manoj's teachers at the Higher Vocational Education. He is a diligent problem solver who strives to achieve great results. If I needed such a person, I would hire him.",
        originalText: "Jag var en av Manojs lärare på Yrkeshögskolan. Han är en flitig problemlösare som anstränger sig för att göra goda resultat. Om jag behövde en sådan skulle jag anställa honom.",
        nativeLanguage: "sv",
        date: "2026",
        isLinkedInVerified: true,
        linkedinUrl: "https://www.linkedin.com/in/manoj-axelsson/details/recommendations/"
      }
    ],
    contactTitle: "Contact Information",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactNationality: "Nationality",
    contactNationalityValue: "Swedish (Swedish citizen)",
    pdfDownloadText: "↓ CV",
    tabs: {
      about: "About Me",
      experience: "Experience",
      recommendations: "Recommendations",
      contact: "Contact"
    }
  }
};
