import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResMenu(json.data?.cards[2]?.card?.card?.info);
    
  };
  return resMenu;
};
export default useRestaurantMenu;
