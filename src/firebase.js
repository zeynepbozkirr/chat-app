// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA2slQOqoHal-QVsv4ijXYgza4cOZOUis",
  authDomain: "chat-app-5a37e.firebaseapp.com",
  projectId: "chat-app-5a37e",
  storageBucket: "chat-app-5a37e.appspot.com",
  messagingSenderId: "715352080218",
  appId: "1:715352080218:web:a5c0e2ca340ddeda567d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
