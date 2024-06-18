export default function LoginForm() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
      <h3 className="text-center">Se connecter</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" />
          </div>
          <button className="btn-accent">se connecter</button>
        </form>
      </div>
    </div>
  );
}
