import React, { useState } from "react";
import logo from "../assets/images/plantify_icon.png";
import home from "../assets/logos/home.svg";
import storeFront from "../assets/logos/storeFront.svg";
import person from "../assets/logos/person.svg";
import blog from "../assets/logos/blog.svg";
import menuIcon from "../assets/logos/menu.png"; // Replace with your menu icon
import closeIcon from "../assets/logos/close.png"; // Replace with your close icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-3 sm:px-6 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <img src={logo} className="h-8 w-8 sm:h-12 sm:w-12" alt="Plantify Logo" />
        <h1 className="text-3xl sm:text-3xl font-semibold text-[rgb(42,109,26)] ml-2">
          Plantify
        </h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            className="h-8 w-8"
            alt="Menu Toggle"
          />
        </button>
      </div>

      {/* Links (Desktop and Mobile Menu) */}
      <div
        className={`absolute sm:static top-16 right-0 sm:flex sm:items-center sm:justify-evenly w-full sm:w-[45%] bg-white sm:bg-transparent transition-all duration-300 z-50 ${
          isMenuOpen ? "block" : "hidden"
        } sm:block`}
      >
        <div
          className={`flex flex-col sm:flex-row sm:justify-evenly w-full z-50 ${
            isMenuOpen ? "items-end pr-6" : "sm:items-center"
          }`}
        >
          <div className="flex items-center cursor-pointer py-2 sm:py-0 px-4 sm:px-0">
            <img src={home} className="h-6 w-6" alt="Home" />
            <span className="text-lg sm:text-xl mx-2">Home</span>
          </div>
          <div className="flex items-center cursor-pointer py-2 sm:py-0 px-4 sm:px-0">
            <img src={storeFront} className="h-6 w-6" alt="Store" />
            <span className="text-lg sm:text-xl mx-2">Store</span>
          </div>
          <div className="flex items-center cursor-pointer py-2 sm:py-0 px-4 sm:px-0">
            <img src={blog} className="h-6 w-6" alt="Blogs" />
            <span className="text-lg sm:text-xl mx-2">Blogs</span>
          </div>
          <div className="flex items-center cursor-pointer py-2 sm:py-0 px-4 sm:px-0">
            <img src={person} className="h-6 w-6" alt="Login" />
            <span className="text-lg sm:text-xl mx-2">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
