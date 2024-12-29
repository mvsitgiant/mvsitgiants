import React from "react";
import "./../App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
const Keyfuture = () => {
  // useEffect(() => {
  //   AOS.init();
  // });
  return (
    <div className="conmlr py-10">
      <h1 className="py-5 md:py-10 font-semibold text-2xl text-iconcolor md:text-3xl uppercase text-center">
       Explore our solutions
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div
          className="flex justify-center lg:justify-start mt-5 lg:mt-0 lg:w-1/2"
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <img
            src="/assets/Techsolution.png"
            alt=""
            className="w-full max-w-sm lg:max-w-md border-r-2 rounded-lg"
          />
        </div>
        <div
          className="flex flex-col pt-5 lg:pl-10 lg:pr-20 lg:w-1/2"
          // data-aos="fade-left"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
            Tech Solutions & Products:
          </h1>
          <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
            We offer a full spectrum of technology solutions and products to help you grow and innovate. From web and mobile applications to enterprise solutions, we provide customized services to meet your unique business needs. Our team is dedicated to delivering high-quality, scalable, and secure solutions that enhance your digital presence and optimize your operations.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-10">
        <div
          className="flex flex-col pt-5 lg:pr-20 lg:w-1/2"
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-easing="ease-out"
          // data-aos-duration="600"
        >
          <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
            Healthcare Services Solutions:
          </h1>
          <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
           We specialize in providing comprehensive IT solutions for the healthcare industry. Our services include patient management systems, appointment scheduling apps (for web and mobile), and marketing solutions tailored for healthcare providers. Additionally, we offer Point of Sale (POS) systems for seamless transactions, along with various other IT solutions to streamline operations, enhance patient experiences, and improve overall service delivery. Whether it's optimizing patient care, managing appointments, or implementing efficient payment solutions, we are committed to meeting the unique needs of healthcare professionals.
          </p>
        </div>
        <div
          className="flex justify-center lg:justify-end mt-5 lg:mt-0 lg:w-1/2"
          
        >
          <img
            src="/assets/healthcare.png"
            alt=""
            className="w-full max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10">
        <div
          className="flex justify-center lg:justify-start mt-5 lg:mt-0 lg:w-1/2"
          
        >
          <img
            src="/assets/possystem.png"
            alt=""
            className="w-full max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
        <div
          className="flex flex-col pt-5 lg:pl-10 lg:pr-20 lg:w-1/2"
          
        >
          <h1 className="font-poppinsh font-semibold text-2xl md:text-3xl mb-3 md:mb-5">
            Point of Sale (POS) System Software Solutions:
          </h1>
          <p className="mb-3 text-navfontcolor font-poppinsh font-normal md:mb-5 text-sm md:text-base">
            We provide end-to-end Point of Sale (POS) system solutions across various industries, including restaurants, schools, colleges, grocery stores, online delivery services, factories, import/export businesses, and more. Our tailored solutions streamline transaction processes, inventory management, and customer interactions, enhancing efficiency and accuracy. Whether you're running a retail store, a service-based business, or a manufacturing operation, our POS systems are designed to optimize your operations, improve sales tracking, and provide a seamless customer experience. From setup to ongoing support, we offer comprehensive solutions for all your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keyfuture;
