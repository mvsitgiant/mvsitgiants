import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";

import Contactpage from "./pages/Contactpage";
import CommonServices from "./pages/CommonServices";
import Navbar from "./components/Navbar";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router
      className=""
      style={{
        background: "linear-gradient(to top, #8BB3F9,#FFE2EA,#8BB3F9,#FFE2EA)",
      }}
    >
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/commonservice" element={<CommonServices />} />
      </Routes>
    </Router>
  );
}

export default App;
