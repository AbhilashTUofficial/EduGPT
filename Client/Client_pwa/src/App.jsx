import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import { Routes } from "react-router-dom";

// import Userdetails from './pages/Userdetails/Userdetails'
// import Home from './pages/Home/Home'
import Otp from "./pages/Otp/Otp";
import File from "./pages/File";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/Otp" element={<Otp />} />
        <Route path="/file" element={<File />} />
      </Routes>
    </>
  );
}

export default App;
