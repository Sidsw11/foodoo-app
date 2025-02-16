import { useState, useEffect } from "react";
import { REST_API } from "./constants";

const useSearchedList = () => {
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    setSearchedList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return searchedList;
};
export default useSearchedList;
