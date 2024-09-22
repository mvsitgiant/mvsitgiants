import React, { useEffect } from "react";
import "./../App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
const Keyfuture = () => {
  // useEffect(() => {
  //   AOS.init();
  // });
  return (
    <div className="conmlr py-10">
      <h1 className="py-5 md:py-10 font-semibold text-2xl md:text-3xl uppercase text-center">
        Our Key Features
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div
          className="flex justify-center lg:justify-start mt-5 lg:mt-0 lg:w-1/2"
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <img
            src="/assets/ourkeyfeatureleftside.png"
            alt=""
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
        <div
          className="flex flex-col pt-5 lg:pl-10 lg:pr-20 lg:w-1/2"
          // data-aos="fade-left"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
            Your Passionate Tech Partner Fueling Business Growth
          </h1>
          <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
            We're a team of passionate IT specialists driven by a shared
            mission: to empower businesses through strategic technology. We
            don't just build websites and apps; we craft innovative solutions
            that unlock your potential and propel you towards success.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-10">
        <div
          className="flex flex-col pt-5 lg:pr-20 lg:w-1/2"
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
            Your Passionate Tech Partner Fueling Business Growth
          </h1>
          <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
            We're a team of passionate IT specialists driven by a shared
            mission: to empower businesses through strategic technology. We
            don't just build websites and apps; we craft innovative solutions
            that unlock your potential and propel you towards success.
          </p>
        </div>
        <div
          className="flex justify-center lg:justify-end mt-5 lg:mt-0 lg:w-1/2"
          // data-aos="fade-left"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <img
            src="/assets/ourkeyfeaturerightside.png"
            alt=""
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Keyfuture;
