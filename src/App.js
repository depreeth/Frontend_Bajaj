import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/signup" element={<Signup/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
