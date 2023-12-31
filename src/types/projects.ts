export interface projectsInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies?: string[];
  link: string;
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
