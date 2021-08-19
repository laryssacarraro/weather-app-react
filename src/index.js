import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Weather from "./Weather";

function App() {
  alert("Please, type a city...");
  return (
    <div className="App">
      <Weather />
       <p className="git-link"><a href="https://github.com/laryssacarraro/weather-app-react" target="_blank" rel="noreferrer">Open-sourced code</a> by <a href="https://www.linkedin.com/in/laryssa-carraro-64ab0b1a5/" target="_blank" rel="noreferrer">Laryssa Carraro</a>.</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
