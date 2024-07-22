// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6PmxKXYTPXNKG2FaFnldlP81cmMrSUcQ",
  authDomain: "climateproject-2da8f.firebaseapp.com",
  databaseURL: "https://climateproject-2da8f-default-rtdb.firebaseio.com",
  projectId: "climateproject-2da8f",
  storageBucket: "climateproject-2da8f.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:1234567890abcdef",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
