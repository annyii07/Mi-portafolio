export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'React' | 'Mobile' | 'Fullstack';
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface Skill {
  name: string;
  iconName: string;
  level: number; // 0 to 100
  category: 'frontend' | 'mobile' | 'tools' | 'languages';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}
