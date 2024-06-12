import React from 'react';

const getTime = (timeStamp) => {
  return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
    timeStamp * 1000
  ).getMinutes()}`;
};

const TravelerWeather = (props) => {
  console.log('TravelerWeather props:', props);

  return (
    <div className='weatherInfo'>
      <h2 style={{ marginTop: '10px' }}>Weather Suitability for Traveling</h2>
      <p>Temperature: {Math.round(props.weatherData.temp)}°C</p>
      <p>Humidity: {props.weatherData.humidity}%</p>
      <p>Rain: {props.weather.description}</p>
      <p>Wind Speed: {props.windData.speed} mph</p>
      <p style={{ color: 'white', fontWeight: 'bold' }}>Overall: {props.weather.description.includes('rain') ? 'Consider indoor activities' : 'Suitable for outdoor activities'}</p>
      <div className='weatherData'>
        
        
        <div id='scrolledItem' className='forcastdata'>
          <div>
            <p>{props.lang ? 'SUNRISE' : 'SUNRISE'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg'} width={100} alt='icon'/>
            <p>{getTime(props.city.sunrise)}</p>
          </div>
          <div>
            <p>{props.lang ? 'WIND' : 'WIND'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg'} width={100} alt='icon'/>
            <p>{props.windData.speed}&nbsp;mph</p>
          </div>
          <div>
            <p>{props.lang ? 'HUMIDITY' : 'HUMIDITY'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.humidity}&nbsp;mm</p>
          </div>
          
          <div>
            <p>{props.lang ? 'PRESURE' : 'PRESURE'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.pressure}&nbsp;mb</p>
          </div>
          <div>
            <p>{props.lang ? 'SUNSET' : 'SUNSET'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg'} width={100} alt='icon'/>
            <p>{getTime(props.city.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerWeather;
