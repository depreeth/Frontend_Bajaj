import React from 'react'

import Navbar from '../Components/Navbar'
import CardHome from '../Components/CardHome';


const Home = ({data}) => {

 
    console.log("Data:",data)

  return (
    <div className=' w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
     <Navbar/>
     <CardHome data={data}  />
    
    </div>
  )
}

export default Home
