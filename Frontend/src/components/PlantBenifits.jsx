import React from "react";
import potted_plant from "../assets/logos/potted_plant.svg";
import air from "../assets/logos/air.svg";
import work from "../assets/logos/home_work.svg";

const PlantBenifits = () => {
  return (
    <div>
      <h1 className="text-5xl sm:text-4xl md:text-5xl font-semibold text-center mt-28 sm:mt-28 mb-10 sm:mb-10">
        Benefits of Plants
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-evenly flex-wrap gap-8 sm:gap-6 ">
        {/* Air Purifiers Card */}
        <div className="h-auto sm:h-[320px] w-[90%] sm:w-[300px] bg-white rounded-[30px] p-6 shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <div className="flex items-center">
            <img
              src={air}
              className="h-12 w-12 bg-gray-300 rounded-full p-3"
              alt="Air Purifiers"
            />
            <h1 className="text-xl sm:text-2xl font-medium ml-4">
              Air Purifiers
            </h1>
          </div>
          <p className="text-base sm:text-lg mt-4">
            Plants are nature's air purifiers, zapping 87% of toxins in just 24
            hours! Bonus: they add humidity and trap dust, keeping colds at bay.
          </p>
        </div>

        {/* Productivity Booster Card */}
        <div className="h-auto sm:h-[320px] w-[90%] sm:w-[300px] bg-white rounded-[30px] p-6 shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <div className="flex items-center">
            <img
              src={work}
              className="h-12 w-12 bg-gray-300 rounded-full p-3"
              alt="Productivity Booster"
            />
            <h1 className="text-xl sm:text-2xl font-medium ml-4">
              Productivity Booster
            </h1>
          </div>
          <p className="text-base sm:text-lg mt-4">
            Plants = happy employees! They slash stress, boost productivity, and
            reduce sick days by 10%.
          </p>
        </div>

        {/* Gardening Gains Card */}
        <div className="h-auto sm:h-[320px] w-[90%] sm:w-[300px] bg-white rounded-[30px] p-6 shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <div className="flex items-center">
            <img
              src={potted_plant}
              className="h-12 w-12 bg-gray-300 rounded-full p-3"
              alt="Gardening Gains"
            />
            <h1 className="text-xl sm:text-2xl font-medium ml-4">
              Gardening Gains
            </h1>
          </div>
          <p className="text-base sm:text-lg mt-4">
            Digging in the dirt is a workout! Burn calories and grow happiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantBenifits;
