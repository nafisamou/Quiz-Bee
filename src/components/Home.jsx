import React from "react";
import Cards from "./Cards";
import { FiBarChart } from "react-icons/fi";
import Lottie from "lottie-react";
import Quiz from "../assets/quiz.json";

const Home = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold  tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                An Online <br className="hidden md:block font-sans" />
                <span className="inline-block text-blue-400 mt-3 font-sans font-bold">
                  Quiz Platform
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                An online quiz maker is a useful tool for facilitating both
                kinds of growth. Marketers can use quizzes as part of a social
                media marketing strategy to generate brand awareness or to drive
                engagement. Organizations also use quizzes to strengthen lessons
                from onboarding or training. Project management software
                platforms, like Wrike, create quizzes for customers after
                product tutorials. As a result they reduced product training
                time by 70%. Teachers and trainers can create a quiz to make
                lessons more interactive and engaging. It's been researched and
                proven that regular quizzes-not to be graded or evaluated (this
                is key)-boost memory retention, drive engagement, and make
                learning fun. More on this in a bit
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/statistics"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Statistics</span>
                <FiBarChart />
              </a>
              <a
                href="/blog"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700 text-lg text-blue-400"
              >
                Learn More...
              </a>
            </div>
          </div>

          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <Lottie animationData={Quiz} loop={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Cards></Cards>
      </div>
    </section>
  );
};

export default Home;
