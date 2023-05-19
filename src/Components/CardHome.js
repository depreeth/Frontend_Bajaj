import React from 'react'

const CardHome = ({ data, onItemClick }) => {
  return (
    <div>
      <div className=' w-full h-full grid grid-cols-3 gap-4 px-20  py-12'>
      {data.map( item =>(
        <div key={item.id}  className=' w-full h-[200px] grid grid-cols-3 border rounded-lg border-white'>
           <div className=' w-full flex flex-col justify-center items-center'>
            <div className=' text-xl font-semibold'>{item.name}</div>
           </div>
           <div className=' w-full col-span-2 flex flex-col justify-between py-5'>
            <div className=''>Designation:  Senior Developer</div>
            <div className=' '>Skills: {item.skills.map(skill=>(<span>{skill}, </span>))}</div>
            <div className=' w-full flex justify-center'>
                <button onClick={() => onItemClick(item.id)} className=' px-3 py-2 bg-indigo-500 rounded-lg'>Projects &rarr;</button>
            </div>
           </div>
           

        </div>
        ))}
        </div>

    </div>
  )
}

export default CardHome
