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
  const isCheckboxOrRadio = ["checkbox", "radio"].includes(props.type);
  const flexClass = "flex-col";

  return (
    <div className={`flex ${!isCheckboxOrRadio ? flexClass : ""} gap-1`}>
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
        checked={isCheckboxOrRadio && Boolean(props.value)}
      />
      {props.error && <p className="text-accent-700">{props.error}</p>}
    </div>
  );
}
