import RestroCard from "./RestroCard.js";
import restList from "../utils/mockData.js";
import { useState } from "react";
const BodyComponent = () => {
  const [restaurantList, setrestaurantList] = useState(restList);
  return (
    <div className="bodycomp">
      <div>
        <button
          id="srcbtn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurantList(filteredList);
          }}
        >
          Top Restaurants
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
