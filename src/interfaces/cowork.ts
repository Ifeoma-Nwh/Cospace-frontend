import ICity from "./city";
import ITag from "./tag";
import IUser from "./user";

export default interface ICowork {
  id: number;
  name: string;
  address: string;
  description: string | null;
  timetable: string;
  phoneNumber: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string | null;
  websiteUrl: string | null;
  cityId: number;
  createdBy: number;
  updatedBy: number | null;
  createdAt: Date;
  updatedAt: Date | null;
  coworkCity: ICity;
  createdByUser: IUser;
  updatedByUser: IUser | null;
  coworkTags: ITag[];
}
