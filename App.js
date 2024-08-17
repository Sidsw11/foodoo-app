import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './tastyfood.png';
import cart from './cartlogo.png';
import dishpic from'./vegpulao.jpg';

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
const RestroCard = () => {
    return(
        <div className='restcard'>
            <img id="dishpicture"src={dishpic}></img>
            <div className='restdetails'>
                <div><strong>Restaurant Name</strong></div>
                <div>Dish_Name,Cuisine</div>
                <div>Ratings</div>
            </div>
        </div>
    )
};
const BodyComponent =() =>{
    return(
    <div className="bodycomp">
        <div>
            <button id="srcbtn">
                Search
            </button>
        </div>
        <div className='rest_container'>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            <RestroCard/>
            

        </div>
        
    </div>
    
)};
const FooterComponent = () => {
    return(
    <div className="footcomp">
        <ul>
            <li>©️Copy Right 2024<li>All Rights Reserved</li></li>
            <li>Made with ❤️ in India</li>
            <li>Contact Us<li>Bhubanewar</li></li>
        </ul>
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



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);