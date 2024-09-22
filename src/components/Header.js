import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../App.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { servicesData } from "./../config/config";
import { IoIosArrowDropdownCircle } from "react-icons/io";
// const links = [
//   {
//     id: 1,
//     url: "#",
//     text: "Website Development",
//     data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//   },
//   {
//     id: 2,
//     url: "#",
//     text: "Website Development",
//     data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//   },
//   {
//     id: 3,
//     url: "#",
//     text: "Website Development",
//     data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//   },
//   {
//     id: 4,
//     url: "#",
//     text: "Website Development",
//     data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//   },
//   {
//     id: 5,
//     url: "#",
//     text: "Website Development",
//     data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//   },
//   {
//     id: 6,
//     url: "#",
//     text: "Website Development",
//     data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//   },
// ];
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigation = useNavigate();
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [linkcolor, setlinkcolor] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [Sublink, setSubLink] = useState([
    {
      id: 1,
      url: "#",
      text: "Data Science",
      data: "Our Data Science experts will turn raw data into actionable insights that drive growth and innovation.",
    },
    {
      id: 2,
      url: "#",
      text: "Generative AI",
      data: "Our GenAI experts will help you use GenAI to address diverse business challenges with deep expertise.",
    },
    {
      id: 3,
      url: "#",
      text: "Conversational AI",
      data: "Our experts develop Conversational AI solutions to boost efficiency and deliver exceptional customer experiences.",
    },
    {
      id: 4,
      url: "#",
      text: "ML and MLOps",
      data: "We unlock ML's potential through MLOps by streamlining workflows, optimizing resources, and mitigating risks.",
    },
    {
      id: 5,
      url: "#",
      text: "AI Software Development",
      data: "Our AI/ML engineers turn your vision into reality with cloud-native development and advanced expertise.",
    },
  ]);
  return (
    <div
      className="flex flex-col lg:flex-row  justify-between"
      style={{
        backgroundImage: 'url("/assets/herobghome.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <div className="flex flex-col pt-5 ">
        <div className="flex gap-x-[300px] items-center pb-10">
          <div className="conpl">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img src="/assets/logosvg.svg" alt="logo" /> */}
              <h1 className="text-5xl  font-bold bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor inline-block bg-clip-text text-transparent font-rancho">
                oneO8.tech
              </h1>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="lg:flex gap-x-3 justify-end md:gap-x-5 pt-6 hidden">
            <div className="">
              <Link
                to="/"
                className="text-sm leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
              </Link>
            </div>
            <div className="relative group">
              <Link
                to="/services"
                className="text-sm leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor p-2"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
              </Link>

              <div
                className="absolute top-8 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-40  p-10"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFFFFF, #DEDFF6EC,#EDF4FF), url("/assets/hoverimagebg.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "1090px",
                  height: "auto",
                  left: "-525px",
                }}
              >
                <div className="h-auto w-full">
                  <div className="flex">
                    <div className="flex flex-col border-r-2 border-black w-[22%]">
                      {servicesData.map((item, index) => (
                        <div
                          key={index}
                          className="font-normal pb-3 cursor-pointer focus:text-hovnavfontcolor flex gap-5 justify-between pr-2 hover:text-hovnavfontcolor"
                          onClick={() => {
                            setSubLink(item.subLink);
                            setlinkcolor(item.id);
                          }}
                          style={{
                            color: linkcolor === item.id ? "#F1245B" : "black",
                          }}
                        >
                          <p className="font-normal hover:text-hovnavfontcolor  text-sm pb-[27px] pt-0.5  p-2">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 pl-10 w-[75%] text-left justify-center">
                      {Sublink.map((link) => (
                        <div
                          key={link.id}
                          className="rounded-lg text-left  cursor-pointer"
                          onClick={() => {
                            navigation("/commonservice", {
                              state: { link, Sublink },
                            });
                          }}
                        >
                          <a className="text-black hover:underline font-medium text-sm hover:text-hovnavfontcolor">
                            {link.text}
                          </a>
                          <p className="text-[12px] font-normal py-5">
                            {link.data}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <Link
                to="/about"
                className="text-sm leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="relative md:hidden flex justify-center flex-1  lg:mt-0 overflow-hidden w-auto lg:w-screen">
            <div className="relative flex justify-center lg:block">
              <img src="/assets/homepages.png" alt="" className="" />
            </div>
          </div>
          <div className="flex flex-1 flex-col pt-10">
            <div className="flex flex-col mt-16 lg:mt-10 px-2 lg:pr-12 lg:px-0 conpl">
              <h1 className="font-poppinsh font-bold text-2xl md:text-4xl mb-3 md:mb-5 text-center lg:text-left leading-tight myheading">
                Deploy AI/ML Models in 90% Less Time and Cost!
              </h1>

              <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base text-center lg:text-left py-4">
                Built with enterprise scale and security, Datatron MLOps
                integrates model development seamlessly with your existing CI/CD
                process. Enabling businesses to deploy models securely and at
                scale in 90% less time and cost compared to homegrown solutions!
              </p>
              <div className="flex justify-center lg:justify-start pb-5">
                <Link
                  to="/contact"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lgfirstcolor to-lgsecondcolor group-hover:from-lgfirstcolor group-hover:to-lgsecondcolor hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                >
                  <span className="relative px-10 py-2 transition-all ease-in duration-75 bg-white text-black hover:text-white font-normal rounded-md group-hover:bg-opacity-0">
                    contact us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden mt-10 lg:mt-0 overflow-hidden sm:flex justify-end">
        <div className="relative flex justify-center lg:block">
          <img
            src="/assets/homepageleftheader2.png"
            alt=""
            className="rounded-full bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor p-2 w-1/4 md:w-1/3 lg:w-1/3 2xl:w-1/4 h-auto absolute top-[5%] lg:top-[10%] lg:right-[10%] z-20"
          />
          <img
            src="/assets/homepageleftheader1.png"
            alt=""
            className="w-[1900px] h-auto relative -top-12 -right-20 2xl:-top-20 2xl:-right-32"
          />
          <img
            src="/assets/homepageleftheader4.png"
            alt=""
            className="rounded-full bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor p-2 w-1/4 md:w-1/3 lg:w-1/3 2xl:w-1/4 h-auto absolute left-[15%] bottom-[10%] lg:bottom-[15%] 2xl:bottom-[20%]"
          />
          <img
            src="/assets/homepageleftheader3.png"
            alt=""
            className="rounded-full bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor p-2 w-1/4 md:w-1/4 lg:w-1/4 2xl:w-1/5 h-auto absolute right-[5%] lg:right-[10%] bottom-[5%] 2xl:right-[15%] 2xl:bottom-[10%]"
          />
        </div>
      </div>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 left-0 bg-white z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor inline-block bg-clip-text text-transparent">
                Mediocre
              </h1>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  About
                </Link>
              </div>
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Header;
