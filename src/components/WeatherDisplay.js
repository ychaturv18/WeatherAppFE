import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} F</p>
    </div>
  );
};

export default WeatherDisplay;
