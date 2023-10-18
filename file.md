// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAydg-wRcMso_xi1TMYMD5R3zTTVzQHCI0",
  authDomain: "reals-6ea6c.firebaseapp.com",
  projectId: "reals-6ea6c",
  storageBucket: "reals-6ea6c.appspot.com",
  messagingSenderId: "556676637626",
  appId: "1:556676637626:web:cec4e5ae64cc9fdae53383",
  measurementId: "G-XWQPZBYLFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);