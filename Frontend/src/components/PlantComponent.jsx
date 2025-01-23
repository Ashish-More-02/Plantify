import React from "react";

const PlantComponent = ({ h1, p1, p2, photo, bgColor, variant }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[400px] w-[90%] rounded-[30px] py-10 px-6 md:px-12 lg:px-16 mx-auto my-10"
    >
      {variant ? (
        <>
          {/* Image Section */}
          <img
            src={photo}
            className="w-[80%] md:w-[40%] lg:w-[30%] rounded-[20px] mb-6 md:mb-0"
            alt={h1}
          />
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left w-full md:w-[60%]">
              {h1}
            </h1>
            <p className="text-white text-md md:text-lg lg:text-2xl mt-6 w-full md:w-[60%] text-center md:text-left">
              {p1}
            </p>
            <p className="text-white text-md md:text-lg lg:text-2xl mt-4 w-full md:w-[60%] text-center md:text-left">
              {p2}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left w-full md:w-[60%]">
              {h1}
            </h1>
            <p className="text-white text-md md:text-lg lg:text-2xl mt-6 w-full md:w-[60%] text-center md:text-left">
              {p1}
            </p>
            <p className="text-white text-md md:text-lg lg:text-2xl mt-4 w-full md:w-[60%] text-center md:text-left">
              {p2}
            </p>
          </div>
          {/* Image Section */}
          <img
            src={photo}
            className="w-[80%] md:w-[40%] lg:w-[30%] rounded-[20px] mt-6 md:mt-0"
            alt={h1}
          />
        </>
      )}
    </div>
  );
};

export default PlantComponent;
