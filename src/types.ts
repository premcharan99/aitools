export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid';
  url: string;
  logo?: string;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  tools: AITool[];
}