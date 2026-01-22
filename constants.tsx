import { 
  Flame, 
  Snowflake, 
  Wind, 
  Wrench, 
  Droplets, 
  ThermometerSun,
  ShieldCheck,
  Award,
  Zap
} from 'lucide-react';
import { ServiceItem, Testimonial, TimelineEvent, RebateInfo, ServiceType } from './types';

export const SERVICE_AREAS = [
  "Toronto", "Vaughan", "Markham", "Richmond Hill", "Mississauga", "Brampton", "Oakville", "Burlington", "Aurora", "Newmarket"
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Furnace Repair & Install',
    description: 'Expert diagnostics and installation of high-efficiency Carrier and Lennox furnaces. 24/7 Emergency service available.',
    icon: Flame,
    type: ServiceType.FURNACE,
    highlight: 'Save up to $3,000'
  },
  {
    id: 's2',
    title: 'A/C Repair & Install',
    description: 'Keep your home cool with top-rated air conditioners. Precision installation ensuring maximum SEER efficiency.',
    icon: Snowflake,
    type: ServiceType.AC,
    highlight: 'Early Bird Specials'
  },
  {
    id: 's3',
    title: 'Heat Pumps',
    description: 'The future of HVAC. Efficient heating and cooling in one unit. Qualifies for maximum government rebates.',
    icon: Zap,
    type: ServiceType.HEAT_PUMP,
    highlight: 'Up to $7,500 Rebate'
  },
  {
    id: 's4',
    title: 'Maintenance Plans',
    description: 'Prevent breakdowns with our comprehensive protection plans. Priority service and parts discounts included.',
    icon: Wrench,
    type: ServiceType.MAINTENANCE,
  },
  {
    id: 's5',
    title: 'Tankless Water Heaters',
    description: 'Endless hot water and energy savings. Rinnai and Navien expert installation and rental options.',
    icon: Droplets,
    type: ServiceType.WATER_HEATER,
  },
  {
    id: 's6',
    title: 'Air Quality Solutions',
    description: 'HEPA filters, humidifiers, and UV lights to keep your family breathing clean, healthy air.',
    icon: Wind,
    type: ServiceType.AIR_QUALITY,
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { year: '1974', title: 'Founded', description: 'Husky opens its doors in Toronto with a single truck and a commitment to quality.' },
  { year: '1995', title: 'Expansion', description: 'Moved to a larger headquarters in Vaughan to serve the growing GTA market.' },
  { year: '2014', title: 'Top Choice Award', description: 'Won our first Top Choice Award for HVAC in Vaughan, a streak continuing today.' },
  { year: '2020', title: 'Green Initiative', description: 'Expanded Heat Pump division to support eco-friendly home energy transitions.' },
  { year: '2025', title: '50 Years of Service', description: 'Celebrating a half-century of trust, family values, and keeping Toronto comfortable.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'Vaughan',
    text: 'Our furnace died on the coldest night of the year. Husky was there within 2 hours. The technician was polite, efficient, and didn\'t try to upsell me. Highly recommend!',
    rating: 5,
    date: 'Jan 2026'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    location: 'North York',
    text: 'Switched to a heat pump with Husky. They handled all the rebate paperwork for me, saving me over $6,000. The installation was neat and professional.',
    rating: 5,
    date: 'Dec 2025'
  },
  {
    id: 't3',
    name: 'Dimitri V.',
    location: 'Mississauga',
    text: 'I\'ve been using Husky for maintenance for 10 years. My AC runs like new. Best team in the GTA.',
    rating: 5,
    date: 'Aug 2025'
  }
];

export const REBATES: RebateInfo[] = [
  { provider: 'Enbridge Gas', maxAmount: 5000, description: 'Home Efficiency Rebate Plus' },
  { provider: 'Greener Homes', maxAmount: 5000, description: 'Federal Grant for Heat Pumps' },
  { provider: 'Save on Energy', maxAmount: 500, description: 'Smart Thermostat Incentives' }
];
