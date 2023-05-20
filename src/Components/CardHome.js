import React from 'react'
import { Link } from "react-router-dom"

const CardHome = ({ data }) => {

  return(
    <div>
      <div className=' w-full h-full grid grid-cols-3 gap-2 2xl:gap-4 px-20  py-12'>
      {data.map( item =>(
        <div key={item.id}  className=' w-full h-[200px] grid grid-cols-3 border rounded-lg border-white'>
           <div className=' w-full flex flex-col justify-center items-center'>
            <div className=' text-xl font-semibold'>{item.name || 'Null'}</div>
           </div>
           <div className=' w-full col-span-2 flex flex-col justify-between py-5'>
            <div className=''>Designation:  Senior Developer</div>
            <div className=' '>Skills: {item.skills.length === 0 ? (
        <span>No skills mentioned.</span>
      ) : (item.skills.map(skill=>(<span>{skill}, </span>)))}</div>
      {!item.projects ?(
        <div className=' text-center text-indigo-500 font-semibold'>No Projects</div>
      ): item.projects &&(
            <div className=' w-full flex justify-center'>
                <Link to={`/details/${item.id}`} className=' px-3 py-2 bg-indigo-500 rounded-lg'>Projects &rarr;</Link>
            </div>
            )}
           </div>
           

        </div>
        ))}
        </div>

    </div>
  )
}

export default CardHome
