// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAFEq0sFkSQ0_29ueilTTnOtCo9TO_rrY",
  authDomain: "netflix-gpt-bd3a3.firebaseapp.com",
  projectId: "netflix-gpt-bd3a3",
  storageBucket: "netflix-gpt-bd3a3.firebasestorage.app",
  messagingSenderId: "277955980390",
  appId: "1:277955980390:web:59a79508711cd5c96111a7",
  measurementId: "G-YWF8H26D3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
getAnalytics(app);
export const auth = getAuth();
