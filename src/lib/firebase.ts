// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeWI2D-Dk9X55w6is0eBoYZRSNPLyXHY4",
  authDomain: "zayq-1b3ee.firebaseapp.com",
  projectId: "zayq-1b3ee",
  storageBucket: "zayq-1b3ee.firebasestorage.app",
  messagingSenderId: "982781196414",
  appId: "1:982781196414:web:69841f4c02c35d8cc5c02f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
