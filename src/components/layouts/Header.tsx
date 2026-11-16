import { Link } from "react-router-dom";
import useAuthContext from "../../contexts/auth/useAuthContext";
import NavBar from "../menu/NavBar";
import AuthBar from "../auth/AuthBar";

export default function Header() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  return (
    <header className=" sticky z-50 top-0 border-b-2 border-b-clr-black bg-clr-white">
      <div className="py-4 px-8 flex justify-between">
        <div className="w-1/2 flex items-center justify-between">
          <div className="flex bg-clr-black py-2 px-4 rounded-full">
            <Link
              to="/"
              className="font-headline text-2xl uppercase text-clr-white"
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
