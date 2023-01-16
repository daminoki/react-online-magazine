// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOqnT5uUZq5FXxIyuTg3_dAilLVaFF4LQ",
  authDomain: "react-online-magazine.firebaseapp.com",
  projectId: "react-online-magazine",
  storageBucket: "react-online-magazine.appspot.com",
  messagingSenderId: "360469384782",
  appId: "1:360469384782:web:ed4560083128b2e8ca7d1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);