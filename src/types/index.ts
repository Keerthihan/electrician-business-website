export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  iconName: string; // Used to dynamic-render Lucide icons
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number; // 1-5
  text: string;
  date: string;
}

export interface AreaItem {
  id: string;
  name: string;
  postcodePrefix: string;
  county: string;
  distanceMiles: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'consumer-units' | 'rewires' | 'ev-chargers' | 'lighting' | 'all';
  imageUrl: string;
  description: string;
}
