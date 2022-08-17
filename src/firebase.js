// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYNN5mU9TRkLGA6SzVWJ_yXmD6KXPvdko",
  authDomain: "netflix-react-yt-aa22d.firebaseapp.com",
  projectId: "netflix-react-yt-aa22d",
  storageBucket: "netflix-react-yt-aa22d.appspot.com",
  messagingSenderId: "700980173827",
  appId: "1:700980173827:web:c556e222c0d1731231c236",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
