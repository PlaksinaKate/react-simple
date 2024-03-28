import { IRest } from "../../models";
import { ILabel } from "./label.model";

export function Label({ children, required, ...rest }: IRest & ILabel) {
  return (
    <label {...rest}>
      {children}
      {required ? <sup className="text-maroon">*</sup> : null}
    </label>
  );
}
