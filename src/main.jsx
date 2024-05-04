import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/homePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComingSoon from "./pages/soonPage";
import AboutPage from "./pages/aboutPage";
import ProjectPage from "./pages/projectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
