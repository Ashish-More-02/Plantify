import React, { useState, useEffect } from "react";
import p1 from "../assets/images/plant_images/p1.jpeg";
import p2 from "../assets/images/plant_images/p2.jpg";
import p3 from "../assets/images/plant_images/p3.jpeg";
import p4 from "../assets/images/plant_images/p4.jpeg";
import p5 from "../assets/images/plant_images/p5.jpg";
import p6 from "../assets/images/plant_images/p6.jpeg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [p1, p2, p3, p4, p5, p6];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[90vh] flex items-center justify-between ">
      <div className="sm:px-36 z-20 mx-auto">
        <h1 className="text-6xl font-semibold py-2">Plants</h1>
        <h1 className="text-6xl font-semibold py-2">Are</h1>
        <h1 className="text-6xl font-semibold py-2">Everything.</h1>
        <p className="font-medium">Explore, Read, shop and sell about plants</p>
        <p className="font-medium"> All in one place ~ plantify</p>
      </div>

      {/* image slider */}
      {/* <div className=" ml-14 sm:mx-36 sm:my-10 absolute sm:static bg-[rgb(0,0,0,0.3)] z-10 w-96 h-[80%]">
        hello 
      </div> */}
      <div className=" ml-14 sm:mx-36 sm:my-10 absolute sm:static">
          <div className="w-96 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-96 h-[550px] rounded-[60px] flex-shrink-0 blur-sm sm:blur-none"
                  alt={`Plant ${index + 1}`}
                />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
