import React from "react";
import ButtonAppBar from "../components/ButtonAppBar";
import Footer from "../components/Footer";
import Home from '../pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const MainLayout = () => {
    return( <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route/>
          <Route/>
        </Routes>
        <Footer />
      <Router/>)
}

export default MainLayout;
