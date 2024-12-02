import IUser from "../../interfaces/user";

type ProfileProps = {
  authUser: IUser | null | undefined;
};
export default function Profile({ authUser }: ProfileProps) {
  return (
    <div>
      <h1>Profile Informations</h1>
      <p>{authUser?.email}</p>
    </div>
  );
}
