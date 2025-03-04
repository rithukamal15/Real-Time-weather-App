document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const weatherInfo = document.getElementById("weatherInfo");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Weather API call
  searchBtn.addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if (city === "") return alert("Please enter a city!");

      try {
          const apiKey = "0a1ebb9193516266538ec96ab3d53a68"; // Replace with your OpenWeather API key
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
          const data = await response.json();

          if (data.cod !== 200) {
              alert("City not found! Try again.");
              return;
          }

          cityName.textContent = data.name;
          temperature.textContent = `🌡️ Temperature: ${data.main.temp}°C`;
          description.textContent = `🌤️ Condition: ${data.weather[0].description}`;

          weatherInfo.classList.remove("hidden");
      } catch (error) {
          alert("Failed to fetch weather. Check your internet!");
      }
  });

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  });
});
