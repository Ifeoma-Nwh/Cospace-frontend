import IUser from "../../interfaces/user";
import Modal from "../modal/Modal";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import RegisterForm from "./RegisterForm";

type Props = {
  authUser: IUser | null | undefined;
};

export default function AuthBar({ authUser }: Props) {
  if (!authUser) {
    return (
      <div className="flex justify-center gap-x-6 mt-1 w-1/4">
        <Modal label="Sign up" btnClass="btn" modalBgColor="bg-secondary-200">
          <RegisterForm />
        </Modal>
        <Modal
          label="Log in"
          btnClass="btn-secondary"
          modalBgColor="bg-primary-200"
        >
          <LoginForm />
        </Modal>
      </div>
    );
  }
  return (
    <div className="flex gap-x-4 justify-between">
      <div>{authUser?.fullName}</div>
      <Logout />
    </div>
  );
}
