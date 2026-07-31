import type { ImageMetadata } from 'astro';

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: ImageMetadata;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: ImageMetadata;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  image: ImageMetadata;
  readTime: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  website?: string;
  logoText: string;
}

export interface FinancialReport {
  year: number;
  title: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
