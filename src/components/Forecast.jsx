import React from 'react'

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]
function Forecast({data}) {
    console.log(data.list)

    const getDay = new Date().getDay();
    const forecastDay = weekDays.slice(getDay,weekDays.length).concat(weekDays.slice(0,getDay))
  return (
    <div className="md:flex md:flex-col items-center justify-center w-screen text-gray-700 p-10 bg-gradient-to-br from-gray-200 via-slate-200 to-white underline">
        <div>
            <h1 className='text-2xl font-bold text-slate-400'>Daily Forecast</h1>
        </div>
        <div>
            <div >
                {data.list.splice(0, 7).map((item,index) => (
                    <div key={index} className="md:flex md:flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
                        <div className="md:flex justify-between items-center">
                            <h1 className="font-semibold text-lg md:w-1/4">{forecastDay[index]}</h1>
                            <div className='flex items-center'>
                                <div className='w-1/2'>
                                    <img src={`resources/${item.weather[0].icon}.png`} alt='weather'/>
                                </div>
                                <div className='W-1/2 justify-center'>
                                    <label className="block font-semibold text-lg w-1/4 text-right">{Math.round(item.main.temp_max)}°C</label>
                                    <label>{item.weather[0].description}</label>
                                    
                                </div>
                            </div>
                            
                            <div className="md:flex items-center mt-4 pr-10">
                                <div className='w-1/2'>
                                    <img src='resources/humidity.svg' alt="humidity" className='w-10 h-10 flex justify-center'/>
                                </div>
                                <div className='w-1/2 text-center'>
                                    <span className="font-semibold">humidity</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Forecast