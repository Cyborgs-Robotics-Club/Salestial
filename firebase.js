// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl8u8qWtlZ4IAIocqfBk2AI-V8olTJYr0",
    authDomain: "salestial-b7aa9.firebaseapp.com",
    projectId: "salestial-b7aa9",
    storageBucket: "salestial-b7aa9.firebasestorage.app",
    messagingSenderId: "137488348081",
    appId: "1:137488348081:web:9f162b06b35b32ea75c390",
    measurementId: "G-3RJ11Z7Q26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
const analytics = getAnalytics(app);
