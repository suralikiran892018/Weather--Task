import React, { useEffect, useRef, useState } from 'react';
import searchIcon from './search.svg';
import linkIcon from './external-link.svg';
import WeatherData from './WeatherData';
import FarmerWeather from './FarmerWeather';
import EventPlannerWeather from './EventPlannerWeather';
import TravelerWeather from './TravelerWeather';

const Main = () => {
  const inputValue = useRef();
  const [cityName, setCityName] = useState("kakinada");
  const [error, setError] = useState(true);
  const [myData, setMyData] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [dataWeather, setDataWeather] = useState([]);
  const [windData, setWindData] = useState([]);
  const [userGroup, setUserGroup] = useState('general');
  const [forecastData, setForecastData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const APP_KEY = "540a03e69a8cd89d141951d056206b1d";

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${APP_KEY}&units=metric&lang=en`);
      const data = await response.json();
      if (response.ok) {
        setCityDetails(data.city);
        setMyData(data.list[0].main);
        setDataWeather(data.list[0].weather[0]);
        setWindData(data.list[0].wind);
        setForecastData(data.list.slice(0, 3)); // Get 3-day forecast
        setError(true);
      } else {
        setError(false);
      }
    })();
  }, [cityName]);

  const onkeydownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCityName(inputValue.current.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCityName(inputValue.current.value);
  };

  return (
    <div className='box'>
      <div className='cityName'>
        {error ? (
          <p>{cityDetails.name}, {cityDetails.country}
            <a href={`https://en.wikipedia.org/wiki/${cityDetails.name}`} target="_ ">
              <img src={linkIcon} alt='link'/>
            </a>
          </p>
        ) : (
          <p className='invalid'>Invalid City Name</p>
        )}
        <div className='search'>
          <input type='text' ref={inputValue} onKeyDown={onkeydownHandler} placeholder='City Name'/>
          <img style={{cursor:'pointer'}} onClick={onSubmitHandler} src={searchIcon} alt='searchIcon'/>
        </div>
        <div>
          <button className='retro-button retro-button:hover' onClick={() => setUserGroup('general')}>General</button>
          <button className='retro-button retro-button:hover' onClick={() => setUserGroup('farmer')}>Farmer</button>
          <button className='retro-button retro-button:hover' onClick={() => setUserGroup('eventPlanner')}>Event Planner</button>
          <button className='retro-button retro-button:hover' onClick={() => setUserGroup('traveler')}>Traveler</button>
        </div>
      </div>
      
      {userGroup === 'general' && (
        <WeatherData weatherData={myData} weather={dataWeather} city={cityDetails} windData={windData} />
      )}
      {userGroup === 'farmer' && (
        <FarmerWeather weatherData={myData} weather={dataWeather} city={cityDetails} windData={windData} />
      )}
      {userGroup === 'eventPlanner' && (
        <EventPlannerWeather weatherData={myData} weather={dataWeather} city={cityDetails} windData={windData} />
      )}
      {userGroup === 'traveler' && (
        <TravelerWeather weatherData={myData} weather={dataWeather} city={cityDetails} windData={windData} />
      )}
      
      <div className='forecast'>
        <h2>3-Day Weather Forecast</h2>
        <div className='date-selector'>
          {forecastData.map((forecast, index) => (
            <button key={index} onClick={() => setSelectedDate(index)}>
              {new Date(forecast.dt * 1000).toLocaleDateString()}
            </button>
          ))}
        </div>
        {forecastData[selectedDate] && (
          <div className='forecast-data'>
            <p>Temperature: {Math.round(forecastData[selectedDate].main.temp)}°C</p>
            <p>Humidity: {forecastData[selectedDate].main.humidity}%</p>
            <p>Rain: {forecastData[selectedDate].weather[0].description}</p>
            <p>Wind Speed: {forecastData[selectedDate].wind.speed} mph</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
