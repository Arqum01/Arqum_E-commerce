import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="bg-white">
      <div className="container  py-5 lg:my-10 md:my-10 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-3/4 lg:ps-20 px-5">
            <div className="lg:my-20">
              <h1 className=" font-bold text-gray-800 dark:text-white lg:text-5xl text-3xl">
                Discover Endless Delights,{" "}
                <span className="text-gray-500">Shop with Style!</span>
              </h1>

              <p className="mt-3 text-xl text-black dark:text-gray-400">
                Unleash the Power of Fashion and Functionality. Explore our
                curated collection of must-haves, from trendsetting apparel to
                cutting-edge gadgets. Elevate your shopping experience with
                exclusive deals and exceptional quality. Your journey to style
                and convenience starts here – Welcome to [Your E-commerce
                Brand]!
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <Link className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-black rounded-lg lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-700 ">
                  Shop Now!
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md "
              src="Banner.png"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
