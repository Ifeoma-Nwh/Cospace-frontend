import { useEffect, useState } from "react";
import { useGetMe, useLogin } from "../../hooks/useAuth";
import Button from "../common/Button";
import Form from "../form/Form";
import Input from "../form/Input";
import useToast from "../../contexts/toast/useToast";
import useAuthContext from "../../contexts/auth/useAuthContext";

export default function LoginForm() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const authContext = useAuthContext();

  const mutation = useLogin();
  const toast = useToast();

  const query = useGetMe();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutateAsync(
      { email: inputEmail, password: inputPassword },
      {
        onSuccess: () => {
          setInputEmail("");
          setInputPassword("");
          toast?.success("Connexion réussie !");
        },
        onError: (error) => {
          if (Array.isArray(error)) {
            toast?.error(error[0].message);
          }
        },
      }
    );
  };

  // Move the dispatch to useEffect to avoid the issue
  useEffect(() => {
    if (query.isSuccess && query.data) {
      console.log(query.data);
      authContext?.dispatch({ type: "SET_USER", payload: query.data });
    }
  }, [query.isSuccess, query.data, authContext]); // Run this effect when query.isSuccess or query.data changes

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
      <h3 className="text-center">Déjà inscrit ? Connecte toi</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-10" onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="btn-secondary"
            disabled={mutation.isPending}
          >
            Se connecter
          </Button>
        </Form>
      </div>
    </div>
  );
}
