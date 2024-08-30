// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_APP_MESSAGING_SENDER,
  appId:import.meta.env.VITE_APP_APP_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyAm_0OndWDikXC2QdHFDoL26d97xG7CY1A
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-clone-58d58.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-clone-58d58
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-clone-58d58.appspot.com
// REACT_APP_MESSAGING_SENDER=975570738482
// REACT_APP_APP_ID=1:975570738482:web:d0cab3157c7b6640ee0b2b

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
export const db = getFirestore(app);