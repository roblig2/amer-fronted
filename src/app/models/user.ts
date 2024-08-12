import {Role} from "./role";
import {Event} from "./event";

export interface UserDate {
  date:Date;
  remark:string;
}

export interface User {
  id: string;
  firstName:string;
  lastName:string;
  username: string;
  password?: string;
  isDriver: boolean;
  dateOfBirth:Date;
  availableDates: UserDate[];
  roles: Role[];
  phoneNumber: string;
  complaints?:string;
  events?:{ name:string, date:Date ,isEvent:boolean;}[];
}
