<<<<<<< HEAD
=======
// firebaseConfig.js
>>>>>>> 717b8b8cc883332e2ee93133b4be5962fd5a858e
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import necessário para o Firestore

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
=======
  apiKey: "AIzaSyBEYVGzmzmxE9R2JJKhvs32khSVoS3cszY",
  authDomain: "robok-website.firebaseapp.com",
  projectId: "robok-website",
  storageBucket: "robok-website.firebasestorage.app",
  messagingSenderId: "608417068126",
  appId: "1:608417068126:web:4a27aa3cd9f35bef20b0cf"
>>>>>>> 717b8b8cc883332e2ee93133b4be5962fd5a858e
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
const db = getFirestore(app);

export { db };
