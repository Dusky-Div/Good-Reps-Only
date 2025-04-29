import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function signUpUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw error;
    });
}
