// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realeastate-demo.firebaseapp.com",
  projectId: "realeastate-demo",
  storageBucket: "realeastate-demo.appspot.com",
  messagingSenderId: "379640535786",
  appId: "1:379640535786:web:fae63ed628b50c7db31593"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);