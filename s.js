// Shaharlar uchun ob-havo ma'lumotlari (demo ma'lumotlar)
const weatherData = {
    "Toshkent": {
        temp: 28,
        condition: "Quyoshli",
        icon: "☀️",
        humidity: 45,
        wind: 12,
        feels_like: 26
    },
    "Samarqand": {
        temp: 26,
        condition: "Ochiq",
        icon: "🌤️",
        humidity: 48,
        wind: 10,
        feels_like: 24
    },
    "Buxoro": {
        temp: 32,
        condition: "Issiq",
        icon: "🔥",
        humidity: 35,
        wind: 14,
        feels_like: 30
    },
    "Namangan": {
        temp: 27,
        condition: "Bulutli",
        icon: "☁️",
        humidity: 52,
        wind: 8,
        feels_like: 25
    },
    "Qarshi": {
        temp: 30,
        condition: "Quyoshli",
        icon: "☀️",
        humidity: 40,
        wind: 11,
        feels_like: 28
    }
};

// DOM elementlari
const citySelect = document.getElementById('citySelect');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');

// Ob-havo ma'lumotini ko'rsatish
function showWeather(cityName) {
    const data = weatherData[cityName];
    
    if (!data) {
        weatherInfo.innerHTML = '<p style="color: red;">Ma\'lumot topilmadi!</p>';
        return;
    }
    
    const html = `
        <div class="weather-main">
            <div class="city-name" style="font-size: 24px; font-weight: bold; color: #667eea;">📍 ${cityName}</div>
            <div class="weather-icon">${data.icon}</div>
            <div class="temperature">
                ${data.temp}<span>°C</span>
            </div>
            <div class="weather-condition">${data.condition}</div>
            
            <div class="weather-details">
                <div class="detail-card">
                    <div class="detail-icon">🌡️</div>
                    <div class="detail-label">His qilish</div>
                    <div class="detail-value">${data.feels_like}°C</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💧</div>
                    <div class="detail-label">Namlik</div>
                    <div class="detail-value">${data.humidity}%</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">💨</div>
                    <div class="detail-label">Shamol</div>
                    <div class="detail-value">${data.wind} km/soat</div>
                </div>
                <div class="detail-card">
                    <div class="detail-icon">📅</div>
                    <div class="detail-label">Kun</div>
                    <div class="detail-value">${new Date().toLocaleDateString('uz-UZ')}</div>
                </div>
            </div>
        </div>
    `;
    
    weatherInfo.innerHTML = html;
}

// Tugma bosilganda
searchBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    showWeather(selectedCity);
});

// Sahifa yuklanganda Toshkentni ko'rsatish
window.addEventListener('load', () => {
    showWeather('Toshkent');
    console.log('✅ Ob-havo ilovasi ishga tushdi!');
});