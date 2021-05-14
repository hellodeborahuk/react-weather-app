import React from "react";
import "./CurrentWeatherDescription.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf } from "react-icons/fa";

export default function CurrentWeatherDescription() {
    return (
      <ul className="current-weather-description">
        <li><WiHumidity /> Humidity: </li>
        <li><FaWind /> Wind speed:</li>
        <li><FaThermometerHalf /> Feels like:</li>
      </ul>
    );
}