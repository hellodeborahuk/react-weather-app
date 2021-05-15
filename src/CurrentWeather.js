import React, { useState } from "react";
import "./CurrentWeather.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa";
import axios from "axios";

export default function CurrentWeather(props) {
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
  }

  if (weatherData.ready) {
    return (
      <div className="current-weather">
        <div className="body row">
          <div className="col-2">
            <ul className="current-weather-info">
              <li>
                <span className="temperature-number">
                  {weatherData.temperature}
                </span>
                <span className="temperature-unit">°C</span>
              </li>
              <li className="current-weather-description text-capitalize">
                {weatherData.description}
              </li>
              <li className="current-weather-icon">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
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
                <WiHumidity /> {weatherData.humidity}%
              </li>
              <li>
                <FaWind />
                {weatherData.wind} km/h
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
    const apiKey = "37d0f96cd930737aa442037348f7a9bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
