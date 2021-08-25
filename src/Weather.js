import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
    const [forecastData, setForecastData] = useState({ loaded: false });

    function displayForecast(response) {
    setForecastData({
    loaded: true,  
    temperature: Math.round(response.data.main.temp),
    date: new Date(response.data.dt * 1000),
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    city: response.data.name
  });
}


  if(forecastData.loaded) {
  return ( <div className="Weather">
      <form className="search-form">
        <input
          type="Search"
          placeholder="Search for city..."
          autoFocus="on"
          autoComplete="off"
        />

        <button>🔎</button>

        <button>📍</button>
      </form>

      <p className="TodayDate"><FormattedDate date={forecastData.date}/></p>

      <h1 text style={{ textTransform: 'capitalize'}}>{forecastData.city}</h1>
          

      <h2>
        <span className="main">
          <img
            src={forecastData.icon}
            alt={forecastData.description}
            width="100"
            className="big-icon"
          />
          <span>{forecastData.temperature}°C</span>
        </span>
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>
      </h2>

      <div className="weather-conditions">
        <ul>
          <li>
            Weather description: {forecastData.description}
            <span></span>
          </li>
          <li>Wind speed: {forecastData.wind} Mph</li>
          <li>Humidity: {forecastData.humidity}%</li>
        </ul>
      </div>
    </div>
  )
  } else {
      let apiKey = `731c20f1bf00de5ac218895a9bc3e5e3`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayForecast);

      return "Loading...";
  }

  } 
  
 


  

  