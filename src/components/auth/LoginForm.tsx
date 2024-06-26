import { useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { IFormError } from "../../interfaces/formError";
import Button from "../common/Button";
import Form from "../common/form/Form";
import Input from "../common/form/Input";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<IFormError[]>();

  const mutation = useLogin();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          setEmail("");
          setPassword("");
          setErrors([]);
        },
        onError: (error) => {
          if (Array.isArray(error)) {
            setErrors(error);
          }
          console.log(errors);
        },
      }
    );
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
      <h3 className="text-center">Déjà inscrit ? Connecte toi</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-10" onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={errors?.find((error) => error.field === "email")?.message}
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={errors?.find((error) => error.field === "password")?.message}
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
