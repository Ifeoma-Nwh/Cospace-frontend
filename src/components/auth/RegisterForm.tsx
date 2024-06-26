import { useState } from "react";
import Button from "../common/Button";
import Form from "../common/form/Form";
import Input from "../common/form/Input";
import { useRegister } from "../../hooks/useAuth";
import { IFormError } from "../../interfaces/formError";

export default function RegisterForm() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<IFormError[]>();

  const mutation = useRegister();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(
      { fullName, email, password },
      {
        onSuccess: () => {
          setFullName("");
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
      <h3 className="text-center">Pas de compte ? Inscris-toi</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-10" onSubmit={handleRegister}>
          <Input
            label="Nom"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors?.find((error) => error.field === "fullName")?.message}
          />
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
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={errors?.find((error) => error.field === "password")?.message}
          />
          <Button
            type="submit"
            className="btn-primary"
            disabled={mutation.isPending}
          >
            Créer mon compte
          </Button>
        </Form>
      </div>
    </div>
  );
}
