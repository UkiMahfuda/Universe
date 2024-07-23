import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/homePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import ProjectPage from "./pages/projectPage";
import { ErrorPage } from "./pages/404Page";
import DescPage from "./pages/descPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
  {
    path: "/project/desc/:slug",
    element: <DescPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
