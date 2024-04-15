import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { IUser } from "./user.model";

const registration = async ({email, password}: IUser): Promise<string | UserCredential> => {
  const auth = getAuth();
  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      return userCredential;
    })
    .catch((error) => {
      const errorMessage: string = error.message;
      return errorMessage
    });

    return result
}

const login = async ({email, password}: IUser): Promise<string | UserCredential> => {
  const auth = getAuth();
  const result = signInWithEmailAndPassword(auth, email, password)
  .then((userCredential: UserCredential) => {
    return userCredential;
  })
  .catch((error) => {
    const errorMessage: string = error.message;
    return errorMessage;
  });

    return result;
}

export const user = {
  registration,
  login
}

