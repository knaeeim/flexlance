// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBFXEUUqhLg8DT1iotTUBPymp8Ff4n0lRc",
  authDomain: "flexlance-auth.firebaseapp.com",
  projectId: "flexlance-auth",
  storageBucket: "flexlance-auth.firebasestorage.app",
  messagingSenderId: "347188140814",
  appId: "1:347188140814:web:eda9d9cac640bf1583d55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);