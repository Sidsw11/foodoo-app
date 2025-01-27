import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./src/components/HeadingComponent.js";
import BodyComponent from "./src/components/BodyComponent.js";
import FooterComponent from "./src/components/FooterComponent.js";

const AppLayout = () => {
  return (
    <div classname="app">
      <HeadingComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
