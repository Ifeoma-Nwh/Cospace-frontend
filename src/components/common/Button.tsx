type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
