import logo from "../../tastyfood.png";
const HeadingComponent = () => {
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
              My Cart
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeadingComponent;