export default interface ICreateCowork {
  name: string;
  address: string;
  description: string | undefined;
  timetable: string;
  phoneNumber: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string | undefined;
  websiteUrl: string | undefined;
  cityId: number | null;
  createdBy: number;
  coworkTags: number[] | null;
}
