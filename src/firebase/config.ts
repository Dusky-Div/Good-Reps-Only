// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5wLTemyufpj8VLAlCRO0ND5Xgws-TFfw",
  authDomain: "good-reps-only.firebaseapp.com",
  projectId: "good-reps-only",
  storageBucket: "good-reps-only.firebasestorage.app",
  messagingSenderId: "701478619546",
  appId: "1:701478619546:web:60fb86587257d96d5c9223",
  measurementId: "G-NZ1REX60C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
