import IUser from "../../interfaces/user";
import Avatar from "../account/Avatar";
import Modal from "../modal/Modal";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import RegisterForm from "./RegisterForm";

type Props = {
  authUser: IUser | null | undefined;
};

export default function AuthBar({ authUser }: Props) {
  console.log("🚀 ~ AuthBar ~ authUser:", authUser);

  if (!authUser) {
    return (
      <div className="flex justify-center gap-x-6 mt-1 w-1/4">
        <Modal label="Sign up" btnClass="btn" modalBgColor="bg-clr-white">
          <RegisterForm />
        </Modal>
        <Modal
          label="Log in"
          btnClass="btn-secondary"
          modalBgColor="bg-clr-white"
        >
          <LoginForm />
        </Modal>
      </div>
    );
  }
  return (
    <div className="flex gap-x-4 justify-between items-center">
      <Avatar authUser={authUser} />
      <Logout />
    </div>
  );
}
