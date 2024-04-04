import { IRest } from "../../models";
import { ITitle } from "./title.module";

export function Title({ children, ...rest }: ITitle & IRest) {
  const titleStyles = 'text-2xl	font-bold text-center	mb-9'
  return <h1 className={titleStyles} {...rest}>{children}</h1>;
}
