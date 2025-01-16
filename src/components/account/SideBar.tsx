import { useState } from "react";
import Dashboard from "./Dashboard";
import IUser from "../../interfaces/user";
import Profile from "./Profile";
import Cities from "../Cities/Cities";
import Coworks from "../coworks/Coworks";
import Tags from "../Tags/Tags";
import Users from "../Users/Users";
import Button from "../common/Button";

type SideBarProps = {
  authUser: IUser | null | undefined;
  forAdmin: boolean;
  forModerator: boolean;
  setActiveComponent: (component: React.ReactNode) => void;
};

type Link = {
  label: string;
  component: React.ReactNode;
};

export default function SideBar({
  authUser,
  forAdmin,
  forModerator,
  setActiveComponent,
}: SideBarProps) {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const accountLinks: Link[] = [
    { label: "Dashboard", component: <Dashboard authUser={authUser} /> },
    { label: "Profile", component: <Profile authUser={authUser} /> },
  ];

  const moderatorLinks: Link[] = [
    ...accountLinks,
    { label: "Cities", component: <Cities /> },
    { label: "Coworks", component: <Coworks /> },
    { label: "Tags", component: <Tags /> },
  ];

  const adminLinks: Link[] = [
    ...moderatorLinks,
    { label: "Users", component: <Users /> },
  ];

  const links = forAdmin
    ? adminLinks
    : forModerator
    ? moderatorLinks
    : accountLinks;

  const handleClick = (link: Link) => {
    setActiveLink(link.label);
    setActiveComponent(link.component);
  };

  return (
    <div className="account-sidebar border-x-2 border-clr-black">
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li key={index} className="w-full border-b-2 border-clr-black">
            <Button
              type="button"
              children={link.label}
              onClick={() => handleClick(link)}
              className={`w-full py-6 pl-3 text-left font-text font-bold 
                ${
                  activeLink === link.label
                    ? "bg-clr-secondary text-clr-black"
                    : "text-clr-black hover:underline"
                }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
