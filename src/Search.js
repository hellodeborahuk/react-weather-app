import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

export default function Search(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.doSearch();
  }

  function handleCityChange(event) {
    props.setCity(event.target.value);
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
        <button type="submit" className="current-button">
          <FaMapMarkerAlt />
        </button>
      </form>
    </div>
  );
}
