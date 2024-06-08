import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";

import IconSunny from "~icons/material-symbols/sunny-rounded";
import IconSunnyOutline from "~icons/material-symbols/sunny-outline-rounded";

export default function ToggleMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <span
      className="px-5 cursor-pointer"
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
