import { Navigate } from "react-router-dom";
import IUser from "../interfaces/user";
import Dashboard from "../components/account/Dashboard";
import { useState } from "react";
import SideBar from "../components/account/SideBar";

type Props = {
  authUser: IUser | null | undefined;
};

export default function Account({ authUser }: Props) {
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
    <Dashboard authUser={authUser} />
  );

  if (!authUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="account-layout">
      <SideBar
        authUser={authUser}
        forAdmin={false}
        forModerator={false}
        setActiveComponent={setActiveComponent}
      />
      <div className="account-content">{activeComponent}</div>
    </div>
  );
}
