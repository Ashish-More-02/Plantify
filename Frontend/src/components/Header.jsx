import React from "react";
import logo from "../assets/images/plantify_icon.png";
import home from "../assets/logos/home.svg";
import storeFront from "../assets/logos/storeFront.svg";
import person from "../assets/logos/person.svg";
import blog from "../assets/logos/blog.svg";

const Header = () => {
  return (
    <div className="flex justify-between my-3">
      <div className="flex items-center mx-6 cursor-pointer">
        <img src={logo} className="size-12"></img>
        <h1 className="text-[32px] font-semibold text-[rgb(42,109,26)]">
          Plantify
        </h1>
      </div>

      {/* links */}
      <div className="w-[38%] flex items-center justify-evenly">
        <div className="w-28 flex items-center cursor-pointer">
          <img src={home} className="size-6"></img>
          <span className="text-xl mx-1">Home</span>
        </div>
        <div className="w-28 flex items-center cursor-pointer">
          <img src={storeFront} className="size-6"></img>
          <span className="text-xl mx-1">Store</span>
        </div>
        <div className="w-28 flex items-center cursor-pointer">
          <img src={blog} className="size-6"></img>
          <span className="text-xl mx-1">Blogs</span>
        </div>
        <div className="w-28 flex items-center cursor-pointer">
          <img src={person} className="size-6"></img>
          <span className="text-xl mx-1">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
