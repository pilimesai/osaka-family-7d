export interface Activity {
  time: string;
  name: string;
  location?: string;
  description: string;
  tips?: string[];
  guideImages?: { url: string; caption: string }[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  activities: Activity[];
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
