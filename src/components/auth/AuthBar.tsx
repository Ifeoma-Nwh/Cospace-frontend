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
      <div className="flex w-1/3">
        <Modal
          label="Log in"
          btnClass="link w-full border-x-2 border-clr-dark"
          modalBgColor="bg-clr-light"
        >
          <LoginForm />
        </Modal>
        <Modal
          label="Get started"
          btnClass="w-full"
          modalBgColor="bg-clr-light"
        >
          <RegisterForm />
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
