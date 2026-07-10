import { db, auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

console.log("Firebase connected successfully!", db);

// Smooth scroll
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Dashboard button
const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#dashboard").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Weather API
const API_KEY = "2593969b2bda90149a077bf597ee0d32";
const CITY = "Nagpur";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    // Temperature
    const temperature = document.getElementById("temperature");
    if (temperature) {
      temperature.textContent = data.main.temp + "°C";
    }

    // Humidity
    const humidity = document.getElementById("humidity");
    if (humidity) {
      humidity.textContent = data.main.humidity + "%";
    }

    // AI Crop Recommendation
    const cropRecommendation = document.getElementById("cropRecommendation");

    if (cropRecommendation) {
      let crop;

      if (data.main.temp >= 25 && data.main.humidity >= 60) {
        crop = "🌾 Rice";
      } else if (data.main.temp >= 20) {
        crop = "🌽 Maize";
      } else {
        crop = "🌱 Wheat";
      }

      cropRecommendation.textContent = crop;
    }

  } catch (error) {
    console.error("Weather Error:", error);
  }
}

getWeather();
