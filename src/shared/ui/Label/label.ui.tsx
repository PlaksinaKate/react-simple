import { IRest } from "../../models";
import { ILabel } from "./label.model";

export function Label({ children, ...rest }: IRest & ILabel) {
  return (
    <label {...rest}>
      {children}
    </label>
  );
}
