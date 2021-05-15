import React from "react";
import "./CurrentWeather.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa";

export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <div className="body row">
        <div className="col-2">
          <ul className="current-weather-info">
            <li>
              <span className="temperature-number">21</span>
              <span className="temperature-unit">°C</span>
            </li>
            <li className="current-weather-description">sunny</li>
            <li className="current-weather-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="sunny"
              />
            </li>
          </ul>
        </div>
        <div className="col-8">
          <img
            src="media/undraw_japan_ubgk.svg"
            alt="a tree with the sun behind it"
            width="100%"
          />
        </div>
        <div className="col-2">
          <ul className="current-weather-description">
            <li>
              <WiHumidity />
            </li>
            <li>
              <FaWind />
            </li>
            <li>
              <FaCloudRain />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
