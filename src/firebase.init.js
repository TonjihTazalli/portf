// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG0uHKkOj0_PU9DY11pHDtcmk6FOQCnGw",
  authDomain: "portfolio-fea2d.firebaseapp.com",
  projectId: "portfolio-fea2d",
  storageBucket: "portfolio-fea2d.appspot.com",
  messagingSenderId: "631705670244",
  appId: "1:631705670244:web:31ef1de8301bb3b28f0571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;