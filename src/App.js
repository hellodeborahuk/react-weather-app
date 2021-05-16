import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Toggle from "./Toggle";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

     const apiKey = "37d0f96cd930737aa442037348f7a9bd";


  const searchByCity = (city) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  const searchByLocation = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(locationUrl).then(handleResponse);
  }

  
   if (weatherData.ready === false) {
     searchByCity("London");
   }

  return (
    <div className="App">
      <div className="container">
        <div className="outerdiv">
          <div
            className={"weatherapp" + (isDarkModeEnabled ? " dark-theme" : "")}
          >
            <div className="background-image-area">
              <div className="header row location-date">
                <div className="col-5">
                  <h1>{weatherData.ready ? weatherData.city : "Loading..."}</h1>
                  <FormattedDate date={weatherData.date} />
                </div>
                <div className="col-7 d-flex flex-row justify-content-end">
                  <Search
                    searchByCity={searchByCity}
                    searchByLocation={searchByLocation}
                  />
                  <Toggle toggleHandler={setIsDarkModeEnabled} />
                </div>
              </div>
              <CurrentWeather weatherData={weatherData} />
            </div>
            <WeatherForecast />
          </div>

          <div className="footer row"> </div>
        </div>
        <p className="github-link">
          <a
            href="https://github.com/hellodeborahuk/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Debbie Dann
        </p>
      </div>
    </div>
  );
}
