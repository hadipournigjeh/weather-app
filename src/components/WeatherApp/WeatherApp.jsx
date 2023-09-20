import React from "react";
import "./weatherApp.css";

// ---- Images ---- //
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizlle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_Icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search"></input>
        <div className="search-icon">
          <img
            className="search-icon-img"
            src={search_icon}
            alt="search icon"
          />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="cloud icon"></img>
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <img src="" className="icon" alt="icon"></img>
      </div>
    </div>
  );
};

export default WeatherApp;
