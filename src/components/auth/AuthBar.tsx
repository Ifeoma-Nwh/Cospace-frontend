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
      <div className="flex justify-between mt-1 w-1/5">
        <Modal label="Log in" btnClass="link" modalBgColor="bg-clr-white">
          <LoginForm />
        </Modal>
        <Modal
          label="Get started"
          btnClass="btn-secondary"
          modalBgColor="bg-clr-white"
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
