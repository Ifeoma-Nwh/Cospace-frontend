import IUser from "../../interfaces/user";

type DashboardProps = {
  authUser: IUser | null | undefined;
};

export default function Dashboard({ authUser }: DashboardProps) {
  return (
    <div>
      <h1>
        Welcome back, {authUser?.fullName ? authUser.fullName : authUser?.email}
      </h1>
    </div>
  );
}
