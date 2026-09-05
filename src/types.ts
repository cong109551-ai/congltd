export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Creative Dev' | 'Product Craft' | 'UI/UX Design';
  year: string;
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  color: string;
  previewGradient: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface StudioPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
