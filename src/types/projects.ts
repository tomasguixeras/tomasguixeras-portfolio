export interface projectsInfo {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies?: string[];
}

export interface portfolioTexts {
  title: string;
  projects: projectsInfo[];
  moreProjects: string;
}

export interface portfolioLanguage {
  spanish: portfolioTexts;
  english: portfolioTexts;
}
