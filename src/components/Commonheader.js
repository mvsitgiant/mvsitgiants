import React from "react";

const Commonheader = ({ namepage = "Welcome oneO8.tech" }) => {
  return (
    <div>
      {" "}
      <div
        className="flex flex-col justify-center  py-[5%]"
        style={{
          backgroundImage: ` url("/assets/herobghome.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
          width: "100%",
        }}
      >
        <h1 className="text-black text-3xl sm:text-4xl font-semibold pb-3 pt-20 conpl">
          {namepage}
        </h1>
      </div>
    </div>
  );
};

export default Commonheader;
