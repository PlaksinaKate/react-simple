import { IRest } from "../../models";
import { Label } from "../Label/label.ui";
import { IInput } from "./input.model";

export function Input({
  label,
  type = "text",
  value,
  error,
  ...rest
}: IInput & IRest) {
  const labelStyles = "group relative block mb-6";
  const spanStyles =
    "absolute top-4 z-10 left-4 text-dark-gray text-base font-semibold transition-all duration-300 ease-out group-has-[:focus]:text-xs group-has-[:focus]:font-normal group-has-[:focus]:top-2";
  const inputStyles =
    "w-full relative z-0 bg-white rounded-xl text-black border border-light-gray pl-3 pr-3.5 pt-6 pb-2 transition-all duration-300 ease-out focus:border-green text-dark-gray text-base outline-none transition-all duration-300 ease-out";

  const isErrorStyles = error ? "border-red" : null;
  const errorStyles = "text-red text-sm m-0.5";

  return (
    <>
      <Label className={labelStyles}>
        <span className={spanStyles}>{label}</span>
        <input
          className={`${inputStyles} ${isErrorStyles}`}
          type={type}
          value={value}
          {...rest}
        />
      </Label>
      <div className={errorStyles}>{error}</div>
    </>
  );
}
