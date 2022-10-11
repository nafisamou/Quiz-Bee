import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Interview </span>
              </span>{" "}
              Questions
            </h2>
            <p className="text-base text-gray-700 md:text-xl ">
            A reader lives a thousand lives before he dies.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What's the purpose of React Router?
                </p>
                <p className="text-gray-700">
                  React Router is a standard library for routing in React. It
                  enables the navigation among views of various components in a
                  React Application, allows changing the browser URL, and keeps
                  the UI in sync with the URL.
                  <br />
                  <br />
                  The application will contain three components: home component,
                  about a component, and contact component. We will use React
                  Router to navigate between these components.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  How does Context Api works?
                </p>
                <p className="text-gray-700">
                  The React Context API is a way for a React app to effectively
                  produce global variables that can be passed around. This is
                  the alternative to "prop drilling" or moving props from
                  grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management
                  using Redux.
                  <br />
                  <br />
                  Context API is a (kind of) new feature added in version 16.3
                  of React that allows one to share state across the entire app
                  (or part of it) lightly and with ease.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is useRef?
                </p>
                <p className="text-gray-700">
                useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React, React will set its .current property to the corresponding DOM node whenever that node changes.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                Why we use useRef in React?
                </p>
                <p className="text-gray-700">
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
