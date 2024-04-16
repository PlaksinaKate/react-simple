import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { IUser } from "./user.model";
import { store } from "../redux/store";
import { setUser } from "../redux/slices/user-slice";

const registration = async ({
  email,
  password,
}: IUser): Promise<User | string> => {
  const auth = getAuth();

  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const { email, uid, refreshToken } = userCredential.user;
      store.dispatch(
        setUser({
          email,
          id: uid,
          token: refreshToken,
        })
      );
      return userCredential.user;
    })
    .catch((error) => {
      const errorMessage: string = error.message;
      return errorMessage;
    });
};

const login = async ({
  email,
  password,
}: IUser): Promise<string | UserCredential> => {
  const auth = getAuth();

  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const { email, uid, refreshToken } = userCredential.user;
      store.dispatch(
        setUser({
          email,
          id: uid,
          token: refreshToken,
        })
      );
      return userCredential;
    })
    .catch((error) => {
      const errorMessage: string = error.message;
      return errorMessage;
    });
};

export const user = {
  registration,
  login,
};
