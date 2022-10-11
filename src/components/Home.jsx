import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className=" sm:leading-normal font-bold lg:leading-relaxed lg:text-xl sm:text-base xl:max-w-3xl text-gray-800">
          An online quiz maker is a useful tool for facilitating both kinds of growth. Marketers can use quizzes as part of a social media marketing strategy to generate brand awareness or to drive engagement. Organizations also use quizzes to strengthen lessons from onboarding or training. Project management software platforms, like Wrike, create quizzes for customers after product tutorials. As a result they reduced product training time by 70%. Teachers and trainers can create a quiz to make lessons more interactive and engaging. It's been researched and proven that regular quizzes-not to be graded or evaluated (this is key)-boost memory retention, drive engagement, and make learning fun. More on this in a bit..
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
