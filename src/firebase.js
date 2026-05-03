// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// ⚠️ PASTE YOUR FIREBASE CONFIG HERE (from Step 1)
export const firebaseConfig = {
  apiKey: "AIzaSyBXmOKHmsFbS5g4UDPsAZxr5udY9gN-mpA",
  authDomain: "smartshop-e3712.firebaseapp.com",
  projectId: "smartshop-e3712",
  storageBucket: "smartshop-e3712.firebasestorage.app",
  messagingSenderId: "186197466931",
  appId: "1:186197466931:web:6eea40ccb4e4f1a6e22846",
  measurementId: "G-4WB8R29SVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
