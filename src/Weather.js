import React from "react";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 28,
    date: "Monday,July 26 06:52 PM",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Sunny",
    windSpeed: 5,
    humidity: 78
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for city..."
          autofocus="on"
          autocomplete="off"
          id="search-text-input"
        />

        <button>🔎</button>

        <button>📍</button>
      </form>

      <p className="TodayDate">{weatherData.date}</p>

      <h1>{weatherData.city}</h1>

      <h2>
        <span className="main">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            width="100"
            className="big-icon"
          />
          <span>{weatherData.temperature}°C</span>
        </span>
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>
      </h2>

      <div className="weather-conditions">
        <ul>
          <li>
            Weather description: {weatherData.description}
            <span></span>
          </li>
          <li>Wind speed: {weatherData.windSpeed} Mph</li>
          <li>Humidity: {weatherData.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}
