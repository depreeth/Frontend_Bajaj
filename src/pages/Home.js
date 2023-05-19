import React,{ useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {

    const [jsonData, setJsonData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
        );
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(jsonData)

  return (
    <div className=' w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
     <Navbar/>
     <div className=' w-full h-full grid grid-cols-3 gap-4 px-20  py-12'>
        <div className=' w-full h-[200px] grid grid-cols-3 border rounded-lg border-white'>
           <div className=' w-full flex flex-col justify-center items-center'>
            <div>Mr. A</div>
           </div>
           <div className=' w-full col-span-2 flex flex-col justify-between py-5'>
            <div className=''>Designation:  Senior Developer</div>
            <div className=' '>Skills: <span></span></div>
            <div className=' w-full flex justify-center'>
                <button className=' px-3 py-2 bg-indigo-500 rounded-lg'>Projects &rarr;</button>
            </div>
           </div>

        </div>
        </div>

    </div>
  )
}

export default Home
