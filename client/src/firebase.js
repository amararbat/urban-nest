// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a5b6e.firebaseapp.com",
  projectId: "real-estate-a5b6e",
  storageBucket: "real-estate-a5b6e.appspot.com",
  messagingSenderId: "278622521586",
  appId: "1:278622521586:web:f9afb6a5107f5ef27ee86b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

