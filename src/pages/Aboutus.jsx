import React, { useState } from "react";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Commonheader from "../components/Commonheader.js";

const Aboutus = () => {
  const [activeSection, setActiveSection] = useState("Mission");

  const content = {
    Mission:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    Vision:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    OurValue:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  };

  return (
    <div className="max-w-[1366px] mx-auto ">
      <div>
        {" "}
        <Navbar />
      </div>
      <div>
        {" "}
        <Commonheader namepage={"About Us"} />
      </div>

      <div
        className="flex flex-col rounded-md"
        style={{
          backgroundImage: 'url("/assets/aboutcompanybackground.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="w-full">
          <div className="flex pt-10 flex-col lg:flex-row gap-20">
            <div className="flex flex-col conpl">
              <h1 className="font-poppinsh font-semibold text-2xl md:text-4xl my-3 md:my-5">
                Who we are?
              </h1>
              <p className="font-normal text-navfontcolor pb-5">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
              <hr />
              <div className="flex justify-between py-5">
                {["Mission", "Vision", "OurValue"].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`py-0.5 px-3 font-normal rounded-3xl ${
                      activeSection === section
                        ? "bg-[#F1245B] text-white"
                        : "hover:bg-[#F1245B] hover:text-white"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <p className="font-normal text-navfontcolor">
                {content[activeSection]}
              </p>
            </div>
            <div className="relative mt-5 lg:mt-0 flex justify-center lg:justify-start conpr">
              <div className="relative py-5 sm:max-w-full max-w-[80%]">
                <img
                  src="/assets/aboutpage.png"
                  alt=""
                  className=" md:max-w-sm "
                />
                <img
                  src="/assets/homepageleftheader4.png"
                  alt=""
                  className="rounded-full bg-gradient-to-r  from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor p-2 w-1/4 md:w-1/3 lg:w-1/3  relative -left-[10%] bottom-[20%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col conplr  items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center font-semibold">
              Our Work Style
            </h1>
            <h3 className="max-w-md font-normal py-5 text-navfontcolor text-center">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on.
            </h3>
          </div>
          <div className="flex justify-center items-center mt-10 w-[90%] md:w-[60%]">
            <video
              loop
              src="/assets/Video.mp4"
              autoPlay
              className="rounded-xl videoPlayer"
            ></video>
          </div>
        </div>
      </div>

      <div className="conplr py-10 lg:py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center font-semibold">Our Team</h1>
          <h3 className="max-w-md font-normal py-5 text-navfontcolor text-center">
            Meet our dedicated team members who work tirelessly to make our
            vision a reality.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="max-w-sm mx-auto">
              <img src="/assets/Sunderbhai.avif" alt="" />
              <div className="flex gap-5 items-center justify-between mt-3">
                <div>
                  <h1 className="font-medium">Sundar Pichai</h1>
                  <h2 className="font-normal text-navfontcolor">Developer</h2>
                </div>
                <div className="flex gap-3">
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
