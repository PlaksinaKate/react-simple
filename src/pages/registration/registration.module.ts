import { IUser } from "../../shared/lib/firebase/user.model";

export interface IRegistrationForm extends IUser {
  repeatPassword: string,
}