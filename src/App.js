import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Toggle from "./Toggle";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  let [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="outerdiv">
          <div
            className={"weatherapp" + (isDarkModeEnabled ? " dark-theme" : "")}
          >
            <div className="header row location-date">
              <div className="col-5">
                <h1>London</h1>
                <p>Tuesday 6th May, 20:45</p>
              </div>
              <div className="col-7 d-flex flex-row justify-content-end">
                <Search />
                <Toggle toggleHandler={setIsDarkModeEnabled} />
              </div>
            </div>
            
                <CurrentWeather />
          
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
