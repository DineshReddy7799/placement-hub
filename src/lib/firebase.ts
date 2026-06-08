// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your real production Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQepnT_KGMoK3UtFYZOTU_685_8ZgVsyg",
  authDomain: "placement-portal-8541a.firebaseapp.com",
  projectId: "placement-portal-8541a",
  storageBucket: "placement-portal-8541a.firebasestorage.app",
  messagingSenderId: "910604295512",
  appId: "1:910604295512:web:d12eec69817cf05249192d",
  measurementId: "G-T561N7ZKZL"
};

// Initialize Firebase safely for Next.js SSR (Server-Side Rendering)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export services so they can be used across your application pages
export const db = getFirestore(app);
export const auth = getAuth(app);