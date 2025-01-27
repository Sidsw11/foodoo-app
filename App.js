import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./tastyfood.png";
import cart from "./cartlogo.png";
import dishpic from "./vegpulao.jpg";

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
const restList = [
  {
    info: {
      id: "205745",
      name: "Rest Inn",
      cloudinaryImageId: "cfrttjkar7i7yh7yeydv",
      locality: "Marine Drive Road",
      areaName: "Dolamandap Sahi",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian"],
      avgRating: 3.7,
      parentId: "169018",
      avgRatingString: "3.7",
      totalRatingsString: "454",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/rest-inn-marine-drive-road-dolamandap-sahi-rest205745",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "752523",
      name: "Mio Amore",
      cloudinaryImageId: "d6d436b46ea16210292b40a2c5a6ca49",
      locality: "Hospital square",
      areaName: "Balagandi",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts", "Snacks", "Confectionery"],
      avgRating: 4.4,
      parentId: "4569",
      avgRatingString: "4.4",
      totalRatingsString: "664",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-25 21:10:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/mio-amore-hospital-square-balagandi-rest752523",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "985318",
      name: "Domino's Chicken Fiesta",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/f604ac8c-cfb7-4ac6-84ab-d907173323a9_985318.jpg",
      locality: "Vip Road",
      areaName: "Purussottam Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "533739",
      avgRatingString: "4.5",
      totalRatingsString: "12",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-26 01:57:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/dominos-chicken-fiesta-vip-road-purussottam-nagar-rest985318",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "548750",
      name: "Food Paradise",
      cloudinaryImageId: "piy0w6dapekelsvspqoq",
      locality: "Heragoheri Sahi Road",
      areaName: "na",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food"],
      avgRating: 3,
      veg: true,
      parentId: "5250",
      avgRatingString: "3.0",
      totalRatingsString: "6",
      sla: {
        deliveryTime: 34,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/food-paradise-heragoheri-sahi-road-na-rest548750",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870017",
      name: "Indiana Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/a42f9138-9b6e-42cf-a4fa-0b1aa0439c38_870017.jpg",
      locality: "Mali Jaga Hanuman Temple",
      areaName: "Balagandi",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
      avgRating: 4.2,
      parentId: "5714",
      avgRatingString: "4.2",
      totalRatingsString: "69",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-26 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/indiana-burgers-mali-jaga-hanuman-temple-balagandi-rest870017",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870014",
      name: "Sundae Everyday Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/12/4efd8fcb-fe93-4d37-b1e6-3fa67d783ef7_870014.jpg",
      locality: "Mali Jaga Hanuman Temple",
      areaName: "Balagandi",
      costForTwo: "₹100 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts"],
      avgRating: 4.3,
      veg: true,
      parentId: "20021",
      avgRatingString: "4.3",
      totalRatingsString: "17",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-26 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹124",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/sundae-everyday-ice-creams-mali-jaga-hanuman-temple-balagandi-rest870014",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870024",
      name: "Burger It Up",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/13/9c23bfd7-f1f8-4eed-aee4-84bfd2dec4cc_870024.jpg",
      locality: "Mali Jaga Hanuman Temple",
      areaName: "Balagandi",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "Beverages", "Desserts", "American", "Cafe"],
      avgRating: 4.1,
      parentId: "7864",
      avgRatingString: "4.1",
      totalRatingsString: "23",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-26 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/burger-it-up-mali-jaga-hanuman-temple-balagandi-rest870024",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870016",
      name: "Cupcake Bliss Cake & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/12/d01eae94-327e-4398-8ac2-74922adbf9fb_870016.jpg",
      locality: "Mali Jaga Hanuman Temple",
      areaName: "Balagandi",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages", "Cakes"],
      avgRating: 4.1,
      parentId: "66732",
      avgRatingString: "4.1",
      totalRatingsString: "21",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-26 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e66ed85d-dc95-4b46-9acb-cfc67b5c532c",
    },
    cta: {
      link: "https://www.swiggy.com/city/puri/cupcake-bliss-cake-and-desserts-mali-jaga-hanuman-temple-balagandi-rest870016",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestroCard = ({ restData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restData?.info;
  return (
    <div className="restcard">
      <img
        id="dishpicture"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div className="restdetails">
        <div>
          <strong>{name}</strong>
        </div>
        <div>{avgRating + "⭐" + "." + restData?.info?.sla?.slaString}</div>
        <div>{cuisines.join(", ")}</div>
        <div>{costForTwo}</div>
        <div>{}</div>
      </div>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="bodycomp">
      <div>
        <button id="srcbtn">Search</button>
      </div>
      <div className="rest_container">
        <RestroCard restData={restList[0]} />
        
      </div>
    </div>
  );
};
const FooterComponent = () => {
  return (
    <div className="footcomp">
      <ul>
        <li>
          ©️Copy Right 2024<li>All Rights Reserved</li>
        </li>
        <li>Made with ❤️ in India</li>
        <li>
          Contact Us<li>Sri Jagannath Puri</li>
        </li>
      </ul>
    </div>
  );
};

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
