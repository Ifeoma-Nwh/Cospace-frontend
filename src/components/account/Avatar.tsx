import { Link } from "react-router-dom";
import IUser from "../../interfaces/user";

type Props = {
  authUser: IUser | null | undefined;
};

export default function Avatar({ authUser }: Props) {
  return (
    <Link
      to={
        authUser?.roleId === 3 ? "/my-account/admin" : "/my-account/dashboard"
      }
    >
      <div>
        <img
          className="h-10 w-10 rounded-full hover:border-2 hover:border-clr-primary"
          src={
            authUser?.avatarUrl
              ? authUser?.avatarUrl
              : "https://i.pravatar.cc/300"
          }
          alt="My avatar"
        />
      </div>
    </Link>
  );
}
