import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { servicesData } from "../config/config";
import "./../App.css";
const OurServices = () => {
  const navigation=useNavigate()
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="conplr   lg:p-5">
      <div className="my-5">
        <h1 className="text-4xl uppercase font-poppinsh font-semibold text-iconcolor">
         Explore our services
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  gap-5 lg:border-t-2  ">
        <div className="lg:border-r-2 w-full lg:w-[30%] pt-5  flex flex-col justify-between">
          <div>
            <p className="font-normal py-3 pr-3 text-navfontcolor ">
             We specialize in web, mobile, desktop, and TV app development, offering innovative solutions across all technologies. Our services also include marketing consultancy, tailored to boost your business. With a creative, young, and skilled team, we focus on delivering top-quality results that empower businesses to thrive in a competitive market.
            </p>
          </div>
          <div className="flex   py-5 lg:py-5">
            <Link
              to="/services"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lgfirstcolor to-lgsecondcolor group-hover:from-lgfirstcolor group-hover:to-lgsecondcolor hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 "
            >
              <span className="relative px-8 py-2 transition-all ease-in duration-75 bg-white text-black hover:text-white font-normal rounded-md group-hover:bg-opacity-0">
                Explore Our Services
              </span>
            </Link>
          </div>
        </div>
        <div className="   w-full lg:w-[70%] pt-5">
          <Slider {...settings}>
            {servicesData.map((service, index) => (
              <div key={service.id} className="p-0 lg:p-2  ">
                <div
                  className="rounded-lg border-[1px] hover:border-transparent border-[#5D5C5C] h-[350px] flex flex-col justify-between hover:bg-gradient-to-b from-[#FFE2EA] via-[#C5DCFF] to-[#C5DCFF]  "
                  style={{
                    background:
                      index === 0 &&
                      `linear-gradient(to bottom, #FFE2EA, #C5DCFF,#C5DCFF)`,cursor:"pointer"
                  }}
                  onClick={()=>navigation(service.url, {
                              state: { descripation:service.description,sublink: service.subLink, name: service.name },
                            })}
                >
                  <div className="">
                    <h1 className="font-semibold text-5xl text-navfontcolor py-5 pl-3">
                      0{service.id}
                    </h1>
                    <h2 className="font-semibold pb-2 px-3">{service.name}</h2>
                    <p className="font-normal text-sm pl-3 pr-2 text-navfontcolor">
                      {service.description.split(" ").length > 20 ? (
                                <>
                                  {service.description
                                    .split(" ")
                                    .slice(0, 20)
                                    .join(" ")}{" "}
                                  <span style={{ color: "blue" }}>more...</span>
                                </>
                              ) : (
                                service.description
                              )}
                    </p>
                  </div>
                  <div className="flex justify-between justify-items-end ">
                    <div className="bg-[#6EA7FC] rounded-tr-full p-5">
                      <CiGlobe size={35} />
                    </div>
                    <div className="p-5">
                      <MdOutlineArrowRightAlt color="#F1245B" size={35} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
