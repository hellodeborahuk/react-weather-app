import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

export default function Search() {
    return (
      <div className="city-search">

      <form>
        <input
          type="search"
          placeholder="Search city here"
          className="search-input"
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