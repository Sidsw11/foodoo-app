import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";

const RestroMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    //console.log(json);
    setResMenu(json.data?.cards[2]?.card?.card?.info);
    console.log("RestMenu");
    console.log(json);
    setMenuItems(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log("MenuItems");
    console.log(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  if (resMenu === null) return <Shimmer />;

  const { name, avgRating, cuisines } = resMenu;
  console.log("qwe ", cuisines);
  //const {} = menuItems;

  // return <h3>{JSON.stringify(cuisines)}</h3>;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div>
        Menu
        <ul>
          {menuItems.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}-{" Rs."}
              {item?.card?.info?.price / 100}{" "}
              <img
                className="MenuPic"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
