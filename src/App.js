import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {error && <ErrorDisplay error={error} />}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
