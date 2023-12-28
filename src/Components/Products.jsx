import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import data from "./ProductData"
import MyNavbar from './MyNavbar'

const Products = () => {
  return (
    <>
    {/* <Navbar/> */}
    <MyNavbar/>
      <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
    <header>
            <h1 className="text-5xl font-extrabold mb-5 text-black">
             Our Products
            </h1>
            <p className="text-2xl underline-offset-4 text-black">Unleash Possibilities, Embrace Excellence – Explore Our Products and Transform Ordinary Moments into Extraordinary Experiences!</p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {data.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/data/${item.id}`}
                  className="group relative block overflow-hidden"
                >
                  <div className="relative h-[350px] sm:h-[450px]">
                    <img
                      src={item.images}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-black">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
    </ul>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Products
