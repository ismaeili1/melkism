export type NewsCategory = 
  | 'market-trends' 
  | 'legal-regulations' 
  | 'international' 
  | 'proptech' 
  | 'construction' 
  | 'investment';

export type GeographicRegion = 'global' | 'mena' | 'europe' | 'north-america' | 'asia' | 'iran';

export type ProfessionalAudience = 'investors' | 'architects' | 'agents' | 'developers' | 'lawyers';

export interface Comment {
  id: string;
  authorName: string;
  avatar?: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  lead: string;
  content: string;
  category: NewsCategory;
  region: GeographicRegion;
  targetAudience: ProfessionalAudience;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string;
  readTimeMinutes: number;
  priorityScore: number; // از ۱ تا ۱۰۰ برای اولویت‌بندی
  isTrending: boolean;
  isAiGenerated: boolean;
  imageUrl: string;
  likesCount: number;
  comments: Comment[];
  tags: string[];
}