import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function fahrenheitTemp() {
    return Math.round((props.celsius * 9) / 5 + 32);
}

function toggleUnit(event) {
    event.preventDefault();
 if (unit === "celsius") {
     setUnit("fahrenheit");
 } else {
     setUnit("celsius");
 }
}

let unitSelect;
if (unit === "celsius") {
    unitSelect = (
      <span className="temperature-unit">
        °C |{" "}
        <a href="/" onClick={toggleUnit}>
          °F
        </a>
      </span>
    );
} else {
    unitSelect = (
      <span className="temperature-unit">
        <a href="/" onClick={toggleUnit}>
          °C
        </a>{" "}
        | °F
      </span>
    );
}

return (
  <div className="WeatherTemperature">
    <span className="temperature-number">{unit === "celsius" ? props.celsius : fahrenheitTemp()}</span>
   {unitSelect}
  </div>
);
    
}