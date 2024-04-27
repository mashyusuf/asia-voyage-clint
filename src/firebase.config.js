// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbEcVOXJwQYOz2BRLjAkRATF_7Dt6ob0g",
  authDomain: "asiavoage.firebaseapp.com",
  projectId: "asiavoage",
  storageBucket: "asiavoage.appspot.com",
  messagingSenderId: "967267899542",
  appId: "1:967267899542:web:a77effa20b381c42240ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

