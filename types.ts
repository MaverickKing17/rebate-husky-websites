import { LucideIcon } from 'lucide-react';

export enum ServiceType {
  FURNACE = 'Furnace',
  AC = 'Air Conditioning',
  HEAT_PUMP = 'Heat Pump',
  MAINTENANCE = 'Maintenance',
  WATER_HEATER = 'Water Heater',
  AIR_QUALITY = 'Air Quality'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: ServiceType;
  highlight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface RebateInfo {
  provider: string;
  maxAmount: number;
  description: string;
}