import React from "react";

export default function weatherForecastIcon(props) {
 let iconForecastUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`
        return (
        <div>
        <img src = {iconForecastUrl} alt = {props.data.description} width ="45"/>
        </div>
        );
    }