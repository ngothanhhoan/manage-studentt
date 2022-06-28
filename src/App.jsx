/** @format */

import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Home from "./router/Home";
import About from "./router/About";
import Class from "./router/Class";
import Contact from "./router/Contact";
import Login from "./router/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/class' element={<Class />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
