import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  if (props.coordinates) {
    let apiKey = "37d0f96cd930737aa442037348f7a9bd";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

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
  } else {
    return "";
  }
}
