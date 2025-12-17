export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export interface EventItem {
  id: number;
  day: string;
  month: string;
  year: string;
  tag?: string;
  discount?: string;
  title: string;
  time: string;
  location: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
}