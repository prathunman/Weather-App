import React from 'react'
import Search from '../components/Search'

const handleOnSearchChange = (searchData) =>{
    console.log(searchData)
}
function Home() {
  return (
    <div>
        <Search onSearchChange={handleOnSearchChange}/>
    </div>
  )
}

export default Home