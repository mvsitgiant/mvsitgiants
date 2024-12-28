import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./../App.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import {  XMarkIcon } from "@heroicons/react/24/outline";
// import { servicesData } from "./../config/config";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
// import Navbar from "./Navbar";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [linkcolor, setlinkcolor] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
    <div
      className="flex flex-col lg:flex-row  justify-between "
      style={{
        backgroundImage: 'url("/assets/herobghome.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        width: "100%",
      }}
    >
      {/* <Navbar /> */}
      <div className="flex flex-col pt-14 ">
        <div className="flex flex-col lg:flex-row mt-20">
          <div className="flex flex-1 flex-col ">
            <div className="flex flex-col   px-2 lg:pr-12 lg:px-0 conpl">
              <h1 className="font-poppinsh font-bold text-2xl md:text-4xl mb-3 md:mb-5  text-left leading-tight myheading">
                Turn your business ideas into real solutions!
              </h1>

              <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base text-left lg:text-left py-4">
                We offer Software Development as a Service (SDaaS) for building
                web apps, mobile apps,marketing and innovative products for your
                business. Get custom solutions tailored to your business needs
                to help you grow and succeed.
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
            className="rounded-full bg-gradient-to-r from-lgfirstcolor via-lgsecondcolor to-lgsecondcolor p-2 w-1/4 md:w-1/3 lg:w-1/3 2xl:w-1/4 h-auto absolute top-[5%] lg:top-[15%] lg:right-[10%] z-20"
          />
          <img
            src="/assets/homepageleftheader1.png"
            alt=""
            className="w-[1800px] h-auto relative -top-12 -right-20 2xl:-top-20 2xl:-right-32"
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
                mvsItGiants
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
