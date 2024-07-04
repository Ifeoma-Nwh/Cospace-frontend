import { Navigate } from "react-router-dom";
import IUser from "../interfaces/user";

type Props = {
  authUser: IUser;
};

export default function Account({ authUser }: Props) {
  if (!authUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <h1>{authUser.fullName} Account</h1>
      <p>{authUser.email}</p>
    </>
  );
}
