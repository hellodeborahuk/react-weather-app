import React from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherDescription from "./CurrentWeatherDescription";
import Search from "./Search";
import Toggle from "./Toggle";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="outerdiv">
          <div className="weatherapp">
            <div className="header row">
              <div className="col-6">
                <h1>London</h1>
                <p>Tuesday 6th May, 20:45</p>
              </div>
              <Search />
              <div className="col-1"></div>
            </div>
            <div className="body row">
              <div className="col-2">
                <CurrentWeather />
              </div>
              <div className="col-8">
                <img
                  src="media/undraw_japan_ubgk.svg"
                  alt="a tree with the sun behind it"
                  width="100"
                />
              </div>
              <div className="col-2">
                <CurrentWeatherDescription />
              </div>
            </div>
          </div>
          <div className="footer row"> </div>
        </div>
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
