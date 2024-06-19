import ICity from "./city";
import ICowork from "./cowork";
import IProfile from "./profile";
import IRole from "./role";
import ITag from "./tag";

export default interface IUser {
  id: number;
  roleId: number;
  fullName: string | null;
  email: string;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  role: IRole;
  profile: IProfile;
  createdCities: ICity[] | null;
  updatedCities: ICity[] | null;
  createdCoworks: ICowork[] | null;
  updatedCoworks: ICowork[] | null;
  createdTags: ITag[] | null;
  updatedTags: ITag[] | null;
}
