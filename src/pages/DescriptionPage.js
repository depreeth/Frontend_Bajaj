import React from 'react'

const DescriptionPage = ({ data }) => {
  return (
    <div className=' w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' w-full h-full grid grid-cols-3 gap-4 px-20  py-12' >
        {data.projects.map(item=>(
        <div className='w-full h-[100px] flex flex-col justify-between py-4 items-center border rounded-lg border-white'>
            <div className=' '>{item.name}</div>
            <div className=' flex flex-row justify-around items-center'>
                <div><button className=' px-3 py-2 rounded-lg mx-5 bg-indigo-500'>Tasks</button></div>
                <div><button className=' px-3 py-2 rounded-lg mx-5 bg-indigo-500'>Teams</button></div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default DescriptionPage
