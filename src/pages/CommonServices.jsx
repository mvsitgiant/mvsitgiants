import React from "react";

import Navbar from "./../components/Navbar";
import Commonheader from "../components/Commonheader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { servicesData } from "../config/config";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CommonServices = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const data = location?.state;
  const sublink = location.state.Sublink;
  console.log("routes", sublink);
  return (
    <div className="max-w-[1366px] mx-auto">
      <div>
        <Navbar />
      </div>
      <div>
        <Commonheader namepage={data?.link?.text} />
      </div>
      <div className="conplr pt-10 flex gap-x-5">
        <div className="w-[70%]">
          <div>
            <img src="/assets/workers-5246640_1280.jpg" alt="hll" />
          </div>
          <h1 className="pt-5 font-semibold text-3xl">{data?.link?.text}</h1>
          <p className="font-normal pt-5">
            Transforming Data into Intelligence Harness the power of artificial
            intelligence and machine learning to unlock new opportunities and
            drive innovation. Our AI solutions are designed to enhance
            decision-making, optimize operations, and deliver personalized
            experiences. From predictive analytics to natural language
            processing, we have the expertise to turn your data into actionable
            insights.
          </p>
          <div className="flex py-10">
            <div>
              <img
                src="/assets/commonpageservices.png"
                className="max-w-sm"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 pl-3">
              <h1 className="pb-5 font-semibold text-xl">
                We are serve best work
              </h1>
              <div className="flex gap-x-0.5">
                <img src="/assets/addicon.png" alt="" />
                <p className="font-normal">
                  Up am intention on dependent questions
                </p>
              </div>
              <div className="flex gap-x-0.5">
                <img src="/assets/addicon.png" alt="" />
                <p className="font-normal">
                  Up am intention on dependent questions
                </p>
              </div>
              <div className="flex gap-x-0.5">
                <img src="/assets/addicon.png" alt="" />
                <p className="font-normal">
                  Up am intention on dependent questions
                </p>
              </div>
              <div className="flex gap-x-0.5">
                <img src="/assets/addicon.png" alt="" />
                <p className="font-normal">
                  Up am intention on dependent questions
                </p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h1 className="font-semibold text-2xl py-10">
              Benefits With Our Service
            </h1>
            <div className="flex gap-x-5">
              <img src="/assets/commonpageservicesbenifite.png" alt="" />
              <img src="/assets/commonpageservicesbenifite.png" alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#C5DCFF] p-5">
            {" "}
            <h1 className="text-xl font-semibold">Related Solutions</h1>
            <div className="flex flex-col justify-between gap-5 py-10">
              {sublink.map((item) => (
                <div
                  className="hover:bg-white flex justify-between items-center p-2 gap-x-5"
                  // onClick={() => {
                  //   navigation("/commonservice", {
                  //     state: { link: item, sublink },
                  //   });
                  // }}
                >
                  <Link to={item?.url} className="font-normal  ">
                    {item?.text}
                    {console.log(item)}
                  </Link>
                  <HiOutlineArrowNarrowRight size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommonServices;
