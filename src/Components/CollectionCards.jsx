import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./ProductData"

const CollectionCards = () => {

  // // Display only the first 8 cards
  const first8Cards = data.slice(0, 6);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
          <p className="underline underline-offset-4 text-black">Best Products</p>
            <h1 className="text-5xl font-extrabold mb-5 text-black">
              Best Selling Products
            </h1>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {first8Cards.map((item) => (
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
                    <h3 className="text-xl font-medium text-white">
                      {item.title}
                    </h3>
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

export default CollectionCards;
