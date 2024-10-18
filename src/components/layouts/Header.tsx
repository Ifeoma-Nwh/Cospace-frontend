import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "../theme/ToggleTheme";
import useAuthContext from "../../contexts/auth/useAuthContext";
import NavBar from "../menu/NavBar";
import AuthBar from "../auth/AuthBar";

import MaterialSymbolsMenuRounded from "~icons/material-symbols/menu-rounded";
import MaterialSymbolsCloseRounded from "~icons/material-symbols/close-rounded";
import NavBarMobile from "../menu/NavBarMobile";

export default function Header() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  const [onMobile, setOnMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth <= 768) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
        setMenuOpen(false); // Ensure menu is closed if switching to desktop
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed z-10 top-0 w-full border-b-2 border-clr-black bg-clr-white">
      <div className="container md:mx-auto py-4 px-8 flex gap-x-8 justify-between items-center">
        <div>
          <Link to="/" className="font-headline text-2xl uppercase">
            Co'Space
          </Link>
        </div>
        {onMobile ? (
          <>
            <div className="flex items-center gap-x-4">
              <ToggleTheme />
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <MaterialSymbolsCloseRounded />
                ) : (
                  <MaterialSymbolsMenuRounded />
                )}
              </button>
            </div>
            {menuOpen && <NavBarMobile />}
            {/* <AuthBar authUser={authUser} /> */}
          </>
        ) : (
          <>
            <NavBar />
            <ToggleTheme />
            <AuthBar authUser={authUser} />
          </>
        )}
      </div>
    </header>
  );
}
