import React from "react";

import Header from "../components/Header";

import Aboutcompany from "../components/Aboutcompany";
import Consulation from "../components/Consulation";
import Keyfuture from "../components/Keyfuture";
import { IoArrowForwardSharp } from "react-icons/io5";
import { servicesData } from "../config/config";
import OurServices from "./../components/OurServices";
import Test from "../components/Test";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    // <div
    //   style={{
    //     backgroundColor: "#DFDBE5",
    //     backgroundImage: `url(
    //       "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath fill='%239C92AC' fill-opacity='0.19' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E"
    //     )`,
    //     // backgroundImage: 'url("/assets/aboutcompanybackground.jpeg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     height: "auto",
    //     width: "100%",
    //   }}
    // >
    <div className="max-w-[1366px] mx-auto">
      <Header />

      {/* <section className="py-12 bg-white sm:py-12 lg:py-16">
        <div className="  mx-5 sm:mx-10">
          <div className="max-w-xl px-12 mx-auto text-center xl:max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight mb-4 sm:mb-6">
              Outstanding software and services that solve your hassle
            </h2>
          </div>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8 sm:mt-12 lg:mt-20  text-left sm:overflow-hidden overflow-x-auto flex gap-x-4 scrollbar-hide">
            {servicesData.map((data, index) => (
              <div className="flex-shrink-0 w-full sm:w-72 bg-white border-2 ">
                <div className="p-3 sm:p-5 lg:p-6">
                  <div className="bg-[#FFE2EAD4] inline-block p-2"> icon</div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">
                    {data.name}
                  </h3>
                  <p className="mt-4 sm:mt-6 text-base sm:text-lg font-normal text-navfontcolor">
                    {data.description}
                  </p>
                  <div className="flex justify-between mt-5">
                    <div></div>
                    <IoArrowForwardSharp size={25} color="red" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <div className=" py-10 sm:py-20 relative ">
        <div className="max-w-xl px-12 mx-auto text-center xl:max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight mb-4 sm:mb-6">
            Outstanding software and services that solve your hassle
          </h2>
        </div>
        <div className="h-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 px-3 sm:px-10 pt-5 ">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between border-2   p-7 bg-white shadow-sm hover:shadow-lg"
              >
                <div>
                  <span className="inline-block  ">
                    <div className="inline-flex justify-start -ml-1 select-none text-lgsecondcolor">
                      <img
                        src={item.icon}
                        alt="ai"
                        className="w-16 text-lgsecondcolor"
                      />
                    </div>
                  </span>
                  <h1 className="mt-5   font-medium text-2xl">{item.name}</h1>
                  <p className="sm:mt-3 block font-lexend font-normal text-navfontcolor   mb-5">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <div></div>
                  <IoArrowForwardSharp size={25} color="red" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Aboutcompany />
      <OurServices />
      <Consulation />
      <Keyfuture />
      <Footer />
      {/* <Test /> */}
    </div>
  );
};

export default Homepage;
