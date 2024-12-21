import React from "react";

const Commonheader = ({ namepage = "Welcome MVS " }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center py-[8%]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/herocommon.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
          width: "100%",
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl font-semibold pb-3 pt-20 conpl">
          {namepage}
        </h1>
      </div>
    </div>
  );
};


export default Commonheader;
