import React from "react";
import "./../App.css";
const Consulation = () => {
  return (
    <div className="flex md:mt-28 flex-col lg:flex-row bg-[#C5DCFF] conmlr rounded-md">
      <div className="relative mt-5 lg:mt-0 flex justify-center lg:justify-start md:justify-center">
        <div className="relative">
          <img
            src="/assets/consulationpart.png"
            alt=""
            className="h-72 w-[700px]"
          />
        </div>
      </div>
      <div className="flex flex-col  pl-5 pr-5 md:pl-10   pt-10">
        <div className="flex flex-col">
          <h1 className="font-poppinsh font-semibold text-lg md:text-xl text-lgsecondcolor">
            LET’S CONSULTATION
          </h1>

          <h1 className="font-poppinsh font-semibold text-2xl md:text-4xl my-3 md:my-5">
            Let’s Talk About Business Solutions With Us
          </h1>
          <div className="py-5">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lgfirstcolor to-lgsecondcolor group-hover:from-lgfirstcolor group-hover:to-lgsecondcolor hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 ">
              <span className="relative px-10 py-2 transition-all ease-in duration-75 bg-white text-black hover:text-white font-normal rounded-md group-hover:bg-opacity-0">
                more info
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulation;
