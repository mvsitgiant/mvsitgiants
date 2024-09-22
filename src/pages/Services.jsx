import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Commonheader from "../components/Commonheader";

const Services = () => {
  return (
    <div className="max-w-[1366px] mx-auto">
      <div>
        <Navbar />
      </div>
      <div>
        <Commonheader namepage={"Services"} />
      </div>
      <div className="conmlr pt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center lg:justify-start mt-5 lg:mt-0 lg:w-1/2">
            <img
              src="/assets/ourkeyfeatureleftside.png"
              alt=""
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col pt-5 lg:pl-10 lg:pr-20 lg:w-1/2">
            <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
              AI and Machine Learning
            </h1>
            <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
              Transforming Data into Intelligence Harness the power of
              artificial intelligence and machine learning to unlock new
              opportunities and drive innovation. Our AI solutions are designed
              to enhance decision-making, optimize operations, and deliver
              personalized experiences. From predictive analytics to natural
              language processing, we have the expertise to turn your data into
              actionable insights.
            </p>{" "}
            <ul className="flex flex-col gap-5">
              <li className="font-normal text-navfontcolor">
                Predictive Analytics{" "}
              </li>
              <li className="font-normal text-navfontcolor">
                Natural Language Processing (NLP)
              </li>
              <li className="font-normal text-navfontcolor">
                Image and Video Analysis
              </li>
              <li className="font-normal text-navfontcolor">
                AI-driven Automation
              </li>
              <li className="font-normal text-navfontcolor">
                {" "}
                Custom Machine Learning Models
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-10 pb-10">
          <div className="flex flex-col pt-5 lg:pr-20 lg:w-1/2">
            <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
              Cloud Engineering
            </h1>
            <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
              Scalable, Secure, and Efficient Cloud Solutions Embrace the future
              with our cloud engineering services. We help businesses migrate to
              the cloud, optimize their cloud infrastructure, and implement
              robust security measures. Our cloud solutions are designed for
              scalability, ensuring your business can grow seamlessly while
              maintaining operational efficiency.
            </p>
            <ul className="flex flex-col gap-5">
              <li className="font-normal text-navfontcolor">Cloud Migration</li>
              <li className="font-normal text-navfontcolor">
                Infrastructure as a Service (IaaS)
              </li>
              <li className="font-normal text-navfontcolor">
                Platform as a Service (PaaS)
              </li>
              <li className="font-normal text-navfontcolor">
                Cloud Security Solutions
              </li>
              <li className="font-normal text-navfontcolor">
                {" "}
                DevOps and Continuous Integration
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end mt-5 lg:mt-0 lg:w-1/2">
            <img
              src="/assets/ourkeyfeaturerightside.png"
              alt=""
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pb-10">
          <div className="flex justify-center lg:justify-start mt-5 lg:mt-0 lg:w-1/2">
            <img
              src="/assets/ourkeyfeatureleftside.png"
              alt=""
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col pt-5 lg:pl-10 lg:pr-20 lg:w-1/2 ">
            <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
              Analytics and Visualization
            </h1>
            <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
              Making Data Work for You Turn raw data into meaningful insights
              with our advanced analytics and visualization services. We provide
              comprehensive data analysis, custom reporting, and interactive
              dashboards that enable you to make informed decisions and identify
              trends quickly
            </p>
            <ul className="flex flex-col gap-5">
              <li className="font-normal text-navfontcolor">
                Data Warehousing
              </li>
              <li className="font-normal text-navfontcolor">
                Business Intelligence (BI) Solutions
              </li>
              <li className="font-normal text-navfontcolor">
                Interactive Dashboards
              </li>
              <li className="font-normal text-navfontcolor">
                Custom Reporting
              </li>
              <li className="font-normal text-navfontcolor">
                {" "}
                Big Data Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
