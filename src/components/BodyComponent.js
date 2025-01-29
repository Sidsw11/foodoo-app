import RestroCard from "./RestroCard.js";
import restList from "../utils/mockData.js";
import { useState,useEffect } from "react";
const BodyComponent = () => {
  const [restaurantList, setrestaurantList] = useState(restList);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8134554&lng=85.8312359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(data);
    console.log(json);
    
  }
  return (
    <div className="bodycomp">
      <div>
        <button
          className="filter"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurantList(filteredList);
          }}
        >
          Top Restaurants
        </button>
        <button
          className="filter"
          onClick={() => {
            const vegList = restaurantList.filter((res) => res.info?.veg);
            setrestaurantList(vegList);
          }}
        >
          Veg
        </button>
      </div>
      <div className="rest_container">
        {restaurantList.map((restu) => (
          <RestroCard key={restu.info.id} restData={restu} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
