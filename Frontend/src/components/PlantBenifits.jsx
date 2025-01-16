import React from "react";
import potted_plant from "../assets/logos/potted_plant.svg";
import air from "../assets/logos/air.svg";
import work from "../assets/logos/home_work.svg";

const PlantBenifits = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mt-32 mb-10">
        Benifits of Plants
      </h1>
      <div className="flex justify-evenly">
        <div className="h-[320px] w-[300px] bg-white rounded-[30px] p-6 m-10 ">
          <div className="flex bg-white items-center">
            <img
              src={air}
              className="size-16 bg-gray-300 rounded-full p-3"
            ></img>
            <h1 className="text-2xl bg-inherit ml-6 font-medium">
              Air Purifiers
            </h1>
          </div>
          <p className="text-xl font-normal bg-inherit p-3 mt-4">
            Plants are nature's air purifiers, zapping 87% of toxins in just 24
            hours! Bonus: they add humidity and trap dust, keeping colds at bay.
          </p>
        </div>

        <div className="h-[320px] w-[300px] bg-white rounded-[30px] p-6 m-10 ">
          <div className="flex bg-white items-center">
            <img
              src={work}
              className="size-16 bg-gray-300 rounded-full p-3"
            ></img>
            <h1 className="text-2xl bg-inherit ml-6 font-medium">
              Productivity booster
            </h1>
          </div>
          <p className="text-xl font-normal bg-inherit p-3 mt-4">
            Plants = happy employees! They slash stress, boost productivity, and
            reduce sick days by 10%.
          </p>
        </div>

        <div className="h-[320px] w-[300px] bg-white rounded-[30px] p-6 m-10 ">
          <div className="flex bg-white items-center">
            <img
              src={potted_plant}
              className="size-16 bg-gray-300 rounded-full p-3"
            ></img>
            <h1 className="text-2xl bg-inherit ml-6 font-medium">
            Gardening Gains
            </h1>
          </div>
          <p className="text-xl font-normal bg-inherit p-3 mt-4">
          Digging in the dirt is a workout! Burn calories and grow happiness
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantBenifits;
