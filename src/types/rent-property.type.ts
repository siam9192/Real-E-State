import { EPropertyType, ESequence, IAddress } from "@/reuse/type";

interface ILocationAdvantage {
  name: string;
  distance_km: number;
  duration_minute: number;
}

interface IMeetingDate {
  date: Date;
  available: boolean;
}

interface RentInfo {
  rent: number;
  rent_sequence: `${ESequence}`;
  security_deposit?: number;
  lease_term: number;
  lease_term_sequence: `${ERentLeaseTermSequence}`;
}

export interface IRentProperty {
  _id: string;
  member: string;
  type: `${EPropertyType}`;
  title: string;
  description: string;
  images: string[];
  bedroom: number;
  bathroom: number;
  garage: number;
  area_size: number;
  amenities: string[];
  build_year: number;
  floor_level?: number;
  floor_plane_image: string;
  furnishing_status: `${EFurnishStatus}`;
  rent_policy?: string;
  rent_info: RentInfo;
  address: IAddress;
  available_from?: Date;
  available_status: `${ERentPropertyAvailableStatus}`;
  location_advantages?: ILocationAdvantage;
  meeting_dates: IMeetingDate[];
  created_at: Date;
  updated_at: Date;
}

export enum EFurnishStatus {
  FULL_FURNISHED = "Full Furnished",
  SEMI_FURNISHED = "Semi Furnished",
  NOT_FURNISHED = "Not Furnished",
}

export enum ERentLeaseTermSequence {
  MONTH = "Months",
  YEAR = "Years",
  WEEK = "Weeks",
}

export enum ERentPropertyAvailableStatus {
  AVAILABLE = "Available",
  RENTED = "Rented",
  UNDER_MAINTENANCE = "Under Maintenance",
}
