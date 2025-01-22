// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl8u8qWtlZ4IAIocqfBk2AI-V8olTJYr0",
    authDomain: "salestial-b7aa9.firebaseapp.com",
    projectId: "salestial-b7aa9",
    storageBucket: "salestial-b7aa9.appspot.com", // Corrected storageBucket
    messagingSenderId: "137488348081",
    appId: "1:137488348081:web:9f162b06b35b32ea75c390",
    measurementId: "G-3RJ11Z7Q26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize analytics (optional and only for browser environments)
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

// Export Firebase services
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, signOut, onAuthStateChanged, addDoc, collection, getDocs, doc, getDoc };
