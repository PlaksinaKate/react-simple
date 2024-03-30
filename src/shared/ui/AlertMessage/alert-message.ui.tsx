import { IRest } from "../../models";
import { AlertMessageIcon, CloseIcon } from "../Icons";
import { IAlertMessage } from "./alert-message.module";

export function AlertMessage({ message, ...rest }: IAlertMessage & IRest) {
  const wrStyles = 'absolute flex flex-row rounded-xl bg-light-yellow pt-1 pr-1 pb-3 p-2 max-w-56';
  const messageStyles = 'basis-3/4 text-xs';
  const alertMessageIconStyles = 'basis-1/4';
  const closeIconStyles = 'cursor-pointer'

  return (
    <div className={wrStyles} {...rest}>
      <AlertMessageIcon className={alertMessageIconStyles}/>
      <div className={messageStyles}>{message}</div>
      <CloseIcon className={closeIconStyles}/>
    </div>
  );
}
