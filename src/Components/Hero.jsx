import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <header class="bg-white dark:bg-gray-900">
    <div class="container  py-5 lg:my-10 md:my-10 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-3/4 lg:ps-20 px-5">
                <div class="lg:my-20">
                    <h1 class=" font-bold text-gray-800 dark:text-white lg:text-5xl text-3xl">Discover Endless Delights, <span class="text-gray-500">Shop with Style!</span></h1>

                    <p class="mt-3 text-xl text-black dark:text-gray-400">Unleash the Power of Fashion and Functionality. Explore our curated collection of must-haves, from trendsetting apparel to cutting-edge gadgets. Elevate your shopping experience with exclusive deals and exceptional quality. Your journey to style and convenience starts here – Welcome to [Your E-commerce Brand]!</p>

                    <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <Link class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-black rounded-lg lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-700 ">
                            Shop Now!
                        </Link>
                    </div>
                </div> 
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full max-w-md " src="Banner.png" alt="email illustration vector art" />
            </div>
        </div>
    </div>
</header>
    )
}



export default Hero
