import { auth, db } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(email, username, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  // store extra user data
  await setDoc(doc(db, "users", user.uid), {
    email,
    username,
    createdAt: Date.now(),
  });

  return user;
}
