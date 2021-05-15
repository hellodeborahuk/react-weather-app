import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.searchByCity(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleLocationClick() {
    
      navigator.geolocation.getCurrentPosition(props.searchByLocation);

  }
  return (
    <div className="city-search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search city here"
          className="search-input"
          onChange={handleCityChange}
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
        <button type="submit" className="current-button" onClick={handleLocationClick}>
          <FaMapMarkerAlt />
        </button>
      </form>
    </div>
  );
}
