import React,{ useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DescriptionPage from "./pages/DescriptionPage";
function App() {
  const [jsonData, setJsonData] = useState([]);

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
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home data={jsonData}/>} />
        
       
        <Route path="/details/:id" element={<DescriptionPage data={jsonData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
