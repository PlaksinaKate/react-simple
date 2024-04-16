import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IUser } from "./user.model";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user-slice";

const registration = async ({
  email,
  password,
}: IUser): Promise<string | UserCredential> => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const { email, uid, refreshToken } = userCredential.user;
      dispatch(
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

  return result;
};

const login = async ({
  email,
  password,
}: IUser): Promise<string | UserCredential> => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const result = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const { email, uid, refreshToken } = userCredential.user;
      dispatch(
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

  return result;
};

export const user = {
  registration,
  login,
};
