import React from 'react'
import { useParams } from "react-router-dom";

const DescriptionPage = ({ data }) => {
  const { id } = useParams();
  const selectedData = data.find(item => item.id === parseInt(id));

  if (!selectedData) {
    return <div>Invalid ID</div>;
  }
  console.log("select:",selectedData)
  return (
    <div className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' w-full flex justify-center items-center py-4'>
        <div>PROJECTS</div>
      </div>
      <div className=' w-full h-[90vh] flex flex-row justify-center items-center gap-4 px-20  py-12' >
        {selectedData.projects.map(item=>(
        <div className='w-full h-[150px] flex flex-col justify-between py-4 items-center border rounded-lg border-white'>
            <div className=' '>{item.name}</div>
            <div>{item.description}</div>
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
