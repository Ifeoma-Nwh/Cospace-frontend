import { Link } from "react-router-dom";
import ToggleTheme from "../theme/ToggleTheme";
import Modal from "../modal/Modal";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import useAuthContext from "../../contexts/auth/useAuthContext";
import Logout from "../auth/Logout";
import NavBar from "../menu/NavBar";

export default function Header() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  return (
    <header>
      <div className="container mx-auto h-1/5 mb-8 py-6 flex gap-x-8 justify-between items-center">
        <div>
          <Link to="/" className="font-headline text-2xl uppercase">
            Co'Space
          </Link>
        </div>
        <NavBar />
        <ToggleTheme />

        {authUser && (
          <div className="flex gap-x-4 justify-between">
            <div>{authUser?.fullName}</div>
            <Logout />
          </div>
        )}
        {!authUser && (
          <div>
            <Modal
              label="Log in"
              btnClass="mr-4 btn-secondary"
              modalBgColor="bg-primary-200"
            >
              <LoginForm />
            </Modal>
            <Modal label="Sign up" modalBgColor="bg-secondary-200">
              <RegisterForm />
            </Modal>
          </div>
        )}
      </div>
    </header>
  );
}
