import React from "react";
import "./fontawesome";
import "./CurrentWeatherDescription.css";

export default function CurrentWeatherDescription() {
  return (
    <ul>
      <li>Humidity</li>
      <li>
        <FontAwesomeIcon icon={["fas", "Wind"]} />
      </li>
      <li>Something else</li>
    </ul>
  );
}
