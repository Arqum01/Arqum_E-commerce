import { FaRegTrashCan } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { increment , decrement , remove } from '../features/cartSlice';

const Carts = () => {
  const dispatch = useDispatch();
  let discount = 235;
  const { id } = useParams();
  const items = useSelector((state) => state.cart.items);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  let Price = useSelector((state) => state.cart.totalPrice);
  const selectedItem = items.find((item) => item.id === parseInt(id, 10));
  if (!selectedItem) {
    return <p>Item not found</p>;
  }
  const { title, images, price } = selectedItem;
  if(quantity == 0){
    discount = 0;
  }
  let pbd = price * quantity;
  Price = (price*quantity) - discount;
  console.log(Price)
  return (
    <div className="mx-auto pt-20 max-w-7xl px-2 lg:px-0 ">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              <div key={id} className="">
                <li className="flex py-6 sm:py-6 ">
                  <div className="flex-shrink-0">
                    <img
                      src={images}
                      alt={title}
                      className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <p
                              className="font-semibold text-black"
                            >
                              {title}
                            </p>
                          </h3>
                        </div>
                        <div className="mt-1 flex items-end">
                          <p className="text-sm font-medium text-gray-900">
                            &nbsp;&nbsp;₹{price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="mb-2 flex">
                  <div className="min-w-24 flex">
                    <button type="button" className="h-7 w-7" onClick={() => dispatch(decrement())}>
                      -
                    </button>
                    <input
                      type="text"
                      className="mx-1 h-7 w-9 rounded-md border text-center"
                      value={quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center"
                      onClick={() => dispatch(increment())}
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-6 flex text-sm">
                    <button
                      type="button"
                      className="flex items-center space-x-1 px-2 py-1 pl-0"
                    >
                      <FaRegTrashCan size={12} className="text-red-500" />
                      <span className="text-xs font-medium text-red-500" onClick={() => dispatch(remove())}>
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </section>
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price ({quantity} item)</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ {pbd}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    ₹ {discount}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹ {Price}
                  </dd>
                </div>
                <div className="mt-5">
                  <Link
                    className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-black mt-2 mb-10"
                    to="/"
                  >
                    Checkout
                  </Link>
                </div>
              </dl>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Carts;
