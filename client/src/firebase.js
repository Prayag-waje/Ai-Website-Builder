// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-webbuilder-4a7b2.firebaseapp.com",
  projectId: "ai-webbuilder-4a7b2",
  storageBucket: "ai-webbuilder-4a7b2.firebasestorage.app",
  messagingSenderId: "569137052074",
  appId: "1:569137052074:web:5ed578dc5a3c21601153d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
