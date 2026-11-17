import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (darkMode) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
