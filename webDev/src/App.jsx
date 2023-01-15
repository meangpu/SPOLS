import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import NavbarTop from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Notfound from "./pages/notFound/Notfound";

const App = () => {
  return (
    <BrowserRouter basename='/web-starter-meangpu/'>
      <NavbarTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/404' element={<Notfound />} />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;