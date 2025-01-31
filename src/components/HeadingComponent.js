import { useState } from "react";
import logo from "../tastyfood.png";
import { Link } from "react-router-dom";
const HeadingComponent = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="headcomp">
      <div>
        <img id="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
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
