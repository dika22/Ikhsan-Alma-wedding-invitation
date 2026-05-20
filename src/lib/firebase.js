import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtr6HyFtsz3-A-nP2n0yfCuA16wdA7Skg",
  authDomain: "ikhsan-alma-wedding.firebaseapp.com",
  projectId: "ikhsan-alma-wedding",
  storageBucket: "ikhsan-alma-wedding.firebasestorage.app",
  messagingSenderId: "327577018549",
  appId: "1:327577018549:web:da1fab6aa117cdcd8a5efc",
  measurementId: "G-CDFDNRB6XM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
