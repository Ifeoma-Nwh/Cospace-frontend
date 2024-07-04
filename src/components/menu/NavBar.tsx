import { Link } from "react-router-dom";
import { menuItemsData } from "./menuItemsData";
import { useGetCities } from "../../hooks/useCity";
import DropdownMenu from "./DropdownMenu";
import ICity from "../../interfaces/city";
import { useState } from "react";

type Props = {
  classes?: string;
};
export default function NavBar({ classes }: Props) {
  const citiesQuery = useGetCities();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className={classes}>
      <ul className="flex gap-x-8">
        {menuItemsData.map((menu, index) =>
          menu.name === "Cities" ? (
            <li
              key={index}
              className="relative font-text font-semibold text-lg pb-3"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {menu.name}
              <DropdownMenu<ICity>
                key={`dropdown${index}`}
                listQuery={citiesQuery}
                dropdownClass={isHovered ? "block" : "hidden"}
              />
            </li>
          ) : (
            <li key={index}>
              <Link to={menu.path} className="font-text font-semibold text-lg">
                {menu.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
