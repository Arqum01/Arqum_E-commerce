import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "I can't believe the incredible deals I found on this Store! The products exceeded my expectations, and the customer service was outstanding. Definitely my new go-to for online shopping!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "I stumbled upon this Brand and decided to give it a try. What a pleasant surprise! The products are top-notch, and the shipping was lightning fast. I've already recommended it to all my friends!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "Shopping on this Brand was a game-changer for me. The variety of items is unmatched, and the prices are unbeatable. My order arrived well-packaged and in perfect condition. 5 stars!",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Ashfaq ahmed",
      title: "Founder of meta",
      quote:
        "I've been a loyal customer of this Brand for months now, and I can't get enough. The quality of their products is consistently excellent, and the website is so easy to navigate. A fantastic online shopping experience!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Shamaila",
      title: "Product designer",
      quote:
        "I'm so impressed with the professionalism of this Brand. The customer support team went above and beyond to assist me with my inquiries. The products I ordered were fantastic, and the overall shopping process was a breeze. Highly recommend!",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 3000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentTestimonial]);

  return (
    <section className="py-14 bg-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl text-gray-900 font-bold pb-6">
            Happy Customers
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial === idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-xl sm:text-1xl">
                        {item.quote}
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                    currentTestimonial === idx ? "bg-indigo-600" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
