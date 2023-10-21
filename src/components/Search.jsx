import React,{ useState } from 'react'
import { Options, URL } from '../api/api'

function Search({onSearchChange}) {

    const [search, setSearch] = useState(null);
    const loadOptions = ()=>{
      return fetch(
        `${URL}/cities?countryIds=LK&namePrefix=${search}`,
        Options
      )
      .then((response) => response.json())
      .then(response=>console.log(response))
      .then((response) => {
        return{
          options: response.data.map((city)=>{
            return{
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err)=>console.log(err));
    }

    const handleOnChange=(searchData)=>{
        // value is passes as object. so we can not use the name in url. if we want to use the object, change the value to object
        const value = searchData.target.value
        setSearch(value);
        onSearchChange(searchData)
    }
  return (
    <div>
        <h1>Weather</h1>
        <input type='text' onChange={handleOnChange} className='border-2 border-black'/>
        <button onClick={loadOptions}>Search</button>
    </div>
  )
}

export default Search