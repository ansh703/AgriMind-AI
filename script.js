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
const API_KEY = "2593969b2bda90149a077bf597ee0d32";
const CITY = "Nagpur"; // Change this to your city if you want

async function getWeather() {
  try {
    const response = await fetch(
      https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric
    );

    const data = await response.json();

    document.getElementById("temperature").textContent =
      data.main.temp + "°C";

    document.getElementById("humidity").textContent =
      data.main.humidity + "%";

  } catch (error) {
    console.error("Weather Error:", error);
  }
}

getWeather();
