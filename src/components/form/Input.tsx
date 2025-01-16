type InputProps = {
  name: string;
  label: string;
  labelClass?: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  value?: string | number;
  inputClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  checked?: boolean;
  accept?: string;
  src?: string;
  alt?: string;
  min?: number;
  max?: number;
};

export default function Input(props: InputProps) {
  const isCheckboxOrRadio = ["checkbox", "radio"].includes(props.type);
  const flexClass = "flex-col";

  return (
    <div className={`flex ${!isCheckboxOrRadio ? flexClass : ""} gap-1 mb-3`}>
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
        checked={props.checked}
        accept={props.type === "file" ? props.accept : undefined}
        src={props.src}
        alt={props.alt}
        min={props.min}
        max={props.max}
      />
      {props.error && <p className="text-clr-alert">{props.error}</p>}
    </div>
  );
}
