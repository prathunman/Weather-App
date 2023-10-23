import React, { useState } from 'react'
import Search from '../components/Search'
import { WEATHER_API_URL, WEATHER_API_URL_KEY } from '../api/api';
import Weather from '../components/Weather';
import Forecast from '../components/Forecast';
import Button from '../components/Button';



function Home() {
  const [weather,setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [open, setOpen] = useState(false)
  
  const handleOnSearchChange = (searchData) =>{

    const [lat,lon] = searchData.options[0].value.split(' ')

    const weatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_URL_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_URL_KEY}&units=metric`
    );

    Promise.all([weatherFetch,forecastFetch])
    .then(async(res)=>{
      const weatherRes = await res[0].json();
      const forecastRes = await res[1].json();
      setWeather({city : searchData.options[0].label, ...weatherRes});
      setForecast({city : searchData.options[0].label,...forecastRes});
    })   
  }
  const toggle = (state) => {
    setOpen(state);
  };
console.log(open)


  return (
    <div className='space-y-8 bg-gradient-to-br from-gray-200 via-slate-200 to-white'>
        <Search onSearchChange={handleOnSearchChange}/>
        {weather && <Weather data={weather}/>}
        <Button changeState={toggle}/>
        {forecast &&  open &&  <Forecast data={forecast}/>}
    </div>
  )
}

export default Home