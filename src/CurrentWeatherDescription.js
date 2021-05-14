import React from "react";
import "./CurrentWeatherDescription.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

export default function CurrentWeatherDescription() {
    return (
      <ul className="current-weather-description">
        <li><WiHumidity /></li>
        <li><FaWind /></li>
        <li>Something else</li>
      </ul>
    );
}