import ICowork from "./cowork";
import IUser from "./user";

export default interface ITag {
  id: number;
  name: string;
  createdBy: number;
  updatedBy: number | null;
  createdAt: Date;
  updatedAt: Date | null;
  createdByUser: IUser;
  updatedByUser: IUser | null;
  taggedCoworks: ICowork[] | null;
}
