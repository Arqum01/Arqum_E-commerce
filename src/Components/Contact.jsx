import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MyNavbar from './MyNavbar'
import { FaRegEnvelope } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <>
    <MyNavbar/>
      <section class="bg-white dark:bg-gray-900 pt-5 pb-40">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <h1 class=" text-blue-500 dark:text-blue-400 text-4xl font-bold">Contact us</h1>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Chat to our friendly team</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <FaRegEnvelope class="w-5 h-5"/>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@gmail.com</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <IoChatbubbleOutline class="w-5 h-5"/>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <IoLocationOutline class="w-5 h-5"/>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <FiPhone class="w-5 h-5"/>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-gray-300 dark:bg-gray-800 md:p-8">
                <form>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="FirstName " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="LastName" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="abcd@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
<Footer/>
    </>
  )
}

export default Contact
