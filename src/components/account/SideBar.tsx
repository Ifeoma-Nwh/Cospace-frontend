import Dashboard from "./Dashboard";
import IUser from "../../interfaces/user";
import Profile from "./Profile";
import Cities from "../Cities/Cities";
import Coworks from "../coworks/Coworks";
import Tags from "../Tags/Tags";
import Users from "../Users/Users";

type SideBarProps = {
  authUser: IUser | null | undefined;
  forAdmin: boolean;
  forModerator: boolean;
  setActiveComponent: (component: React.ReactNode) => void;
};

export default function SideBar({
  authUser,
  forAdmin,
  forModerator,
  setActiveComponent,
}: SideBarProps) {
  const accountLinks = [
    { label: "Dashboard", component: <Dashboard authUser={authUser} /> },
    { label: "Profile", component: <Profile authUser={authUser} /> },
  ];

  const moderatorLinks = [
    ...accountLinks,
    { label: "Cities", component: <Cities /> },
    { label: "Coworks", component: <Coworks /> },
    { label: "Tags", component: <Tags /> },
  ];

  const adminLinks = [
    ...moderatorLinks,
    { label: "Users", component: <Users /> },
  ];

  const links = forAdmin
    ? adminLinks
    : forModerator
    ? moderatorLinks
    : accountLinks;

  return (
    <div className="account-sidebar">
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index} className="">
            <button
              onClick={() => setActiveComponent(link.component)}
              className="text-clr-black hover:underline"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
