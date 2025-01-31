import { IName } from "@/reuse/type";

export interface IStaff {
  user: string;
  name: IName;
  profile_Photo: string;
  updated_at: Date;
}
