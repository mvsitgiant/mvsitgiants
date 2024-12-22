import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./../App.css";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../config/config";
import { IoIosArrowDropdownCircle } from "react-icons/io";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(false);
  const [serviceVisiable, setServiceVisiable] = useState("");
  const [linkcolor, setlinkcolor] = useState();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = useNavigate();

  return (
    <div className=" relative  ">
      <header className="bg-[#F0F0F0]  z-50 sm:fixed  w-full ">
        <nav
          aria-label="Global"
          className="conplr flex items-center justify-between  h-20"
        >
          <div className="flex flex-shrink-0">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
              // className="sm-1.5 p-1.5"
            >
              <span className="sr-only">Your Company</span>

              <img src="/assets/logomvs.png" alt="logo" className="logo" />
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-9  items-center">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
              className="text-sm leading-6 group font-semibold text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor "
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full "></span>
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className="text-sm leading-6 font-semibold text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor p-2"
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
                  width: "1300px",
                  left: "-840px",
                }}
              >
                <div className="h-auto w-full conplr">
                  <div className="flex w-full">
                    <div className="flex flex-wrap w-full">
                      {servicesData.map((item, index) => (
                        <div
                          key={index}
                          className="w-1/3 p-4 flex items-center justify-center group"
                          onClick={() => {
                            setlinkcolor(item.id);
                            navigation(item.url, {
                              state: {
                                descripation: item.description,
                                sublink: item.subLink,
                                name: item.name,
                              },
                            });
                          }}
                          onMouseEnter={() => setHoveredId(item.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          <div
                            className="w-full h-full p-3 border-transparent hover:border-2 group-hover:border-black"
                            style={{
                              borderColor:
                                linkcolor === item.id || hoveredId === item.id
                                  ? "#211da6e8"
                                  : "transparent",
                              borderWidth: 2,
                              cursor: "pointer",
                            }}
                          >
                            {item.icon}
                            <p className="  text-sm text-h1color font-bold pt-2 ">
                              {item.name}
                            </p>
                            <p className=" font-normal text-sm text-pcolor pt-2 ">
                              {item.description.split(" ").length > 12 ? (
                                <>
                                  {item.description
                                    .split(" ")
                                    .slice(0, 12)
                                    .join(" ")}{" "}
                                  <span style={{ color: "blue" }}>more...</span>
                                </>
                              ) : (
                                item.description
                              )}
                            </p>
                          </div>
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
              className="text-sm leading-6 group font-semibold text-navfontcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor"
            >
              About Us
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
                to="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src="/assets/logomvs.png" alt="logo" className="logo" />
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
                <div className="space-y-2 py-6">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-700"
                  >
                    Home
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-blue-700 hover:text-white">
                          Services
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {servicesData.map((item, index) => (
                            <Disclosure key={index} as="div" className="-mx-3">
                              {({ open }) => (
                                <>
                                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 hover:bg-blue-700 hover:text-white">
                                    <h1
                                      onClick={() => {
                                        navigation(item.url, {
                                          state: {
                                            descripation: item.description,
                                            sublink: item.subLink,
                                            name: item.name,
                                          },
                                        });
                                        setMobileMenuOpen(false);
                                      }}
                                    >
                                      {" "}
                                      {item.name}
                                    </h1>
                                   
                                  </DisclosureButton>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>

                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-700"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-700"
                  >
                    Contact Us
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
