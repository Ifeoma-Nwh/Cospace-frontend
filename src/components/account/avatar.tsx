import { Link } from "react-router-dom";

type Props = {
  avatarUrl?: string | null;
};

export default function Avatar({ avatarUrl }: Props) {
  return (
    <Link to="/dashboard">
      <div>
        <img
          className="h-10 w-10 rounded-full hover:border-2 hover:border-clr-primary"
          src={avatarUrl ? avatarUrl : "https://i.pravatar.cc/300"}
          alt="My avatar"
        />
      </div>
    </Link>
  );
}
