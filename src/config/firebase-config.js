// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-4z8EcchKdoxocRW8i4QjrYQNG3kZUM0",
  authDomain: "notification-web-app-4bd62.firebaseapp.com",
  projectId: "notification-web-app-4bd62",
  storageBucket: "notification-web-app-4bd62.appspot.com",
  messagingSenderId: "713480772108",
  appId: "1:713480772108:web:6ce15db0829a7344ad6c29",
  measurementId: "G-77PVZ0F646",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
