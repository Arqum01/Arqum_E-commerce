import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-black sm:text-5xl">
              Follow US ON Instagram
            </h2>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link to="#" className="group block overflow-hidden">
                <img
                  src="whiteShirt.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </Link>
            </li>

            <li>
              <Link to="#" className="group block overflow-hidden">
                <img
                  src="Cap.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </Link>
            </li>

            <li>
              <Link to="#" className="group block overflow-hidden">
                <img
                  src="BlackShirt.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center h-100">
          <Link
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-black mt-2 mb-10"
            to="/"
          >
            @Willson / Store
          </Link>
        </div>
      </section>
    </>
  );
};

export default Social;
