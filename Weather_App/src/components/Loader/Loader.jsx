import { useState, useEffect } from 'react';
import "./loader.css";

const WeatherLoader = () => {

  return (
    <>
      <div className="weather-container">
        <div className="loader-container">
            {/* Sunny  */}
            <div className="icon sunny">
                <div className="sun">
                    <div className="rays"></div>
                </div>
            </div>

            {/* Cloudy  */}
            <div className="icon cloudy">
                <div className="cloud"></div>
                <div className="cloud"></div>
            </div>

            {/* Rainy  */}
            <div className="icon rainy">
                <div className="cloud"></div>
                <div className="rain"></div>
            </div>

            {/* Thunder Storm  */}
            <div className="icon thunder-storm">
                <div className="cloud"></div>
                <div className="lightning">
                    <div className="bolt"></div>
                    <div className="bolt"></div>
                </div>
            </div>

            {/* Snow/Flurries  */}
            <div className="icon flurries">
                <div className="cloud"></div>
                <div className="snow">
                    <div className="flake"></div>
                    <div className="flake"></div>
                </div>
            </div>

            {/* Sun Shower */}
            <div className="icon sun-shower">
                <div className="cloud"></div>
                <div className="sun">
                    <div className="rays"></div>
                </div>
                <div className="rain"></div>
            </div>
        </div>
        <div className="loader-text">Loading Weather Experience</div>
        {/* <div className="weather-status">{currentWeather} conditions</div> */}
      </div>
    </>
  );
};

export default WeatherLoader;