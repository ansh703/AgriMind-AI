import { db, auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});
console.log("Firebase connected successfully!", db);// Smooth scroll for navigation

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        if(this.getAttribute('href').startsWith("#")){

            e.preventDefault();

            document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior:'smooth'
            });

        }

    });
});


// Launch Dashboard Button

const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#dashboard").scrollIntoView({
      behavior: "smooth"
    });
  });
}
