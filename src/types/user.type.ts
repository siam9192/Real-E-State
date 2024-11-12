import { EUserRole } from '@/reuse/type';
import { IAgent } from './agent.type';
import { IStaff } from './staff.type';

export interface IUser {
  _id: string;
  email: string;
  google_id: string;
  role: `${EUserRole}`;
  profile: IAgent | IUser | IStaff;
}
