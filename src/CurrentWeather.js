import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <ul className="current-weather-info">
        <li>
          <span className="temperature-number">21</span>
          <span className="temperature-unit">°C</span>
        </li>
        <li className="current-weather-description">sunny</li>
        <li className="current-weather-icon">
          <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png" alt="sunny" />
        </li>
      </ul>
    </div>
  );
}
