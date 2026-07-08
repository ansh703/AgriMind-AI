// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc76gbmoB0hIrRD12IIxytN78426SMEsM",
  authDomain: "agrimind-ai-31362.firebaseapp.com",
  projectId: "agrimind-ai-31362",
  storageBucket: "agrimind-ai-31362.firebasestorage.app",
  messagingSenderId: "586638504177",
  appId: "1:586638504177:web:5437f502147172096cb950",
  measurementId: "G-R109C8Y3SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
