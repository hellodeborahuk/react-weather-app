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

function fahrenheitTemp() {
    return Math.round((props.celsius * 9) / 5 + 32);
}
if (unit === "celsius") {
return (
<div className="WeatherTemperature">
    <span className="temperature-number">{props.celsius}</span>
    <span className="temperature-unit">
      °C |{" "}
      <a href="/" onClick={showFahrenheit}>
        °F
      </a>  
    </span>
  </div>
);
} else {
    return (
    
      <div className="WeatherTemperature">
        <span className="temperature-number">{fahrenheitTemp()}</span>
        <span className="temperature-unit">
          <a href="/" onClick={showCelsius}>
            °C</a> | °F
        </span>
      </div>
    );
}
    
}