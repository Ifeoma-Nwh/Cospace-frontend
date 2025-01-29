type SelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
};

export default function Select(props: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} id={props.name} onChange={props.onChange}>
        <option value="">Select an option</option>
        {props.options.map((option) => (
          <option
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
