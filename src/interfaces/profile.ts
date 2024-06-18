import IUser from "./user";

export default interface IProfile {
  id: number;
  userId: number;
  description: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  user: IUser;
}
