export interface Skill {
  name: string;
  category: 'Programming' | 'Electronics' | 'Tools';
  level: number; // 0 to 100
  iconName: string;
  description?: string;
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  architectureDiagram?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  skillsUsed: string[];
  type: 'Internship' | 'Academic' | 'Research' | 'Leadership';
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  badgeColor: string;
  fileUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  position: string;
  description: string;
  category: 'Hackathon' | 'Competition' | 'Research' | 'Award';
  stats?: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  stream: string;
  college: string;
  university: string;
  graduationYears: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  aboutBio: string;
  careerObjective: string;
  journey: string;
  futureGoals: string[];
  areasOfInterest: string[];
}
