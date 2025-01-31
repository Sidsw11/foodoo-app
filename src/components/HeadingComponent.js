import { useState } from "react";
import logo from "../tastyfood.png";
const HeadingComponent = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="headcomp">
      <div>
        <img id="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>
            <a href="/about">About Us </a>
          </li>
          <li>My Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
