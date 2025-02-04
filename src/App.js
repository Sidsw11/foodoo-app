import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import BodyComponent from "./components/BodyComponent.js";
import FooterComponent from "./components/FooterComponent.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import AboutUs from "./components/AboutUs.js";
import RouteError from "./components/RouteError.js";
import RestroMenu from "./components/RestroMenu.js";

const AppLayout = () => {
  return (
    <div className="app">
      <HeadingComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <RouteError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
