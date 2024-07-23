import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/404Page";
import Spinner from "./components/Elements/Spinner";

const LazyHomePage = React.lazy(() => import("./pages/homePage.jsx"));
const LazyAboutPage = React.lazy(() => import("./pages/aboutPage"));
const LazyProjectPage = React.lazy(() => import("./pages/projectPage"));
const LazyDescPage = React.lazy(() => import("./pages/descPage"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
    element: (
      <Suspense fallback={<Spinner />}>
        <LazyDescPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
