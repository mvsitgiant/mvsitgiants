import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./../App.css";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../config/config";
import { IoIosArrowDropdownCircle } from "react-icons/io";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceVisiable, setServiceVisiable] = useState("");
  const [linkcolor, setlinkcolor] = useState(1);
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
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = useNavigate();

  return (
    <div className=" relative max-w-[1366px] ">
      <header className="bg-white  z-50 sm:fixed  w-full ">
        <nav
          aria-label="Global"
          className="conplr flex items-center lg:gap-x-[500px] gap-x-[100px] [1366px]:gap-x-[500px] md:gap-x-[450px]  h-20"
        >
          <div className="flex flex-shrink-0">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Your Company</span>
              <h1
                className={`text-5xl font-bold bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor inline-block bg-clip-text text-transparent font-rancho`}
              >
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
          <div className="hidden lg:flex lg:gap-x-9  items-center">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
              className="text-sm leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor "
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full "></span>
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className="text-sm leading-6 font-medium text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor p-2"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 ease-in-out h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
              </Link>

              <div
                className="absolute top-8 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none group-hover:pointer-events-auto z-30 p-6 lg:p-10"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFFFFF, #DEDFF6EC,#EDF4FF), url("/assets/hoverimagebg.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "1050px",
                  left: "-740px",
                }}
              >
                <div className="h-auto w-full">
                  <div className="flex">
                    <div className="flex flex-col border-r-2 border-black w-[22%]">
                      {servicesData.map((item, index) => (
                        <div
                          key={index}
                          className="font-normal pb-3 cursor-pointer focus:text-hovnavfontcolor flex gap-5 justify-between pr-2"
                          onClick={() => {
                            setSubLink(item.subLink);
                            setlinkcolor(item.id);
                          }}
                          style={{
                            color: linkcolor === item.id ? "#F1245B" : "black",
                          }}
                        >
                          <p className="font-normal text-sm pb-[27px] hover:text-hovnavfontcolor pt-0.5">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 pl-10 w-[75%] text-left justify-center">
                      {Sublink.map((link) => (
                        <div
                          key={link.id}
                          className="rounded-lg text-left cursor-pointer"
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

            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/about"
              className="text-sm leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
            </Link>

            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lgfirstcolor to-lgsecondcolor group-hover:from-lgfirstcolor group-hover:to-lgsecondcolor hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 hover:scale-105"
            >
              <span className="relative px-6 py-1 transition-all ease-in duration-75  text-white font-normal rounded-md group-hover:bg-opacity-0">
                contact us
              </span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 bg-white z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1">
            <div className="flex items-center justify-between">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Your Company</span>
                <h1
                  className={`text-3xl font-bold bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor inline-block bg-clip-text text-transparent`}
                >
                  Mediocre
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col gap-5">
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                    to="/"
                    className="text-lg leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
                  </Link>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                    to="/services"
                    className="text-lg leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor"
                  >
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
                  </Link>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                    to="/about"
                    className="text-lg leading-6 group font-medium text-navfontcolor relative hover:text-hovnavfontcolor"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
                  </Link>

                  <Link
                    to="/contact"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lgfirstcolor to-lgsecondcolor group-hover:from-lgfirstcolor group-hover:to-lgsecondcolor hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative px-6 py-1 transition-all ease-in duration-75  text-white font-normal rounded-md group-hover:bg-opacity-0">
                      contact us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
