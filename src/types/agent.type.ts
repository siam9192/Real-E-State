import { IAddress, IName, IPhone } from "@/reuse/type";

export interface IAgentArea {
  city: string;
  state?: string;
  country: string;
}

export interface IAgent {
  user: string;
  name: IName;
  profile_photo: string;
  bio: string;
  experience_in_years: number;
  area: IAgentArea;
  phone: IPhone;
  address: IAddress;
  updated_at: Date;
}
