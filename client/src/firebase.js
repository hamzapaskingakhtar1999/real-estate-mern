// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "seiwa-estate.firebaseapp.com",
  projectId: "seiwa-estate",
  storageBucket: "seiwa-estate.appspot.com",
  messagingSenderId: "363228714295",
  appId: "1:363228714295:web:4cbaeb379b5847ab3136b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
