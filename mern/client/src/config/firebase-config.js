// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW7t8KP8JMf27ByKjg8tEIgDBJBmWMLEg",
  authDomain: "annashraya-9baa5.firebaseapp.com",
  projectId: "annashraya-9baa5",
  storageBucket: "annashraya-9baa5.appspot.com",
  messagingSenderId: "835922314381",
  appId: "1:835922314381:web:3b8a65ee489c0ee38c8ec4",
  measurementId: "G-1316HMK7Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);