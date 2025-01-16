import React from "react";
import plant from "../assets/logos/potted_plant.svg";
import shopping from "../assets/logos/shopping.svg";
import edit_doc from "../assets/logos/edit_doc.svg";

const Plantify = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mt-6 mb-4">
        What is Plantify
      </h1>
      <h2 className="text-2xl text-center font-semibold mb-10">
        Welcome to Plantify, your one-stop destination for all things green and
        beautiful!
      </h2>

      <div className="flex flex-col mx-24 items-center my-10">
        <div className="w-full flex my-8">
          <div className="bg-[rgb(82,110,72)] w-[60%] mx-8 h-40 rounded-[30px] font-semibold text-white text-3xl text-center py-14">Learn More about plants on plantify 🌿</div>
          <div className="bg-[rgb(194,255,199)] w-[40%] mx-8 h-40 rounded-[30px] flex items-center justify-center" ><img className="size-20 bg-[rgb(194,255,199)] cursor-pointer"  src={plant}></img></div>
        </div>
        <div className="w-full flex my-8">
          <div className="bg-[rgb(194,255,199)] w-[40%] mx-8 h-40 rounded-[30px] flex items-center justify-center"><img className="size-20 bg-[rgb(194,255,199)] cursor-pointer"  src={edit_doc}></img></div>
          <div className="bg-[rgb(82,110,72)] w-[60%] mx-8 h-40 rounded-[30px] font-semibold text-white text-3xl text-center py-14">Write Blogs and Read Blogs 📝</div>
        </div>
        <div className="w-full flex my-8">
          <div className="bg-[rgb(82,110,72)] w-[60%] mx-8 h-40 rounded-[30px] font-semibold text-white text-3xl text-center py-14">Shop Products and Sell Products 🛍️</div>
          <div className="bg-[rgb(194,255,199)] w-[40%] mx-8 h-40 rounded-[30px] flex items-center justify-center"><img className="size-20 bg-[rgb(194,255,199)] cursor-pointer"  src={shopping}></img></div>
        </div>
      </div>
    </div>
  );
};

export default Plantify;
