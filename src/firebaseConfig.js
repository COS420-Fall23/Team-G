// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtP_JxM-iUegg46a61gqaTdnk_9Dy5lrk",
  authDomain: "bearpool-78158.firebaseapp.com",
  projectId: "bearpool-78158",
  storageBucket: "bearpool-78158.appspot.com",
  messagingSenderId: "194314048273",
  appId: "1:194314048273:web:2b820511391580ddb872b0",
  measurementId: "G-R750P11FYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app); // Firestore database
export const storage = getStorage(app); // Firebase Storage

const analytics = getAnalytics(app);
