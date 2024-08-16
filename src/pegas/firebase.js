// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAllrR882gwRwrlLgU-RM4ehtIeemq_nBs",
    authDomain: "airbnb-clone-64812.firebaseapp.com",
    projectId: "airbnb-clone-64812",
    storageBucket: "airbnb-clone-64812.appspot.com",
    messagingSenderId: "1056714876242",
    appId: "1:1056714876242:web:d19138419769a4bd4d868b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const { auth, } = getAuth(app);
const db = getFirestore