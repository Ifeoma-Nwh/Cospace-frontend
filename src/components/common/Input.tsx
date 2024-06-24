type InputProps = {
  name: string;
  label: string;
  labelClass?: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  inputClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className={props.labelClass}>
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.name}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.inputClass}
      />
      {props.error && <p className="text-accent-700">{props.error}</p>}
    </div>
  );
}
