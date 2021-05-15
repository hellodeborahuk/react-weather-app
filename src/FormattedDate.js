import React from "react";

export default function FormattedDate(props) {
  if (props.date) {
      let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      let month = months[props.date.getMonth()];
      let date = props.date.getDate();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
      <div>
        {day} {date} {month} {hours}:{minutes}
      </div>
    );
  } else {
    return "loading";
  }
}
