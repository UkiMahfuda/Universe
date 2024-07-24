import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/404Page";
import Spinner from "./components/Elements/Spinner";
import DescPage from "./pages/descPage";

const LazyHomePage = React.lazy(() => import("./pages/homePage.jsx"));
const LazyAboutPage = React.lazy(() => import("./pages/aboutPage"));
const LazyProjectPage = React.lazy(() => import("./pages/projectPage"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <LazyHomePage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Spinner />}>
        <LazyAboutPage />
      </Suspense>
    ),
  },
  {
    path: "/project",
    element: (
      <Suspense fallback={<Spinner />}>
        <LazyProjectPage />
      </Suspense>
    ),
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
