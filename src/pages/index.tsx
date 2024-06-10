import { createBrowserRouter } from "react-router-dom";
import Error404Page from "./Error404.page";
import Layout from "@/components/Layout";
import HomePage from "./Home.page";
import MediaOverviewPage from "./MediaOverview.page";

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
        element: <MediaOverviewPage />,
        path: "/:mediaType/:mediaId",
      },
    ],
  },
]);
