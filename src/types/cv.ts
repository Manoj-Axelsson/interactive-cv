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
  recommendationsTitle: string;
  recommendations: RecommendationItem[];
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  contactNationality: string;
  contactNationalityValue: string;
  pdfDownloadText: string;
  tabs: {
    about: string;
    experience: string;
    recommendations: string;
    behindTheCode: string;
    contact: string;
  };
}

export interface RecommendationItem {
  name: string;
  role: string;
  relation: string;
  country: string;
  text: string;
  originalText?: string;
  nativeLanguage?: string;
  date: string;
  isLinkedInVerified: boolean;
  linkedinUrl?: string;
}
