import ITag from "../Tag/tag";

export interface ICreateCowork {
  name: string;
  address: string;
  description: string | null;
  timetable: string;
  phoneNumber: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string | null;
  websiteUrl: string | null;
  cityId: number | null;
  createdBy: number;
  coworkTags: ITag[] | null;
}
