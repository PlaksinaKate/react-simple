import { IRest } from "../../models";
import { Label } from "../Label/label.ui";
import { IInput } from "./input.model";

export function Input({
  label,
  type = "text",
  required,
  value,
  placeholder,
  ...rest
}: IInput & IRest) {
  const wrStyles = 'bg-white rounded-xl border border-light-gray pl-3 pr-3.5 py-4 w-min transition-all duration-300 ease-out has-[:focus]:border-green has-[:focus]:py-2'
  const labelStyles = 'text-dark-gray text-base font-semibold transition-all duration-300 ease-out has-[:focus]:text-xs has-[:focus]:font-normal';
  const inputStyles = 'text-dark-gray text-base border-0 outline-none transition-all duration-300 ease-out	has-[:focus]:'
  
  return (
    <div className={wrStyles}>
      <Label required={required} className={labelStyles}>{label}</Label>
      <input className={inputStyles} type={type} value={value} placeholder={placeholder} required {...rest} />
    </div>
  );
}
