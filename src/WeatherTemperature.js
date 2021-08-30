import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if(unit === "celsius") {
return (
    <span className="weatherTemperature">
          <span>{props.celsius}°C</span>
        <span className="units">
          <a href="/">°C</a> |<a href="/" onClick={showFahrenheit}>°F</a></span>
    </span>
);
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
    <span className="weatherTemperature">
          <span>{Math.round(fahrenheit)}°F</span>
        <span className="units">
          <a href="/"  onClick={showCelsius}>°C</a> |<a href="/">°F</a></span>
    </span>
);
}

}