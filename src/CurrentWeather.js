import React, { useState } from "react";
import "./CurrentWeather.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa";


export default function CurrentWeather(props) {
  /*
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      date: "Tuesday 6th May, 20:45",
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }*/

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
              <li>
                <FaCloudRain />
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
