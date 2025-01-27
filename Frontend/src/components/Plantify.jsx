import React from "react";
import plant from "../assets/logos/potted_plant.svg";
import shopping from "../assets/logos/shopping.svg";
import edit_doc from "../assets/logos/edit_doc.svg";

const Plantify = () => {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-5xl sm:text-4xl md:text-5xl font-semibold text-center mt-6 mb-4">
        What is Plantify
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-center font-semibold mb-10">
        Welcome to Plantify, your one-stop destination for all things green and
        beautiful!
      </h2>

      <div className="flex flex-col items-center my-10 gap-8">
        {/* Learn More Section */}
        <div className=" w-full flex  sm:flex-row items-center justify-between gap-4">
          <div className="bg-[rgb(82,110,72)] w-full sm:w-[60%] h-40 rounded-[30px] font-semibold text-white text-lg sm:text-2xl md:text-3xl text-center py-10 sm:py-14">
            Learn More about plants on Plantify 🌿
          </div>
          <div className="bg-[rgb(194,255,199)] w-full sm:w-[40%] h-40 rounded-[30px] flex items-center justify-center">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 bg-[rgb(194,255,199)] cursor-pointer"
              src={plant}
              alt="Learn More"
            />
          </div>
        </div>

        {/* Blogs Section */}
        <div className="w-full flex flex-row-reverse sm:flex-row-reverse items-center justify-between gap-4">
          <div className="bg-[rgb(82,110,72)] w-full sm:w-[60%] h-40 rounded-[30px] font-semibold text-white text-lg sm:text-2xl md:text-3xl text-center py-10 sm:py-14">
            Write Blogs and Read Blogs 📝
          </div>
          <div className="bg-[rgb(194,255,199)] w-full sm:w-[40%] h-40 rounded-[30px] flex items-center justify-center">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 bg-[rgb(194,255,199)] cursor-pointer"
              src={edit_doc}
              alt="Blogs"
            />
          </div>
        </div>

        {/* Shop Section */}
        <div className="w-full flex sm:flex-row items-center justify-between gap-4">
          <div className="bg-[rgb(82,110,72)] w-full sm:w-[60%] h-40 rounded-[30px] font-semibold text-white text-lg sm:text-2xl md:text-3xl text-center py-10 sm:py-14">
            Shop Products and Sell Products 🛍️
          </div>
          <div className="bg-[rgb(194,255,199)] w-full sm:w-[40%] h-40 rounded-[30px] flex items-center justify-center">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 bg-[rgb(194,255,199)] cursor-pointer"
              src={shopping}
              alt="Shop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plantify;
