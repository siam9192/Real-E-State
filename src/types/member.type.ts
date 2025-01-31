import { IAddress, IName, IPhone } from "@/reuse/type";
import { ISubscription } from "./subscription.interface";

export interface IMember {
  user: string;
  name: IName;
  profile_Photo: string;
  total_following_agent?: number;
  phone?: IPhone;
  address?: IAddress;
  latest_subscription?: string | ISubscription;
  updated_at: Date;
}
