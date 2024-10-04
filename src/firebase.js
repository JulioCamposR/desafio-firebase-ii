// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfRDWzMu4dVcxr0wxWYg1e3W1vtHhpg1w",
  authDomain: "desafio-firebase-ii-ae101.firebaseapp.com",
  projectId: "desafio-firebase-ii-ae101",
  storageBucket: "desafio-firebase-ii-ae101.appspot.com",
  messagingSenderId: "903258576499",
  appId: "1:903258576499:web:cf420e450b20f34b96bc06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };