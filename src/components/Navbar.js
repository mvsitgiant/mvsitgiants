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
// import { IoIosArrowDropdownCircle } from "react-icons/io";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(false);
  // const [serviceVisiable, setServiceVisiable] = useState("");
  const [linkcolor, setlinkcolor] = useState();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = useNavigate();

  return (
 
     <>
      <div class="fixed inset-x-0 top-0 z-50 sm:hidden block">
        <div class="bg-[#211da6]">
          <div class="mx-auto max-w-7xl py-2 px-3 ">
           
              <div class="flex  items-center justify-between ">
              <div> <Link
              to="tel:+919792540100"
              className="flex flex-row items-center gap-x-1   mb-3"
            >
              {/* SVG Icon */}
              <div className=" ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none" // Fill the SVG with the current text color
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center">
                <h5 className="text-xs font-normal leading-4  text-gray-400 ">
                  Have any question?
                </h5>
                <h5 className="text-xs font-medium leading-4   text-white">
                  +919792540100
                </h5>
              </div>
            </Link></div>
              <div>  <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="bg-white rounded-lg py-1"
            >
              <span className="relative px-1  transition-all ease-in duration-75  text-iconcolor font-normal  ">
                contact us
              </span>
            </Link></div>
                

          
              </div>
            
          </div>
        </div>
      </div>
      <header className="bg-[#F0F0F0]  z-40 fixed  mt-12 sm:mt-0 w-full ">
      
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
              className="text-sm leading-6 group font-semibold text-iconcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor "
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full "></span>
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className="text-sm leading-6 font-semibold text-iconcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor p-2"
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
                  left: "-620px",
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
              className="text-sm leading-6 group font-semibold text-iconcolor relative hover:text-hovnavfontcolor focus:text-hovnavfontcolor"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-hovnavfontcolor group-hover:w-full"></span>
            </Link>
            <Link
              to="tel:+919792540100"
              className="flex flex-col sm:flex-row items-center gap-x-2 border-l-2 border-iconcolor mb-3"
            >
              {/* SVG Icon */}
              <div className="sm:block hidden ml-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="currentColor" // Fill the SVG with the current text color
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-iconcolor"
                >
                  <path
                    d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                    stroke="#211da6e8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center">
                <h5 className="text-sm font-medium leading-6  text-h1color ">
                  Have any question?
                </h5>
                <h5 className="text-base font-semibold leading-6   text-iconcolor">
                  +919792540100
                </h5>
              </div>
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
 </>
  );
}
