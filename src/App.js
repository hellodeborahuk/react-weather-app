import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Toggle from "./Toggle";
import FormattedDate from "./FormattedDate";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("New York");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready === false) {
    const apiKey = "37d0f96cd930737aa442037348f7a9bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="outerdiv">
          <div
            className={"weatherapp" + (isDarkModeEnabled ? " dark-theme" : "")}
          >
            <div className="header row location-date">
              <div className="col-5">
                <h1>New York</h1>
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="col-7 d-flex flex-row justify-content-end">
                <Search />
                <Toggle toggleHandler={setIsDarkModeEnabled} />
              </div>
            </div>
            <CurrentWeather weatherData={weatherData} />
          </div>
          <div className="footer row"> </div>

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
    </div>
  );
}
