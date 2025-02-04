import { useEffect } from "react";

const RestroMenu = () => {
  // useEffect(()=>{
  //     fetchData();
  // },[])
  // const fetchData =async ()=>{
  //     const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8134554&lng=85.8312359&restaurantId=702417&catalog_qa=undefined&submitAction=ENTER");

  //     const json= await data.json();
  //     const restID=json;

  // }
  return (
    <div>
      <h1>Name</h1>
      <h2>Rating {" . "} Cost for two</h2>
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
