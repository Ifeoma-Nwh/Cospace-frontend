import ICowork from "./cowork";
import User from "./user";

export default interface ICity {
  id: number;
  name: string;
  zipcode: string;
  createdBy: number;
  updatedBy: number | null;
  createdAt: Date;
  updatedAt: Date | null;
  createdByUser: User;
  updatedByUser: User | null;
  coworksByCity: ICowork[];
}
