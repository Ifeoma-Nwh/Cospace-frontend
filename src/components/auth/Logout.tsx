import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";
import Button from "../common/Button";
import Form from "../form/Form";
import MaterialSymbolsLogoutRounded from "~icons/material-symbols/logout-rounded";

export default function Logout() {
  const mutation = useLogout();

  const handleLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate();
  };

  if (mutation.isSuccess) {
    return <Navigate to="/" replace />;
  }
  return (
    <Form onSubmit={handleLogout}>
      <Button type="submit">
        <MaterialSymbolsLogoutRounded />
      </Button>
    </Form>
  );
}
