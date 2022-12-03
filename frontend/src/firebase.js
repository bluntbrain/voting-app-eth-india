// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ZvUYj7hVsf7zctyX6Vfzy5b4JItRLmc",
  authDomain: "voting-app-eth-india.firebaseapp.com",
  projectId: "voting-app-eth-india",
  storageBucket: "voting-app-eth-india.appspot.com",
  messagingSenderId: "274014619250",
  appId: "1:274014619250:web:35d8e52dafc20e5dc024eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app)
