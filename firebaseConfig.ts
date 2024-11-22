// firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import do Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBEYVGzmzmxE9R2JJKhvs32khSVoS3cszY",
  authDomain: "robok-website.firebaseapp.com",
  projectId: "robok-website",
  storageBucket: "robok-website.firebasestorage.app",
  messagingSenderId: "608417068126",
  appId: "1:608417068126:web:4a27aa3cd9f35bef20b0cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
const db = getFirestore(app);

export { db };
