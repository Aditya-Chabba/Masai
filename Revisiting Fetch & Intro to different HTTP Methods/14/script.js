const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather');
const errorMessage = document.getElementById('error-message');

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    // Validate user input
    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        weatherDisplay.innerHTML = ""; // Clear previous weather data
        return;
    }

    fetchWeather(city);
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found. Please enter a valid city name.");
        }

        const data = await response.json();
        displayWeather(data);
        errorMessage.textContent = ""; // Clear any previous error message
    } catch (error) {
        errorMessage.textContent = error.message;
        weatherDisplay.innerHTML = ""; // Clear previous weather data
    }
}

function displayWeather(data) {
    weatherDisplay.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
}
