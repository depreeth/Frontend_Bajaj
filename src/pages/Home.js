import React,{ useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import CardHome from '../Components/CardHome';

const Home = () => {

    const [jsonData, setJsonData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

  const handleItemClick = id => {
    setSelectedId(id);
  };

  // Get the selected data object based on the selectedId
  const selectedData = jsonData.find(item => item.id === selectedId);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
        );
        const data = await response.json();
        setJsonData(data.employees);
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
     <CardHome data={jsonData} onItemClick={handleItemClick} />
    </div>
  )
}

export default Home
