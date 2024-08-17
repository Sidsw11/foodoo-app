import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './tastyfood.png';
import cart from './cartlogo.png';

const HeadingComponent = () => {
    return(
    <div className="headcomp">
        <div>
            <img id ="logo"src={logo}/>
        </div>
        <div className='nav-items'>
            <ul >
                <li>Home</li>
                <li>Contact Us</li>
                <li>My Cart<img id="cartlogo" src={cart}></img></li> 
                
            </ul>
        </div>
    </div>
)
};
const BodyComponent =() =>{
    return(
    <div className="bodycomp">
        <button id="srcbtn">
            Search
    </button>
    </div>
)};

const AppLayout =() =>{ 
    return(
    <div classname="app">
        <HeadingComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </div>
)};
const FooterComponent = () => {
    return(
    <div id="footcomp">
        <li>
            Copy Right
            Made with ❤️ in India
            All Rights Reserved
        </li>
    </div>
)};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);