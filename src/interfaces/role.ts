import IUser from "./user";

export default interface IRole {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date | null;
  users: IUser[];
}
