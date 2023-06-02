// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhMfJmLGkNzWFSFAB1tEELWUpuMFgYwtI",
  authDomain: "travel-fbddb.firebaseapp.com",
  projectId: "travel-fbddb",
  storageBucket: "travel-fbddb.appspot.com",
  messagingSenderId: "788173470054",
  appId: "1:788173470054:web:d28dacfd0e4a0d4e5470a7",
  measurementId: "G-832W6XKB8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);