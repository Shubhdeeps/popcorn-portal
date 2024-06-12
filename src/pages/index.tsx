import { createBrowserRouter } from "react-router-dom";
import Error404Page from "./Error404.page";
import Layout from "@/components/Layout";
import HomePage from "./Home.page";
import MovieOverviewPage from "./MovieOverview.page";
import TvOverviewPage from "./TvOverview.page";
import PersonOverviewPage from "./PersonOverview.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <MovieOverviewPage />,
        path: "/movie/:movieId",
      },
      {
        element: <TvOverviewPage />,
        path: "/tv/:tvId",
      },
      {
        element: <PersonOverviewPage />,
        path: "/person/:personId",
      },
    ],
  },
]);
