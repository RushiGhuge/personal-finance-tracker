import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDKM8XZ2bdr-Qvty1Gn6p7QXX0freDsI3w",
  authDomain: "personal-finance-tracker-af42e.firebaseapp.com",
  projectId: "personal-finance-tracker-af42e",
  storageBucket: "personal-finance-tracker-af42e.appspot.com",
  messagingSenderId: "382133252355",
  appId: "1:382133252355:web:02669cabe7e43cc270f936"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {db, auth , setDoc, doc, provider}