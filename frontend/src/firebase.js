// Slava Mazhaev's (@slavocado) Firebase config

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDobSCUuXpPf3EV7KkbSzd74yngu6SqvMI",
  authDomain: "la-app-2021.firebaseapp.com",
  projectId: "la-app-2021",
  storageBucket: "la-app-2021.appspot.com",
  messagingSenderId: "932540866082",
  appId: "1:932540866082:web:9bc6f036fa2dada579747b",
  measurementId: "G-BFF5EDR01K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const projectFirestore = getFirestore();

export { projectFirestore, auth, provider }