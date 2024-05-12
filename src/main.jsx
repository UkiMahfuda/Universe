import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/homePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComingSoon from "./pages/soonPage";
import AboutPage from "./pages/aboutPage";
import ProjectPage from "./pages/projectPage";
import { ErrorPage } from "./pages/404Page";
import DescPage from "./pages/descPage";
import { ProjectList } from "./components/utils/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home89",
    element: <HomePage />,
  },
  {
    path: "/about89",
    element: <AboutPage />,
  },
  {
    path: "/project89",
    element: <ProjectPage />,
  },
  {
    path: "/project/desc",
    element: <DescPage descProject={ProjectList} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
