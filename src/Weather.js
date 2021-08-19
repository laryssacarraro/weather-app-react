import React, { useState } from "react";
import axios from "axios";


export default function Weather() {
    const [forecast, setForecast] = useState({});
    const [city, setCity] = useState("");

    function displayForecast(response) {
    
    setForecast({
    temperature: Math.round(response.data.main.temp),
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed)
  });
}

  function handleSubmit(event) {
      event.preventDefault();
      let apiKey = `ca96a46b83f0206010d93234cc8d803f`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(displayForecast);

  }


  function updateCity(event) {
    setCity(event.target.value);

  }
  

  let weatherApp = <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Search for city..."
          autoFocus="on"
          autoComplete="off"
          onChange = {updateCity}
        />

        <button>🔎</button>

        <button>📍</button>
      </form>

      <p className="TodayDate"></p>

      <h1 Text style={{ textTransform: 'capitalize'}}>{city}</h1>
          

      <h2>
        <span className="main">
          <img
            src={forecast.icon}
            alt={forecast.description}
            width="100"
            className="big-icon"
          />
          <span>{forecast.temperature}°C</span>
        </span>
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>
      </h2>

      <div className="weather-conditions">
        <ul>
          <li>
            Weather description: {forecast.description}
            <span></span>
          </li>
          <li>Wind speed: {forecast.wind} Mph</li>
          <li>Humidity: {forecast.humidity}%</li>
        </ul>
      </div>
    </div>;

return weatherApp;

  } 
  



  

  