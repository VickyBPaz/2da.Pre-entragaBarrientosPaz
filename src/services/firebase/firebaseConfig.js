
import { getFirestore } from 'firebase/firestore'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGlha5qXu1VdUos2IxRo6oPU9poyPGZJE",
  authDomain: "ecommerce-ca9ad.firebaseapp.com",
  projectId: "ecommerce-ca9ad",
  storageBucket: "ecommerce-ca9ad.appspot.com",
  messagingSenderId: "908033938056",
  appId: "1:908033938056:web:f1b57371a5fe043c70c53d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
