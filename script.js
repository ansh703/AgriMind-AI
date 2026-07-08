import { db } from "./firebase.js";

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
