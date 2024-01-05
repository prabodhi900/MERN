// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-68899.firebaseapp.com",
  projectId: "mern-estate-68899",
  storageBucket: "mern-estate-68899.appspot.com",
  messagingSenderId: "526618487623",
  appId: "1:526618487623:web:a55385d5e256444d25fa62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);