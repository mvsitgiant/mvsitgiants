import React from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Commonheader from "../components/Commonheader";
import { servicesData } from "../config/config";

const Services = () => {
  return (
    <div className="max-w-[1366px] mx-auto">
      
      <div>
        <Commonheader namepage={"Services"} />
      </div>
      <div className="conmlr pt-10">
 {servicesData.map((data, index) => (
  <div
    key={index}
    className={`flex flex-col lg:flex-row ${
      index % 2 === 0 ? "" : "lg:flex-row-reverse"
    } mt-10 pb-10`}
  >
    {/* Image Section */}
    <div className="flex justify-center lg:justify-start mt-5 lg:mt-0 lg:w-1/2">
      <img
        src={data.imageUrl || "/assets/ourkeyfeatureleftside.png"}
        alt={data.imageAlt || ""}
        className="w-full max-w-sm lg:max-w-md rounded-lg"
      />
    </div>

    {/* Summary Section */}
    <div className="flex flex-col pt-5 lg:pl-10 lg:pr-20 lg:w-1/2">
      <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
        {data.name || "AI and Machine Learning"}
      </h1>
      <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
        {data.description ||
          "Transforming Data into Intelligence Harness the power of artificial intelligence and machine learning to unlock new opportunities and drive innovation. Our AI solutions are designed to enhance decision-making, optimize operations, and deliver personalized experiences. From predictive analytics to natural language processing, we have the expertise to turn your data into actionable insights."}
      </p>
      <ul className="flex flex-col gap-5">
        {data.subLink?.map((feature, featureIndex) => (
          <li key={featureIndex} className="font-normal text-navfontcolor">
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
