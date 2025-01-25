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
const restObj = {
    "info": {
      "id": "205745",
      "name": "Rest Inn",
      "cloudinaryImageId": "cfrttjkar7i7yh7yeydv",
      "locality": "Marine Drive Road",
      "areaName": "Dolamandap Sahi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 3.7,
      "parentId": "169018",
      "avgRatingString": "3.7",
      "totalRatingsString": "454",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-01-25 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
};
const RestroCard = ({restData}) => {
    return(
        <div className='restcard'>
            <img id="dishpicture"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restObj.info.cloudinaryImageId}></img>
            <div className='restdetails'>
                <div><strong>{restObj.info.name}</strong></div>
                <div>{restObj.info.cuisines.join(",")}</div>
                <div>{restObj.info.avgRating+ "⭐"}</div>
                <div>{restObj.info.costForTwo}</div>
                <div>{restObj.info.sla.slaString}</div>
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
            
            <RestroCard restData={restObj}/>
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
            <li>Contact Us<li>Sri Jagannath Puri</li></li>
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