import { Link } from "react-router-dom";
import { menuItemsData } from "./menuItemsData";
import { useGetCities } from "../../hooks/useCity";
import DropdownMenu from "./DropdownMenu";
import ICity from "../../interfaces/city";
import { useState } from "react";

import MaterialSymbolsArrowDropUpRounded from "~icons/material-symbols/arrow-drop-up-rounded";
import MaterialSymbolsArrowDropDownRounded from "~icons/material-symbols/arrow-drop-down-rounded";

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
    <nav className={`w-2/5 ${classes}`}>
      <ul className="flex gap-x-8 justify-between items-center">
        {menuItemsData.map((menu, key) =>
          menu.name === "Cities" ? (
            <div
              key={key}
              className="cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li key={key} className="flex relative">
                <span className="font-text font-semibold text-lg">
                  {menu.name}
                </span>
                {isHovered ? (
                  <MaterialSymbolsArrowDropDownRounded width={24} height={24} />
                ) : (
                  <MaterialSymbolsArrowDropUpRounded width={24} height={24} />
                )}
              </li>
              <DropdownMenu<ICity>
                listQuery={citiesQuery}
                dropdownClass={isHovered ? "block" : "hidden"}
              />
            </div>
          ) : (
            <li key={key}>
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
