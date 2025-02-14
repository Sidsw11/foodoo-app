import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenuItems = (resId) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuItems(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(json)
  };
  return menuItems;
};
export default useMenuItems;
