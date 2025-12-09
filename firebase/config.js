
// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxrsUo1kx_gXdxp25SMfd910a3iTxJIF4",
  authDomain: "ai-careerbuilder.firebaseapp.com",
  projectId: "ai-careerbuilder",
  storageBucket: "ai-careerbuilder.firebasestorage.app",
  messagingSenderId: "712415960242",
  appId: "1:712415960242:web:c8226be303abfa3baebdab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// EXPORTS
export const auth = getAuth(app);
export const db = getFirestore(app);
