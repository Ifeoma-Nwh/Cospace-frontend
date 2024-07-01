import { useState } from "react";
import Button from "../common/Button";
import Form from "../form/Form";
import Input from "../form/Input";
import { useGetMe, useRegister } from "../../hooks/useAuth";
import { IFormError } from "../../interfaces/formError";
import useToast from "../../contexts/toast/useToast";
import useAuthContext from "../../contexts/auth/useAuthContext";

export default function RegisterForm() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<IFormError[]>();

  const authContext = useAuthContext();
  const query = useGetMe();

  const mutation = useRegister();
  const toast = useToast();

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
          toast?.success("Compte crée avec succès !");
        },
        onError: (error) => {
          if (Array.isArray(error)) {
            setErrors(error);
          }
          if (errors?.length === 1) {
            toast?.error(errors[0].message);
          }
          console.log(errors);
        },
      }
    );
  };

  if (query.isSuccess && query.data) {
    authContext?.dispatch({ type: "SET_USER", payload: query.data });
  }

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
            error={
              errors?.find((error) => error.field === "fullName") &&
              "Minimum 3 caractères"
            }
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={
              errors?.find((error) => error.field === "email") &&
              "L'email existe déjà ou est invalide"
            }
          />
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={
              errors?.find((error) => error.field === "password") &&
              "Minimum 8 caractères"
            }
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
