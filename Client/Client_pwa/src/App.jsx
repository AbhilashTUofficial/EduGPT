import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Otp from "./pages/Otp/Otp";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
<<<<<<< HEAD
import SetData from "./pages/SetData/SetData";
=======
import Test from "./pages/Test/Test";
import Progress from "./pages/Progress/Progress";
import ProgressChart from "./pages/ProgressChart/ProgressChart";
>>>>>>> 747d756da60145dd4ac4ab59ee9a2a195bb87a3e

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Otp" element={<Otp />} />
<<<<<<< HEAD
        <Route path="/setdata" element={<SetData />} />
        {/* <Route path="/Test" element={<Test />} /> */}
=======
        <Route path="/Test" element={<Test />} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/progress/:id" element={<ProgressChart/>} />
>>>>>>> 747d756da60145dd4ac4ab59ee9a2a195bb87a3e
      </Routes>
    </>
  );
}

export default App;
