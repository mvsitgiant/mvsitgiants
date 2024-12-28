import React from "react";

import Header from "../components/Header";

import Aboutcompany from "../components/Aboutcompany";
import Consulation from "../components/Consulation";
import Keyfuture from "../components/Keyfuture";
// import { IoArrowForwardSharp } from "react-icons/io5";
// import { servicesData } from "../config/config";
import OurServices from "./../components/OurServices";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
   
    <div className="max-w-[1366px] mx-auto">
      <Header />

      
      <Aboutcompany />
      <OurServices />
      <Keyfuture />
      <Consulation  />
      <Footer />
      {/* <Test /> */}
    </div>
  );
};

export default Homepage;
