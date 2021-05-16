import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            {" "}
            <WeatherIcon code="01d" />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">12</span>{" "}
            <span className="WeatherForecast-temperatures-min">9</span>
          </div>
        </div>
      </div>
    </div>
  );
}
