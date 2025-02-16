import RestroCard from "./RestroCard.js";
import restList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { REST_API } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurantList from "../utils/useRestaurantList.js";
import useSearchedList from "../utils/useSearchedList.js";
const BodyComponent = () => {
 // const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();
 // const [searchedList, setSearchedList] = useState();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(REST_API);

  //   const json = await data.json();
  //   console.log(json);
  //   setrestaurantList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setSearchedList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };
  const restaurantList = useRestaurantList();
  const searchedList = useSearchedList();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        OOPS!!! Looks Like you are Offline, Please check your Internet
        Connection.
      </h1>
    );
  }

  return (restaurantList.length === 0 || searchedList.length === 0) ? (
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
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setSearchedList(searchRestaurantList);
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
            setSearchedList(filteredList);
          }}
        >
          Top Restaurants
        </button>
        <button
          className="filter"
          onClick={() => {
            const vegList = restaurantList.filter((res) => res.info?.veg);
            setSearchedList(vegList);
          }}
        >
          Veg
        </button>
      </div>
      <div className="rest_container">
        {searchedList.map((restu) => (
          <Link key={restu?.info?.id} to={"restaurant/" + restu?.info?.id}>
            <RestroCard restData={restu} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
