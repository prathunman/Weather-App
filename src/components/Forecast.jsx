import React from 'react'

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]
function Forecast({data}) {
    console.log(data.list)

    const getDay = new Date().getDay();
    const forecastDay = weekDays.slice(getDay,weekDays.length).concat(weekDays.slice(0,getDay))
  return (
    <div className="md:flex md:flex-col items-center justify-center w-screen text-gray-700 p-10">
        <div>
            <h1 className='text-2xl font-bold text-slate-400'>Daily Forecast</h1>
        </div>
        <div>
            <div >
                {data.list.splice(0, 7).map((item,index) => (
                    <div key={index} className="md:flex md:flex-col space-y-6 w-full max-w-screen-sm bg-white p-8 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
                        <div className="md:flex justify-between items-center space-y-8">
                            <h1 className="font-semibold text-lg md:w-1/4">{forecastDay[index]}</h1>
                            <div className='items-center grid grid-cols-2'>
                                <div className='flex justify-center'>
                                    <img src={`resources/${item.weather[0].icon}.png`} alt='weather'/>
                                </div>
                                <div>
                                    <label className="block font-semibold text-lg md:w-1/4 text-center md:text-right">{Math.round(item.main.temp_max)}°C</label>
                                    <label>{item.weather[0].description}</label>
                                    
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:flex items-center pr-10 ml-20">
                                <div>
                                    <img src='resources/humidity.svg' alt="humidity" className='w-16 h-16 flex justify-center'/>
                                </div>
                                <div>
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