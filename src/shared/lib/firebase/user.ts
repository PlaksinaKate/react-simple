import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IUser } from "./user.model";

const registration = ({email, password}: IUser) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log(userCredential.user)
      // ...
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      
      // ..
    });
}

export const user = {
  registration,

}

