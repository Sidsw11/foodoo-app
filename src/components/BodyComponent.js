import RestroCard from "./RestroCard.js";
import restList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
const BodyComponent = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8134554&lng=85.8312359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setrestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodycomp">
      <div>
        <div>
          <input
            type="text"
            className="Search-text-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const searchRestaurantList = restaurantList.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              
              setrestaurantList(searchRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
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
          <RestroCard key={restu?.info?.id} restData={restu} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
