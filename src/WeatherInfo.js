import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className = "WeatherInfo">
    <p className="TodayDate"><FormattedDate date={props.data.date}/></p>

      <h1 text style={{ textTransform: 'capitalize'}}>{props.data.city}</h1>
          

      <h2>
        <span className="main">
          <img
            src={props.data.icon}
            alt={props.data.description}
            width="100"
            className="big-icon"
          />
          <span>{props.data.temperature}°C</span>
        </span>
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>
      </h2>

      <div className="weather-conditions">
        <ul>
          <li>
            Weather description: {props.data.description}
            <span></span>
          </li>
          <li>Wind speed: {props.data.wind} Mph</li>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
      </div>
      </div>
    );
}