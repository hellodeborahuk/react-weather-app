import React from "react";
import "./CurrentWeatherDescription.css";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa";

export default function CurrentWeatherDescription() {
    return (
      <ul className="current-weather-description">
        <li>
          <WiHumidity />
        </li>
        <li>
          <FaWind />
        </li>
        <li>
          <FaCloudRain />
        </li>
      </ul>
    );
}