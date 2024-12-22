// import AOS from "aos";
// import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";
const Aboutcompany = () => {
  const navigation=useNavigate()
  // useEffect(() => {
  //   AOS.init();
  // });
  return (
    <div
      className=" conplr  max-w-full  "
      style={{
        backgroundImage: 'url("/assets/aboutcompanybackground.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <div className="pl-[300px] mt-10 -mb-3">
        <img src="/assets/aboutcomdot.png" alt=" w-[150px] h-[100px]" />
      </div>
      <div className="flex flex-col sm:gap-16 lg:flex-row">
        <div className="relative    ">
          <div
            className="relative "
            // data-aos="fade-right"
            // data-aos-offset="200"
            // data-aos-easing="ease-out"
            // data-aos-duration="600"
          >
            <div className="flex flex-col mt-10 ">
              <img
                src="/assets/Aboutushome.jpg"
                alt=""
                className="w-[100%] h-auto"
              />
            </div>
          </div>
        </div>
        <div className="   ">
          <div
            className="flex flex-col  "
            // data-aos="fade-left"
            // data-aos-offset="200"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="600"
          >
            <h2 className="uppercase font-medium text-iconcolor">About Our Company</h2>
            <h1 className=" font-poppinsh font-semibold text-3xl  my-3 md:my-5">
              Your Passionate Tech Partner Fueling Business Growth
            </h1>
            <p className="mb-3 text-black font-poppinsh font-normal md:mb-5 text-sm md:text-base">
              We are a dynamic startup driven by a young, creative, and passionate mindset. Committed to social responsibility, we provide top-quality software and marketing services for restaurants, businesses, and budding entrepreneurs. Our goal is to empower our clients with innovative solutions and exceptional support.
            </p>
            <div className="my-5">
              {" "}
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lgfirstcolor to-lgsecondcolor group-hover:from-lgfirstcolor group-hover:to-lgsecondcolor hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 ">
                <span className="relative px-10 py-2 transition-all ease-in duration-75 bg-white text-black hover:text-white font-normal rounded-md group-hover:bg-opacity-0" onClick={()=>navigation("/about")}>
                  more info
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcompany;
