export interface DayItinerary {
  day: number;
  date: string;
  tagColor: string;
  highlights: string;
  schedule: string;
  food: string;
  queueTips?: string;
  guide?: {
    title: string;
    description: string;
    steps: string[];
    images: { url: string; caption: string }[];
  };
}

export interface QueueStrategy {
  category: string;
  advice: string;
}

export interface EssentialInfo {
  title: string;
  content: string;
  icon?: string;
}

export interface Restaurant {
  name: string;
  category: string;
  rating: number;
  location: string;
  area: string;
  recommendation: string;
  priceRange: string;
}

export interface TransportInfo {
  name: string;
  description: string;
  type: 'train' | 'bus' | 'pass' | 'tip';
}
