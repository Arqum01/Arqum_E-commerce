import React from "react";
import { Link } from "react-router-dom";
import BlackShirt from "/BlackShirt.jpg";
import WhiteShirt from "/whiteShirt.jpg";
import Shorts from "/Shorts.jpg";
import Cap from "/Cap.jpg";

const Trending = () => {
  const staticData = [
    {
      id: 1,
      img: BlackShirt,
      Heading: "Basic Black Tee",
      Price: "£24.00 GBP",
    },
    {
      id: 2,
      img: Shorts,
      Heading: "Basic Shorts",
      Price: "£24.00 GBP",
    },
    {
      id: 3,
      img: WhiteShirt,
      Heading: "Basic White Tee",
      Price: "£24.00 GBP",
    },
    {
      id: 4,
      img: Cap,
      Heading: "Basic Cap",
      Price: "£24.00 GBP",
    },
    {
      id: 5,
      img: BlackShirt,
      Heading: "Basic Black Tee",
      Price: "£24.00 GBP",
    },
    {
      id: 6,
      img: Shorts,
      Heading: "Basic Shorts",
      Price: "£24.00 GBP",
    },
  ];

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <p className="underline underline-offset-4 text-black">
              Trending Product
            </p>
            <h1 className="text-5xl font-extrabold mb-5 text-black">
              Our New Arrivals
            </h1>
          </header>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {staticData.map((staticData) => (
              <li key={staticData.id}>
                <Link to="/data" className="group block overflow-hidden">
                  <img
                    src={staticData.img}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {staticData.Heading}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {staticData.Price}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Trending;
