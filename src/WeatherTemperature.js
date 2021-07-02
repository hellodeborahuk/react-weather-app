import React from "react";

export default function WeatherTemperature(props) {
return (
  <div className="WeatherTemperature">
    <span className="temperature-number">
      {props.celsius}
      <span className="temperature-unit">°C</span>
    </span>
  </div>
);
    
}
