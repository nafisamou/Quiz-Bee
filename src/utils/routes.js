import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CardDetails from "../components/CardDetails";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

import Root from "../components/Root";

import Statistics from "../components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />,
      },

      {
        path: "singleCard/:singleCardId",
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.singleCardId}`
          ),
        element: <CardDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
