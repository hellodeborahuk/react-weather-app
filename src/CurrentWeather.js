import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <ul>
        <li>21°C</li>
        <li>sunny</li>
        <li>
          <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png" />
        </li>
      </ul>
    </div>
  );
}
