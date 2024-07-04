import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

import IconSunny from "~icons/material-symbols/sunny-rounded";
import IconSunnyOutline from "~icons/material-symbols/sunny-outline-rounded";

export default function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <span
      className="cursor-pointer"
      onClick={() => {
        toggleDarkMode();
      }}
    >
      {darkMode ? (
        <IconSunny width="1.5em" height="1.5em" />
      ) : (
        <IconSunnyOutline width="1.5em" height="1.5em" />
      )}
    </span>
  );
}
