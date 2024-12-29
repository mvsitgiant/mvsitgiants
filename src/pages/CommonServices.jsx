import React from "react";


import Commonheader from "../components/Commonheader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import Consulation from './../components/Consulation';

const CommonServices = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const data = location?.state;
  const { name, descripation,sublink } = data;
  console.log("routes", sublink);
  return (
    <div className="max-w-[1366px] mx-auto">
     
      <div>
        <Commonheader namepage={name} />
      </div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 conplr">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                MVS Solutions
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {name}
              </p>
              <p class="mt-6 text-base leading-7 text-gray-600">
                {descripation}
              </p>
            </div>
            <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {sublink.map((data,index)=>(<div class="relative pl-9">
                <dt class="font-semibold text-gray-900">
                  <svg
                    class="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                    x-description="Heroicon name: mini/check"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {data.text}
                </dt>
                <dd class="mt-2">
                 {data.data}
                </dd>
              </div>))}

             
            </dl>
          </div>
        </div>
      </div>
      <Consulation/>
      <Footer />
    </div>
  );
};

export default CommonServices;
