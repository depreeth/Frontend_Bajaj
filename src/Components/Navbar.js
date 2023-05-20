import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[10vh] flex justify-around items-center'>
      <div className=' text-2xl'>BAJAJ</div>
      <div className="flex items-center">
      <input
        type="text"
        placeholder="Search by Name"
        className="p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      
    </div>
    </div>
  )
}

export default Navbar
