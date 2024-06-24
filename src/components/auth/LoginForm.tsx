import Button from "../common/Button";
import Form from "../common/Form";
import Input from "../common/Input";

export default function LoginForm() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
      <h3 className="text-center">Déjà inscrit ? Connecte toi</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-6">
          <Input label="Email" type="email" name="email" />
          <Input label="Mot de passe" type="password" name="password" />
          <Button type="submit" className="btn-accent">
            Se connecter
          </Button>
        </Form>
      </div>
    </div>
  );
}
