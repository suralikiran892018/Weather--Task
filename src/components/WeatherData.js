import React from 'react'

const WeatherData = (props) => {

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  const sideRight = () =>{
    var slider = document.getElementById('scrolledItem');
    slider.scrollLeft = slider.scrollLeft+300;
  }
  const sideLeft = () =>{
    var slider = document.getElementById('scrolledItem');
    slider.scrollLeft = slider.scrollLeft-300;
  }

  
  return (
    <div className='weatherData'>
      
      <div className='currtemp'>
        <div className='tempAndLogo'>
        <div>
            <img src={`assets/${props.weather.icon}.svg`} width={200} alt='icon'/>
        </div>
        <div>
            {Math.round(props.weatherData.temp)}&deg;C
            <p>{props.weather.description}</p>
        </div>
        </div>
        <div className='windData'>
            <p>{props.lang?'Wind: ':'Wind: '}<span>{props.windData.speed}&nbsp;mph</span></p>
            <p>{props.lang?'Min Temp: ':'Min Temp: '}<span>{Math.round(props.weatherData.temp_min)}&deg;C</span></p>
            <p>{props.lang?'Max Temp: ':'Max Temp: '}<span>{Math.round(props.weatherData.temp_max)}&deg;C</span></p>
        </div>
      </div>
      <div id='scrolledItem' className='forcastdata'>
        <div>
            <p>{props.lang?'SUNRISE':'SUNRISEय'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg'} width={100} alt='icon'/>
            <p>{getTime(props.city.sunrise)}</p>
        </div>
        <div>
            <p>{props.lang?'WIND':'WIND'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg'} width={100} alt='icon'/>
            <p>{props.windData.speed}&nbsp;mph</p>
        </div>
        <div>
            <p>{props.lang?'HUMIDITY':'HUMIDITY'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.humidity}&nbsp;mm</p>
        </div>
        
        <div>
            <p>{props.lang?'PRESURE':'PRESURE'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.pressure}&nbsp;mb</p>
        </div>

        <div>
            <p>{props.lang?'SUNSET':'SUNSET'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg'} width={100} alt='icon'/>
            <p>{getTime(props.city.sunset)}</p>
        </div>
        
        
        
      </div>
      
      <p className='copyright'>&copy;kiran</p>
      <p onClick={sideRight} className='rigtharrow'>&gt;</p>
      <p onClick={sideLeft} className='leftarrow'>&lt;</p>
      
    </div>
    
  )
  
}

export default WeatherData
