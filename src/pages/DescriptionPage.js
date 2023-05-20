import React from 'react'
import { useParams } from "react-router-dom";

const DescriptionPage = ({ data }) => {
  const { id } = useParams();
  const selectedData = data.find(item => item.id === parseInt(id));

  if (!selectedData) {
    return <div className=' w-full text-3xl p-5'>Invalid ID</div>;
  }
  if(!selectedData.projects === 'null'){
    return <div className=' w-full text-3xl p-5'>Invalid Project</div>;
  }
  console.log("select:",selectedData)
  return (
    
    <div className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' w-full flex justify-center items-center py-4'>
        <div>PROJECTS</div>
      </div>
      <div className=' w-full h-[90vh] grid grid-cols-2 justify-center items-center gap-4 px-20  py-12' >
        {selectedData.projects.length === 0 ? (
        <p className='  text-center font-bold text-3xl'>No Projects Given</p>
      ) : (selectedData.projects.map(item=>(
        <div className='w-full h-[420px] flex flex-col  py-4 items-center border rounded-lg border-white'>
            <div className=' my-2 font-bold text-xl '>{item.name}</div>
            <div>{item.description}</div>
            <div className=' w-full'>
              <div className='text-xl text-center  text-indigo-500 font-semibold my-2'>Teams:</div>
              <div className=' w-full flex justify-around items-center'>
                <div className=' px-1 text-indigo-500 font-semibold '>Name</div>
                <div className=' px-1 text-indigo-500 font-semibold '>Role</div>
              </div>
             
                {item.team.length === 0 ? (
        <p className='  text-center font-bold text-3xl'>No Teams Given</p>
      ) : (
                  item.team.map(teams=>(
                    <div className=' w-full grid grid-cols-2  items-center'>
                    <div className='my-1 text-center'>{teams.name || 'null'}</div>
                    <div className='my-1 text-center'>{teams.role || 'null'}</div>
                    </div>
                  )))
                }
              
              </div>
            <div className=' w-full'>
                <div className='text-xl text-center text-indigo-500 font-semibold my-2 '>Tasks:</div>
                <div className=' w-full flex justify-around items-center'>
                <div className=' px-1 text-indigo-500 font-semibold '>Name</div>
                <div className=' px-1 text-indigo-500 font-semibold '>Status</div>
              </div>
             
                {item.tasks.length === 0 ? (
        <p className='  text-center font-bold text-3xl'>No Teams Given</p>
      ) : (
                  item.tasks.map(task=>(
                    <div className=' w-full grid grid-cols-2  items-center'>
                    <div className='my-1 text-center'>{task.name || 'null'}</div>
                    <div className='my-1 text-center'>{task.status || "null"}</div>
                    </div>
                  )))
                }
            </div>
        </div>
        )))}
      </div>
    </div>
  )
}

export default DescriptionPage
