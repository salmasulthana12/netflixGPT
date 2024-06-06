// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYaClhvAZAdiz2I1Eortvfmldo--MAylg",
  authDomain: "netflixgpt-d6b43.firebaseapp.com",
  projectId: "netflixgpt-d6b43",
  storageBucket: "netflixgpt-d6b43.appspot.com",
  messagingSenderId: "595887466254",
  appId: "1:595887466254:web:ec0dc9222d7b06687c995f",
  measurementId: "G-VCF5J55F79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();