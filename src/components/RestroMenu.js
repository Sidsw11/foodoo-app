import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const RestroMenu = () => {
  
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8134554&lng=85.8312359&restaurantId=702417&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    //console.log(json);
    setResMenu(json.data?.cards[2]?.card?.card?.info);
    console.log(json.data?.cards[2]?.card?.card?.info)
    
  };
  
  if (resMenu === null) return<Shimmer />;
  
  const { name, avgRating, cuisines } = resMenu;
  console.log("qwe ", cuisines);

 // return <h3>{JSON.stringify(cuisines)}</h3>;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div>
        Menu
        <ul>item 1</ul>
        <ul>item 2</ul>
        <ul>item 3</ul>
      </div>
    </div>
  );
};

export default RestroMenu;
