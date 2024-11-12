import { EPropertyType, IAddress } from '@/reuse/type';

export interface ILocationAdvantage {
  name: string;
  distance_km: number;
  duration_minute: number;
}

interface IMeetingDate {
  date: Date;
  available: boolean;
}

export interface ISellProperty {
  _id: string;
  agent: string;
  type: `${EPropertyType}`;
  title: string;
  description: string;
  images: string[];
  price: number;
  bedroom: number;
  bathroom: number;
  garage: number;
  area_size: number;
  amenities: string[];
  build_year: number;
  floor_level?: number;
  floor_plane_image: string;
  address: IAddress;
  location_advantages?: ILocationAdvantage[];
  meeting_dates: IMeetingDate[];
}
