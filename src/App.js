import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import BodyComponent from "./components/BodyComponent.js";
import FooterComponent from "./components/FooterComponent.js";

const AppLayout = () => {
  return (
    <div className="app">
      <HeadingComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
