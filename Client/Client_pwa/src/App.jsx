import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Otp from "./pages/Otp/Otp";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Progress from "./pages/Progress/Progress";
import ProgressChart from "./pages/ProgressChart/ProgressChart";
import Test from "./pages/Test/Test"
import SetData from "./pages/SetData/SetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/setdata" element={<SetData />} />
        {/* <Route path="/Test" element={<Test />} /> */}
        <Route path="/Test" element={<Test />} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/progress/:id" element={<ProgressChart/>} />
      </Routes>
    </>
  );
}

export default App;
