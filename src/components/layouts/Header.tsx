import { Link } from "react-router-dom";
import ToggleTheme from "../theme/ToggleTheme";
import useAuthContext from "../../contexts/auth/useAuthContext";
import NavBar from "../menu/NavBar";
import AuthBar from "../auth/AuthBar";

export default function Header() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  return (
    <header className="pt-3">
      <div className="container mx-auto h-1/5 mb-8 py-4 px-8 border border-black-base rounded-3xl shadow-rb flex gap-x-8 justify-between items-center">
        <div>
          <Link to="/" className="font-headline text-2xl uppercase">
            Co'Space
          </Link>
        </div>
        <NavBar />
        <ToggleTheme />

        <AuthBar authUser={authUser} />
      </div>
    </header>
  );
}
