import { Navigate } from "react-router-dom";
import IUser from "../interfaces/user";

type Props = {
  authUser: IUser | null | undefined;
};

export default function Account({ authUser }: Props) {
  if (!authUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <h1>
        Welcome back, {authUser.fullName ? authUser.fullName : authUser.email}
      </h1>
    </>
  );
}
