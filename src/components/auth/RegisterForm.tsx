import Button from "../common/Button";
import Form from "../common/Form";
import Input from "../common/Input";

export default function RegisterForm() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
      <h3 className="text-center">Pas de compte ? Inscris-toi</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-6">
          <Input label="Nom" name="fullName" type="text" />
          <Input label="Email" name="email" type="email" />
          <Input label="Mot de passe" name="password" type="password" />
          <Button type="submit" className="btn-accent">
            Créer mon compte
          </Button>
        </Form>
      </div>
    </div>
  );
}
