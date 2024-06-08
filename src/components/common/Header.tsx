import { Link } from "react-router-dom";
import ToggleMode from "../theme/ToggleMode";
import Modal from "./modal/Modal";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto h-1/5 mb-8 py-6 flex justify-evenly items-center">
        <div>
          <Link to="/" className="font-headline text-2xl uppercase">
            Co'Space
          </Link>
        </div>

        <nav className="flex">
          <Link to="/" className="font-text font-semibold px-4">
            Villes
          </Link>
          <Link to="/" className="font-text font-semibold px-4">
            Coworks
          </Link>
          <Link to="/about" className="font-text font-semibold px-4">
            About
          </Link>
          <ToggleMode />
        </nav>

        <div>
          <Modal label="Log in">
            <LoginForm />
          </Modal>
          <Modal
            label="Sign up"
            className="py-2 ml-4 border-black-base border-2 transition hover:shadow-lb bg-secondary-base text-white-base"
          >
            <RegisterForm />
          </Modal>
        </div>
      </div>
    </header>
  );
}
