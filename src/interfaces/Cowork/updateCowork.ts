export default interface IUpdateCowork {
  id: number;
  name?: string;
  address?: string;
  description?: string | undefined;
  timetable?: string;
  phoneNumber?: string;
  dailyPrice?: number;
  monthlyPrice?: number;
  thumbnailUrl?: string | undefined;
  websiteUrl?: string | undefined;
  cityId?: number | null;
  updatedBy: number;
  coworkTags?: number[] | null;
}
