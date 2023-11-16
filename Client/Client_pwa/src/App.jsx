import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
// import Landing from "./pages/Landing/Landing";
// import Login from "./pages/Login/Login";

import { Routes } from "react-router-dom";
import Home from "./pages/Home/home"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
       
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
