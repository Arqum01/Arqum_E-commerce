import React from 'react'
import Footer from './Footer'
import MyNavbar from './MyNavbar'

const Blog = () => {
  return (
    <>
    <MyNavbar/>
    <header className="lg:mx-80 my-10 ">
            <h1 className="underline text-5xl font-extrabold mb-5 text-black">
              Our Blogs
            </h1>
          </header>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 my-20 sm:px-6  lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="Party"
          src="BlackShirt.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"> Unveiling Our Best Sellers</h2>

        <p className="mt-4 text-gray-600">
        Dive into the world of customer favorites! Explore our best-selling products, understand why they're loved, and find the perfect addition to your lifestyle. From trendy fashion to must-have gadgets, this blog will guide you through the top picks that define our commitment to quality and innovation.
        </p>

        {/* <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a> */}
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 my-20 lg:px-8 ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
        <img
          alt="Party"
          src="Production.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">The Making of my Brand.</h2>

        <p className="mt-4 text-gray-600">
        Ever wondered how your favorite products come to life? Join us on an exclusive behind-the-scenes tour of our production process. From design inception to the final product, learn about the dedication and craftsmanship that goes into creating each item. Gain a deeper appreciation for the passion and precision that make [Your Brand] stand out in the world of e-commerce.
        </p>

        {/* <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a> */}
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 my-20 lg:px-8 ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="Party"
          src="ClientReview.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"> Real Experiences, Real Satisfaction</h2>

        <p className="mt-4 text-gray-600">
        Our customers are at the heart of everything we do. In this blog, read real stories from our satisfied customers who have experienced the joy of shopping with us. Discover how our products have become a seamless part of their lives and get inspired by their testimonials. Join the community of happy shoppers and share in the joy of finding the perfect items at my brand.
        </p>

        {/* <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a> */}
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 my-20 lg:px-8 ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
        <img
          alt="Party"
          src="Summer.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"> Elevate Your Style for Summer</h2>

        <p className="mt-4 text-gray-600">
        Stay ahead of the style curve with our curated guide to the hottest trends of the season. From fashion essentials to home decor must-haves, we've got you covered. Explore the latest colors, patterns, and styles that will elevate your look and lifestyle. Don't miss out on the chance to be a trendsetter with the carefully selected items from our [Your Brand] collection.
        </p>

        {/* <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a> */}
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Blog
