import { useLogout } from "../../hooks/useAuth";
import Button from "../common/Button";
import Form from "../form/Form";
import MaterialSymbolsLogoutRounded from "~icons/material-symbols/logout-rounded";
import useToast from "../../contexts/toast/useToast";

export default function Logout() {
  const mutation = useLogout();
  const toast = useToast();

  const handleLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(undefined, {
      onSuccess: () => {
        toast?.success("Vous avez bien été deconnecté");
        window.location.href = "/";
      },
    });
  };

  return (
    <Form onSubmit={handleLogout}>
      <Button type="submit" disabled={mutation.isPending}>
        <MaterialSymbolsLogoutRounded />
      </Button>
    </Form>
  );
}
