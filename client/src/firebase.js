// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "myproject-ec846.firebaseapp.com",
  projectId: "myproject-ec846",
  storageBucket: "myproject-ec846.appspot.com",
  messagingSenderId: "409824948766",
  appId: "1:409824948766:web:e21efa548339de1d90f40f",
  measurementId: "G-RQBX9TKX7Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
