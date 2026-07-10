function recommendCrop(temp, humidity, moisture) {
    if (temp >= 25 && temp <= 35 && humidity >= 60 && moisture >= 60) {
        return "🌾 Rice";
    } else if (temp >= 20 && temp <= 30 && moisture < 60) {
        return "🌽 Maize";
    } else if (temp >= 15 && temp <= 25) {
        return "🌱 Wheat";
    } else {
        return "🌿 Cotton";
    }
}

// Example
const crop = recommendCrop(28.69, 66, 72);
document.getElementById("cropRecommendation").innerText = crop;
