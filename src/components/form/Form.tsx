type FormProps = {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormProps) {
  return (
    <form
      className={props.className}
      onSubmit={props.onSubmit}
      onReset={props.onReset}
    >
      {props.children}
    </form>
  );
}
