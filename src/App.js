import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import BodyComponent from "./components/BodyComponent.js";
import FooterComponent from "./components/FooterComponent.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import RouteError from "./components/RouteError.js";


const AppLayout = () => {
  return (
    <div className="app">
      <HeadingComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<RouteError/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
