import React from "react";

const PlantComponent = ({ h1, p1, p2, photo, bgColor, variant }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`flex justify-between h-[440px] w-[90%] rounded-[30px] py-10 px-16 mx-auto my-10`}
    >
      {variant ? (
        <>
          <img src={photo} className="w-[30%] rounded-[20px]"></img>
          <div className="flex bg-inherit flex-col items-center">
            <h1 className="bg-inherit text-white text-4xl w-[60%] font-semibold">
              {h1}
            </h1>
            <p className="bg-inherit text-white w-[60%] text-2xl mt-10">{p1}</p>
            <p className="bg-inherit text-white w-[60%] text-2xl ">{p2}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex bg-inherit flex-col items-center">
            <h1 className="bg-inherit text-white text-4xl w-[60%] font-semibold">
              {h1}
            </h1>
            <p className="bg-inherit text-white w-[60%] text-2xl mt-10">{p1}</p>
            <p className="bg-inherit text-white w-[60%] text-2xl ">{p2}</p>
          </div>
          <img src={photo} className="w-[30%] rounded-[20px]"></img>
        </>
      )}
    </div>
  );
};

export default PlantComponent;
