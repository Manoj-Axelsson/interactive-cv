export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  documentUrl?: string;
}

export interface EducationItem {
  title: string;
  provider: string;
  period: string;
  details?: string;
  documentUrl?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CVData {
  title: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  profile: string;
  coreCompetenciesTitle: string;
  coreCompetencies: string[];
  experienceTitle: string;
  workExperience: WorkExperienceItem[];
  leadershipTitle: string;
  leadershipPeriod: string;
  leadershipDescription: string;
  otherCompetenciesTitle: string;
  otherCompetencies: string[];
  educationTitle: string;
  education: EducationItem[];
  languagesTitle: string;
  languages: LanguageItem[];
  referencesTitle: string;
  references: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  pdfDownloadText: string;
  tabs: {
    about: string;
    experience: string;
    contact: string;
  };
}
