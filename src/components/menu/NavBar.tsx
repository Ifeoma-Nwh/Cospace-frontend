import { Link } from "react-router-dom";
import { menuItemsData } from "./menuItemsData";

type Props = {
  classes?: string;
};
export default function NavBar({ classes }: Props) {
  return (
    <nav className={classes}>
      <ul className="flex gap-x-8">
        {menuItemsData.map((menu, index) => (
          <li key={index}>
            <Link to={menu.path} className="font-text font-semibold text-lg">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
