import { Link } from "react-router-dom";
import useAuthContext from "../../contexts/auth/useAuthContext";
import NavBar from "../menu/NavBar";
import AuthBar from "../auth/AuthBar";

export default function Header() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  return (
    <header className="fixed top-0 w-full container mx-auto mt-5 border-2 rounded-2xl border-clr-black bg-clr-white">
      <div className="py-4 px-8 flex justify-between">
        <div className="flex gap-x-6 items-center">
          <div className="flex bg-clr-black py-2 px-4 rounded-full">
            <Link
              to="/"
              className="font-headline text-2xl uppercase text-clr-secondary"
            >
              Co'Space
            </Link>
          </div>
          <NavBar />
        </div>
        <AuthBar authUser={authUser} />
      </div>
    </header>
  );
}
