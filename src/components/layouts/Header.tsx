import { Link } from "react-router-dom";
import useAuthContext from "../../contexts/auth/useAuthContext";
import NavBar from "../menu/NavBar";
import AuthBar from "../auth/AuthBar";

export default function Header() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  return (
    <header className="pt-5 sticky z-10 top-0 bg-clr-light">
      <div className="flex border-2 border-clr-dark">
        <div className="w-2/3 flex justify-between items-center">
          <div className="bg-clr-accent px-4 py-2">
            <Link
              to="/"
              className="font-headline text-2xl uppercase text-clr-light"
            >
              Co'Space
            </Link>
          </div>
          <NavBar classes="w-2/3" />
        </div>
        <AuthBar authUser={authUser} />
      </div>
    </header>
  );
}
