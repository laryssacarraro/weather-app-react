import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";



export default function Weather(props) {
    const [forecastData, setForecastData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);

    function displayForecast(response) {
    setForecastData({
    loaded: true,  
    coordinates: response.data.coord,
    temperature: Math.round(response.data.main.temp),
    date: new Date(response.data.dt * 1000),
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    city: response.data.name
  });
}

function search() {
  let apiKey = "731c20f1bf00de5ac218895a9bc3e5e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function updateCity(event) {
  setCity(event.target.value);
}


  if(forecastData.loaded) {
  return ( <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Search for city..."
          autoFocus="on"
          autoComplete="off"
          onChange={updateCity}
        />
        <button>🔎</button>
      </form>
      <WeatherInfo data={forecastData} coordinates = {forecastData.coordinates}/>
    </div>
  )
  } else {
      search();
      return "Loading...";
  }

  } 
  
 


  

  