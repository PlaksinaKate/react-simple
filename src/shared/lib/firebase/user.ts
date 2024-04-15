import { getAuth, createUserWithEmailAndPassword, UserCredential, User } from "firebase/auth";
import { IUser } from "./user.model";

const registration = async ({email, password}: IUser): Promise<string | User> => {
  const auth = getAuth();
  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      const errorMessage: string = error.message;
      return errorMessage
    });

    return result
}

export const user = {
  registration,

}

