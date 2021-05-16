import React from "react";
import cloudy from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import clear-day from "@bybas/weather-icons/design/fill/animation-ready/clear-day.svg";
import clear-night from "@bybas/weather-icons/design/fill/animation-ready/clear-night.svg";
import partly-cloudy-day from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import partly-cloudy-night from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night.svg";
import rain from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import partly-cloudy-day-rain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-rain.svg";
import partly-cloudy-night-rain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-rain.svg";
import partly-cloudy-day-snow from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-snow.svg";
import partly-cloudy-night-snow from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-snow.svg";
import thunderstorms from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg";
import mist from "@bybas/weather-icons/design/fill/animation-ready/mist.svg";

export default function WeatherIcon(props) {

const codeMapping = {
		"01d": "clear-day",
		"01n": "clear-night",
		"02d": "partly-cloudy-day",
		"02n": "partly-cloudy-night",
		"03d": "cloudy",
		"03n": "cloudy",
		"04d": "cloudy",
		"04n": "cloudy",
		"09d": "rain",
		"09n": "rain",
		"10d": "partly-cloudy-day-rain",
		"10n": "partly-cloudy-night-rain",
		"11d": "thunderstorms",
		"11n": "thunderstorms",
		"13d": "partly-cloudy-day-snow",
		"13n": "partly-cloudy-day-snow",
		"50d": "mist",
		"50n": "mist"
	};

    return ( <li>
                <img src={cloudy} />
              </li>
    )
}