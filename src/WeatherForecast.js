import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

useEffect(() => {
setLoaded(false);
}, [props.coordinates]); 

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

  if(loaded) {
return (
        <div className="row forecast">
            <div className="col">
                <WeatherForecastDay data = {forecast[0]}/>
            </div>
                        <div className="col">
                <WeatherForecastDay data = {forecast[1]}/>
            </div>
                        <div className="col">
                <WeatherForecastDay data = {forecast[2]}/>
            </div>
            <div className="col">
                <WeatherForecastDay data = {forecast[3]}/>
            </div>
            <div className="col">
                <WeatherForecastDay data = {forecast[4]}/>
            </div>         
        </div>
    )
  } else {
 let apiKey = "731c20f1bf00de5ac218895a9bc3e5e3";
 let longitude = props.coordinates.lon;
 let latitude = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return null;
  }
    
}