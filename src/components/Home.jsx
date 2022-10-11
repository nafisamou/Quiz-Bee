import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
            Welcome To My Website
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            ......
          </p>
        </div>
      </div>

      <div className="bg-white">
      <Cards></Cards>
      </div>
    </section>
  );
};

export default Home;
