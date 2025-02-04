import { useEffect, useState } from "react";

const RestroMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8134554&lng=85.8312359&restaurantId=702417&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResMenu(json.data);
  };
  console.log(resMenu);

  return (
    <div>
      <h1>{resMenu?.cards[2]?.card?.card?.info?.name}</h1>
      <h1>{resMenu?.cards[2]?.card?.card?.info?.avgRating}</h1>
      <h2>{resMenu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h2>
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
