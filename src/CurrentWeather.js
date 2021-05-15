import React from "react";
import "./CurrentWeather.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

export default function CurrentWeather(props) {
  if (props.weatherData.ready) {
    return (
      <div className="current-weather">
        <div className="body row">
          <div className="col-2">
            <ul className="current-weather-info">
              <li>
                <span className="temperature-number">
                  {props.weatherData.temperature}
                </span>
                <span className="temperature-unit">°C</span>
              </li>
              <li className="current-weather-description text-capitalize">
                {props.weatherData.description}
              </li>
              <li className="current-weather-icon">
                <img
                  src={props.weatherData.iconUrl}
                  alt={props.weatherData.description}
                  id="icon"
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
                <WiHumidity /> {props.weatherData.humidity}%
              </li>
              <li>
                <FaWind />
                {props.weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
