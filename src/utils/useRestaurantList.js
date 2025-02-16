import { useState, useEffect } from "react";
import { REST_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setrestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    setrestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList;
};
export default useRestaurantList;
