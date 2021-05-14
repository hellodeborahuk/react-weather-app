import React from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherDescription from "./CurrentWeatherDescription";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <div className="header row">
            <div className="col-5">
              <h1>London</h1>
              <p>Tuesday 6th May, 20:45</p>
            </div>
            <div className="col-6">Search box</div>
            <div className="col-1">toggle</div>
          </div>
          <div className="body row">
            <div className="col-2">
              <CurrentWeather />
            </div>
            <div className="col-8"></div>
            <div className="col-2">
              <CurrentWeatherDescription />
            </div>
          </div>
        </div>
        <div className="footer row"> </div>

        <p>
          <a
            href="https://github.com/hellodeborahuk/react-weather-app"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Debbie Dann
        </p>
      </div>
    </div>
  );
}
