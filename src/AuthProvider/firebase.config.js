// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lZp0buOa4TiBGrUfXiMyFlFxSgdQhnA",
  authDomain: "fahim-khandakar.firebaseapp.com",
  projectId: "fahim-khandakar",
  storageBucket: "fahim-khandakar.appspot.com",
  messagingSenderId: "686699527405",
  appId: "1:686699527405:web:c970ce390b08def58d60e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
