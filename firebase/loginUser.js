// firebase/loginUser.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function loginUser(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}
