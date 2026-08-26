export interface DayItinerary {
  day: number;
  date: string;
  tagColor: string;
  highlights: string;
  schedule: string;
  transport: string;
  transportDetails?: {
    price: string;
    whereToBuy: string;
    scheduleOptions: string[];
    note?: string;
  };
  childHighlights: string;
  food: string;
  queueTips?: string;
  hotelId?: string;
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

export interface HotelInfo {
  id: string;
  name: string;
  japaneseName: string;
  bookingNumber?: string;
  checkInDate: string;
  checkOutDate: string;
  stayDuration: string;
  area: string;
  address: string;
  googleMapsUrl: string;
  phone: string;
  coverImage: string;
  routeImage: string;
  routeTitle: string;
  routeDescription: string;
  routeSteps: string[];
  stationExit: string;
  highlights: string[];
  familyTips: string[];
}

export interface TransportInfo {
  name: string;
  description: string;
  type: 'train' | 'bus' | 'pass' | 'tip';
}
