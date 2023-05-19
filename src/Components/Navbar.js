import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[10vh] flex justify-around items-center'>
      <div className=' text-2xl'>BAJAJ</div>
      <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
    </div>
  )
}

export default Navbar
