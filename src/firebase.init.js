// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNm0Zrx1ptK7doo1w7nMouH1s4bBRQV1A",
  authDomain: "electronics-project-4b8d0.firebaseapp.com",
  projectId: "electronics-project-4b8d0",
  storageBucket: "electronics-project-4b8d0.appspot.com",
  messagingSenderId: "714059707342",
  appId: "1:714059707342:web:9533dbc0cba0cb83a4f19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;