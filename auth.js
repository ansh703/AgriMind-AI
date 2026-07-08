import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBc76gbmoB0hIrRD12IIxytN78426SMEsM",
  authDomain: "agrimind-ai-31362.firebaseapp.com",
  projectId: "agrimind-ai-31362",
  storageBucket: "agrimind-ai-31362.firebasestorage.app",
  messagingSenderId: "586638504177",
  appId: "1:586638504177:web:5437f502147172096cb950",
  measurementId: "G-R109C8Y3SB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("signup").addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    message.textContent = "✅ Account created successfully!";
  } catch (error) {
    message.textContent = error.message;
  }
});

document.getElementById("login").addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    message.textContent = "✅ Login successful!";
    window.location.href = "index.html";
  } catch (error) {
    message.textContent = error.message;
  }
});
