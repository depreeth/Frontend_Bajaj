import React,{ useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import CardHome from '../Components/CardHome';
import DescriptionPage from './DescriptionPage';

const Home = () => {

    const [jsonData, setJsonData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

  const handleItemClick = id => {
    setSelectedId(id);
  };

  
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
  console.log("select",selectedData)

  return (
    <div className=' w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
     <Navbar/>
     <CardHome data={jsonData} onItemClick={handleItemClick} />
     {selectedData && <DescriptionPage data={selectedData}/>}
    </div>
  )
}

export default Home
