import { Link } from "react-router-dom";
import { dropdownMenu } from "../../data/DropdownMenu";
import { useGetCities } from "../../hooks/useCity";
import { useState } from "react";

import MaterialSymbolsArrowDropUpRounded from "~icons/material-symbols/arrow-drop-up-rounded";
import MaterialSymbolsArrowDropDownRounded from "~icons/material-symbols/arrow-drop-down-rounded";

export default function NavBarMobile() {
  const citiesQuery = useGetCities();

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="w-full">
      <ul>
        {dropdownMenu.map((menu, key) =>
          menu.name === "Cities" ? (
            <li key={key} onClick={handleToggle}>
              <div>
                <span className="font-text font-semibold text-sm">
                  {menu.name}
                </span>
                {isToggled ? (
                  <MaterialSymbolsArrowDropDownRounded width={12} height={12} />
                ) : (
                  <MaterialSymbolsArrowDropUpRounded width={12} height={12} />
                )}
              </div>
              {isToggled && (
                <ul>
                  {citiesQuery.data?.map((city) => (
                    <li key={city.id}>
                      <Link
                        to={`/cities/${city.id}`}
                        className="font-text font-semibold text-sm"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
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
