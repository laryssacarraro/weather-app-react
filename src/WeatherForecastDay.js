import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherForecastDay(props) {

function day() {
let weekDay = new Date(props.data.dt * 1000);

let day = weekDay.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

return days[day];
}

return (
    <div>
        <div className = "weatherForecast-day">
                {day()}
                </div>
                    <div className = "weatherForecast-icon">
                    <WeatherForecastIcon data = {props.data.weather[0]}/>
                </div>
                   <div className = "weatherForecast-temperatures">
                       <span className = "weatherForecast-temperature-max">
                {Math.round(props.data.temp.max)}° / {""}
                </span> 
                       <span className = "weatherForecast-temperature-min">
                 {Math.round(props.data.temp.min)}°
                </span>
                </div>    
    </div>
)
}