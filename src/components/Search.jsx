import React,{ useState } from 'react'
import { Options, URL } from '../api/api'

function Search({onSearchChange}) {
     const [search, setSearch] = useState(null);
    const loadOptions = ()=>{
      return fetch(
        `${URL}/cities?countryIds=LK&namePrefix=${search.target.value}`,
        Options
      )
      .then((response) => response.json())
      .then((response) => {
        onSearchChange({
          options: response.data.map((city)=>{
            return{
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        });
      })
      .catch((err)=>console.log(err));
    }
    
    const handleOnChange=(searchData)=>{
        // value is passes as object. so we can not use the name in url. if we want to use the object, change the value to object
        // const value = searchData.target.value
        setSearch(searchData);
    }
  return (
    <div className='w-full relative space-y-10 mt-8 '>
        <h1 className='text-center text-4xl font-bold text-yellow-600'>Weather</h1>
        <div className='space-y-4 md:space-y-0 md:flex justify-center md:space-x-10'>
          <div>
            <input type='text' onChange={handleOnChange} placeholder="Search the location" className='w-36 md:w-96 text-md font-medium  text-gray-900 border-2 border-gray-600 rounded-md p-1 hover:border-gray-300 hover:bg-slate-100 '/>
          </div>
          <div>
            <button onClick={loadOptions} className='border-2 border-slate-400 px-2 hover:bg-slate-100 p-1 rounded-md'>Search</button>
          </div>

        </div>
    </div>
  )
}

export default Search